import { Component, inject, OnInit } from '@angular/core';
import { SuperherosServiceService } from '../../services/superheros-service.service'
import { catchError, finalize, tap, of, take } from 'rxjs';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private apiService = inject(SuperherosServiceService);
  datos: any;
  page: number = 1;
  size: number = 10;
  loading: boolean = false;
  error: string | null = null;
  selectedHero: any = null;
  modalInstance: any;
  

  ngOnInit(): void {
    this.getDataSuperHeroPaginate(this.page, this.size);
  }

  /**
   * @function getDataSuperHeroPaginate
   * @param page 
   * @param size 
   */
  getDataSuperHeroPaginate(page: number, size: number) {
    this.loading = true;
    this.apiService.getDataSuperHeroPaginate(page, size).pipe(
      tap(res => {
        this.datos = res.items;
        console.log('Datos obtenidos:', res);
      }),
      catchError(err => {
        console.error('Error al obtener datos', err);
        this.error = 'No se pudieron cargar los datos.';
        return of([]);
      }),
      finalize(() => {
        this.loading = false;
      }),
      take(1)
    ).subscribe();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getDataSuperHeroPaginate(this.page, this.size);
    }
  }

  nextPage() {
    this.page++;
    this.getDataSuperHeroPaginate(this.page, this.size);
  }

  openModal(hero: any) {
    this.selectedHero = hero;

    if (!this.modalInstance) {
      const modalElement = document.getElementById('heroModal');
      this.modalInstance = new bootstrap.Modal(modalElement!);
    }
    this.modalInstance.show();
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }


}

export interface HeroResponse {
  length: number;
  size: number;
  page: number;
  firstPage: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
  items: Hero[];
}

export interface Hero {
  id: number;
  name: string;
  slug: string;
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  biography: {
    fullName: string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string | null;
    eyeColor: string;
    hairColor: string;
    height: string[];
    weight: string[];
  };
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}

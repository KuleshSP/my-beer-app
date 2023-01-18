export type BeerId = number;

export interface BeerCard {
  id: BeerId;
  name: string;
  description: string;
  abv: number;
  image_url: string;
  tagline: string;
  food_pairing: string[];
}

export type BeerCards = BeerCard[];

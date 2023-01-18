import {BeerId} from 'types';

export interface GetBeerParams {
  id: BeerId;
}

export interface GetBeersParams {
  name?: string | null;
  page: number;
}

import {ITEMS_PER_PAGE} from 'constants';
import {BeerCards} from 'types';
import {instance} from '_main/services/axios';
import type {GetBeerParams, GetBeersParams} from './types';

const requests = {
  getBeer: (params: GetBeerParams): Promise<BeerCards> => {
    return instance.get(`/v2/beers/${params.id}`);
  },
  getBeers: (params: GetBeersParams): Promise<BeerCards> => {
    const {page} = params;

    return instance.get(`/v2/beers?page=${page}&per_page=${ITEMS_PER_PAGE}`, {
      params: {
        beer_name: params.name,
      },
    });
  },
};

export default requests;

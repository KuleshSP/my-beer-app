import React, {Fragment} from 'react';
import type {BeerCards} from 'types';
import {Card, Link} from 'components';
import routeTemplates from 'routes/route-templates';
import classes from './styles.module.scss';

interface CardsProps {
  items: BeerCards;
  error?: boolean;
}

const Cards = (props: CardsProps): JSX.Element => {
  const {items, error} = props;

  return (
    <div className={classes.cardsBox}>
      {error ? (
        <div>
          <h4 className={classes.errorText}>An error has occurred</h4>
          <Link to={routeTemplates.home.path}>Go back to Home page</Link>
        </div>
      ) : (
        <Fragment>
          {items.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </Fragment>
      )}
    </div>
  );
};

export default Cards;

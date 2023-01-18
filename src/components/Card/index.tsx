import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import routeTemplates from 'routes/route-templates';
import type {BeerCard} from 'types';
import {truncateText} from 'utils/text';
import cx from 'classnames';
import classes from './styles.module.scss';

interface CardProps extends BeerCard {}

const Card = (props: CardProps): JSX.Element => {
  const {id, name, description, image_url: imageUrl} = props;
  const [isLoading, toggleIsLoading] = useState<Boolean>(true);

  return (
    <Link to={routeTemplates.overview.build({id})} className={classes.cardBox}>
      <h4 className={classes.header} title={name}>
        {name}
      </h4>

      {imageUrl ? (
        <div className={classes.imageBox}>
          <img className={classes.image} src={imageUrl} onLoad={() => toggleIsLoading(false)} />
          <div className={cx(classes.imageOverlay, {[classes.imageOverlayHidden]: !isLoading})} />
        </div>
      ) : (
        <div className={classes.noImage}>No image</div>
      )}

      <p className={classes.description} title={description}>
        {truncateText(description, 140)}
      </p>
    </Link>
  );
};

export default Card;

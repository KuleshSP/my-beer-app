import React, {useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {RootState} from '_main/services/types';
import {Link, Paper} from 'components';
import Error from 'features/Error';
import cx from 'classnames';
import {getCardAsyncState, getBeerOverviewPageState} from '../services/selectors';
import {actions as beerOverviewActions} from '../services/actions';
import classes from './styles.module.scss';

const connector = connect((state: RootState) => {
  const {card} = getBeerOverviewPageState(state);
  const cardAsyncState = getCardAsyncState(state);

  return {
    card,
    cardAsyncState,
  };
}, beerOverviewActions);

type ReduxProps = ConnectedProps<typeof connector>;

const BeerOverviewPage = (props: ReduxProps) => {
  const {card, cardAsyncState, mountPage, unmountPage} = props;
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, toggleIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    mountPage({id: Number(params.id)});

    return () => {
      unmountPage();
    };
  }, []);

  if (cardAsyncState.error) {
    return <Error />;
  }

  return (
    <Paper classNames={classes.box}>
      <div className={classes.leftSide}>
        {card && (
          <div className={classes.imageBox}>
            <img
              className={classes.image}
              src={card.image_url}
              onLoad={() => toggleIsLoading(false)}
            />
            <div
              className={cx(classes.imageOverlay, {[classes.imageOverlayHidden]: !isLoading})}
            />
          </div>
        )}

        <Link
          to={''}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className={classes.goBackLink}
        >
          Go back
        </Link>
      </div>

      <div className={classes.rightSide}>
        <div className={classes.title}>{card ? card.name : '---'}</div>

        <table className={classes.attributesTable}>
          <tbody>
            <tr>
              <td>ABV:</td>
              <td>{card ? `${card.abv}%` : '---'}</td>
            </tr>
            <tr>
              <td>Tagline:</td>
              <td>{card ? card.tagline : '---'}</td>
            </tr>
            <tr>
              <td>Food pairing:</td>
              <td>{card ? card.food_pairing.join(', ') : '---'}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{card ? card.description : '---'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Paper>
  );
};

export default connector(BeerOverviewPage);

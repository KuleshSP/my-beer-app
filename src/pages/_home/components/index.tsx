import React, {useEffect, useRef} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import {ITEMS_PER_PAGE} from 'constants';
import {Paper, Cards} from 'components';
import {RootState} from '_main/services/types';
import Pagination from 'features/Pagination';
import Error from 'features/Error';
import {actions as homePageActions} from '../services/actions';
import {getCardsAsyncState, getHomePageState} from '../services/selectors';

const connector = connect((state: RootState) => {
  const {pages} = getHomePageState(state);
  const cardsAsyncState = getCardsAsyncState(state);

  return {
    pages,
    cardsAsyncState,
  };
}, homePageActions);

type ReduxProps = ConnectedProps<typeof connector>;

const HomePage = (props: ReduxProps) => {
  const {pages, cardsAsyncState, mountPage, unmountPage, beersRequested, nextPageRequested} =
    props;

  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const page = searchParams.get('page');
  const isMountedPageEffect = useRef(false);
  const isMountedNameEffect = useRef(false);

  useEffect(() => {
    mountPage();

    beersRequested({name, page: Number(page) === 0 ? 1 : Number(page)});

    return () => {
      unmountPage();
    };
  }, []);

  useEffect(() => {
    if (isMountedPageEffect.current) {
      if (!pages[currentPage]) {
        beersRequested({name, page: Number(page) === 0 ? 1 : Number(page)});
      } else if (pages[currentPage].length === ITEMS_PER_PAGE) {
        nextPageRequested({name, page: Number(page) ? Number(page) + 1 : 2});
      }
    } else {
      isMountedPageEffect.current = true;
    }
  }, [page]);

  useEffect(() => {
    if (isMountedNameEffect.current) {
      beersRequested({name, page: Number(page) === 0 ? 1 : Number(page)});
    } else {
      isMountedNameEffect.current = true;
    }
  }, [name]);

  const currentPage = page ? Number(page) : 1;
  const isDisabled = pages[currentPage + 1] ? false : true;

  if (cardsAsyncState.error) {
    return <Error />;
  }

  if (pages[currentPage]?.length === 0) {
    return <Error message="Nothing is found, try to clean a search input" />;
  }

  return (
    <Paper>
      <Cards items={pages[currentPage] || []} />
      <Pagination isDisabled={isDisabled || cardsAsyncState.pending} />
    </Paper>
  );
};

export default connector(HomePage);

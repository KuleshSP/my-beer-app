import React, {useEffect, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import classes from './styles.module.scss';

interface PaginationProps {
  isDisabled: boolean;
}
const Pagination = (props: PaginationProps): JSX.Element => {
  const {isDisabled} = props;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const name = searchParams.get('name');
  const isMounted = useRef(false);

  const setInitialSearch = () => {
    searchParams.set('page', page ? page : '1');
    setSearchParams(searchParams, {replace: true});
  };

  useEffect(() => {
    setInitialSearch();
  }, []);

  useEffect(() => {
    if (isMounted.current && name === null && page === null) {
      setInitialSearch();
    } else {
      isMounted.current = true;
    }
  });

  return (
    <div className={classes.paginationBox}>
      <button
        className={classes.nextButton}
        onClick={() => {
          searchParams.set('page', page === null ? String(2) : String(Number(page) + 1));
          setSearchParams(searchParams);
        }}
        disabled={isDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

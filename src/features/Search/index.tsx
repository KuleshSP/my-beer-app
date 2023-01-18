import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {debounce} from 'lodash';
import {removeWhitespaces} from 'utils/text';
import classes from './styles.module.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  const [inputValue, setInputValue] = useState(name);
  const isMounted = useRef(false);

  const changeHandler = (e: any) => {
    if (removeWhitespaces(e.target.value) === '') {
      searchParams.delete('name');
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    } else {
      searchParams.set('page', '1');
      searchParams.set('name', e.target.value);
      setSearchParams(searchParams);
    }
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  const clearValue = () => {
    setInputValue('');
    setSearchParams(undefined);
  };

  useEffect(() => {
    if (isMounted.current) {
      if (name === null) {
        clearValue();
      }
    } else {
      isMounted.current = true;
    }
  }, [name]);

  return (
    <div className={classes.searchBox}>
      <input
        className={classes.searchInput}
        value={inputValue || ''}
        onChange={(e) => {
          debouncedChangeHandler(e);
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="Search"
      />

      {name && <button className={classes.clearButton} onClick={() => clearValue()} />}
    </div>
  );
};

export default Search;

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import _ from 'lodash';

const { Search } = Input;

const SearchBox = ({ refreshFunction }) => {
  const [SearchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  const delayedApiCall = useRef(
    _.debounce(value => refreshFunction(value), 400),
  ).current;

  const searchHandler = e => {
    setSearchTerm(e.target.value);
    delayedApiCall(e.target.value);
  };

  return (
    <>
      <CustomedSearch
        ref={inputRef}
        placeholder="Search..."
        onChange={searchHandler}
        value={SearchTerm}
      />
    </>
  );
};

const CustomedSearch = styled(Search)`
  width: 50%;
`;

export default SearchBox;

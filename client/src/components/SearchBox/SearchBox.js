import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

const SearchBox = ({ refreshFunction }) => {
  const [SearchTerm, setSearchTerm] = useState('');

  const searchHandler = e => {
    setSearchTerm(e.target.value);
    refreshFunction(e.target.value);
  };

  return (
    <>
      <CustomedSearch
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

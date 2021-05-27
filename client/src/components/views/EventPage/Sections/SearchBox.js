import React, { useState } from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const SearchBox = ({ refreshFunction }) => {
  const [SearchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    refreshFunction(e.target.value);
  };

  return (
    <>
      <Search
        placeholder="Search..."
        onChange={searchHandler}
        style={{ marginTop: "10px", marginLeft: "3rem" }}
        value={SearchTerm}
      />
    </>
  );
};

export default SearchBox;

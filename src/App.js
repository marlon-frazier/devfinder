import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

function App() {
  const [searchValue, setSearchValue] = useState('')
  
  const handleSearch = (value) => {
    setSearchValue(value)
  }

  return (
    <div className="app">
      <Logo />
      <SearchBar onSearch={handleSearch}/>
      <Profile searchValue={searchValue}/>
    </div>
  );
}

export default App;

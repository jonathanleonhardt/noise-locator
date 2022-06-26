import { SetStateAction, useState } from 'react';
import { StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: SetStateAction<string>) => setSearchQuery(query);

  return (
    <Searchbar autoFocus
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 10,
    margin: 10,
    color: '#000',
    borderColor: '#666',
    backgroundColor: '#FFF',
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 18,
  }
});

export default SearchBar;
//import { Component } from "react";
import { useState, useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// Functional components
const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setvalue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  //console.log(searchField);
  //console.log(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-tittle">Cats Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Cats"
      />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

// Class App
/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    //console.log("constructor");
  }

  componentDidMount() {
    //console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          //() => { console.log(this.state.monsters)}
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchField };
      }
      //() => {      console.log(searchField)     }
    );
  };

  render() {
    //console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-tittle">Cats Rolodex</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search Cats"
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}
*/
export default App;

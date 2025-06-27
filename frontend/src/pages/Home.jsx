import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";


function Home(){

  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "john wick", released_date: "2020" },
    { id: 2, title: "terminator", released_date: "2012" }, //A variable holding an array of movie objects
    { id: 3, title: "john wick", released_date: "2020" }, //User-defined	Defined by you inside the Home component
    { id: 4, title: "john wick", released_date: "2020" },
  ];

  const handleSearch = (e) =>{
    e.preventDefault()    
    alert(searchQuery)
    setSearchQuery("")

  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value = {searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map(
            (movie) => (
            // movie.title.toLowerCase().startsWith(searchQuery) && (
          <MovieCard movie={movie} key={movie.id} />
        )
    )}
      </div>
    </div>
  );

  //movie.map()-----A method that loops through each item in the movies array
  //.map() is Built-in


  //
}

export default Home;

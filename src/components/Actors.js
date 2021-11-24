import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)
  const actorElements= actors.map(actor => <div key={actor.name}>
    <h4>Name: {actor.name}</h4>
    <p>Movies: </p>
    <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
  </div>)

  return <div>
      <h1>Actors Page</h1>
      {actorElements}
    </div>;
}

export default Actors;

import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieCredit from "../components/movieCredit";

const MovieCreditPage = (props) => {
  let location = useLocation();
  const {movie, credit} = location.state;

  return (
    <PageTemplate movie={movie}>
      <MovieCredit credit={credit} />
    </PageTemplate>
  );
};

export default MovieCreditPage;
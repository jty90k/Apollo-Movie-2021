import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
// JavaScrip에 GraphQL을 작성한다. 그러나 JavaScript는 GraphQL을 이해하지 못한다.
// query 작성, query는 component 바깥에 위치한다.

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

//component
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "Loading...";
  }
  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.id}</h1>);
  }
};

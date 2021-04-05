import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  # query getMovie($id: Int) 이거는 apollo를 위한 query부분이다./왜냐면 Apollo가 변수의 type을 검사하도록 도와준다.
  query getMovie($id: Int!) {
    # 아래의 변수를 실제 query에게 준다. 그리고 이 query는 나의 server로 간다.
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: +params.id },
  });

  if (loading) {
    return "Loading";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};

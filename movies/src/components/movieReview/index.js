import React from "react";
import Typography from "@mui/material/Typography";

const MovieReview =  ({ review }) => {
  return (
    <>
    <Typography variant="h5" backgroundColor= 'rgb(211,211,211)' component="h3">
      <strong>Review By: {review.author}</strong>
    </Typography>

    <Typography variant="h6" backgroundColor= 'rgb(211,211,211)' component="p">
      {review.content} 
    </Typography>
    </>
  );
};
export default MovieReview

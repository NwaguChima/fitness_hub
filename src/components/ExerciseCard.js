import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typograhpy } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    </Link>
  );
};

export default ExerciseCard;

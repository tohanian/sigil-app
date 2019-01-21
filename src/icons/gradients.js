import * as React from "react";

export const mediumPurple_yellow = ({
  stopColorOne = "mediumPurple",
  stopColorTwo = "yellow"
}) => (
  <svg
    className={stopColorOne}
    id={stopColorTwo}
    xmlns="http://www.w3.org/2000/svg"
    width="35px"
    height="35px"
  >
    <defs>
      <linearGradient id="gradient-0">
        <stop offset="0%" stopColor={stopColorOne} stopOpacity="1" />
        <stop offset="100%" stopColor={stopColorTwo} stopOpacity="1" />
      </linearGradient>
    </defs>
    <rect
      className={stopColorOne}
      id={stopColorTwo}
      rx="5"
      ry="5"
      width="35"
      height="35"
      fill="url(#gradient-0)"
    />
  </svg>
);

export const red_black = ({ stopColorOne = "red", stopColorTwo = "black" }) => (
  <svg
    className={stopColorOne}
    id={stopColorTwo}
    xmlns="http://www.w3.org/2000/svg"
    width="35px"
    height="35px"
  >
    <defs>
      <linearGradient id="gradient">
        <stop offset="0%" stopColor={stopColorOne} stopOpacity="1" />
        <stop offset="100%" stopColor={stopColorTwo} stopOpacity="1" />
      </linearGradient>
    </defs>
    <rect
      className={stopColorOne}
      id={stopColorTwo}
      rx="5"
      ry="5"
      width="35"
      height="35"
      fill="url(#gradient)"
    />
  </svg>
);

export const gradientThree = ({
  stopColorOne = "#E3FCEC",
  stopColorTwo = "lightPink"
}) => (
  <svg
    className={stopColorOne}
    id={stopColorTwo}
    xmlns="http://www.w3.org/2000/svg"
    width="35px"
    height="35px"
  >
    <defs>
      <linearGradient id="gradientThree">
        <stop offset="0%" stopColor={stopColorOne} stopOpacity="1" />
        <stop offset="100%" stopColor={stopColorTwo} stopOpacity="1" />
      </linearGradient>
    </defs>
    <rect
      className={stopColorOne}
      id={stopColorTwo}
      rx="5"
      ry="5"
      width="35"
      height="35"
      fill="url(#gradientThree)"
    />
  </svg>
);

export const gradientFour = ({
  stopColorOne = "#f012be",
  stopColorTwo = "#0652dd"
}) => (
  <svg
    className={stopColorOne}
    id={stopColorTwo}
    xmlns="http://www.w3.org/2000/svg"
    width="35px"
    height="35px"
  >
    <defs>
      <linearGradient id="gradientFour">
        <stop offset="0%" stopColor={stopColorOne} stopOpacity="1" />
        <stop offset="100%" stopColor={stopColorTwo} stopOpacity="1" />
      </linearGradient>
    </defs>
    <rect
      className={stopColorOne}
      id={stopColorTwo}
      rx="5"
      ry="5"
      width="35"
      height="35"
      fill="url(#gradientFour)"
    />
  </svg>
);

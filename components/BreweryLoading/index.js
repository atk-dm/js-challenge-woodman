import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export const BreweryLoading = () => {
  const BreweryLoad = styled.article`
    .loading-header {
      text-align: center;
      color: yellow;
      text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
        1px 1px 0 #000;
      font-size: 48px;
      font-family: 'Oleo Script Swash Caps', cursive;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .beer-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .glass-left {
      width: 50px;
      animation: tilt-leftside 1s infinite;
      animation-timing-function: linear;
      transform-origin: bottom center;
      margin-right: 5px;
    }

    .glass-right {
      width: 50px;
      animation: tilt-rightside 1s infinite;
      animation-timing-function: linear;
      transform-origin: bottom center;
      margin-left: 5px;
    }

    @keyframes tilt-leftside {
      0% {
        transform: rotate(0);
      }
      50% {
        transform: rotate(26deg);
      }
      100% {
        transform: rotate(0);
      }
    }

    @keyframes tilt-rightside {
      0% {
        transform: rotate(0);
      }
      50% {
        transform: rotate(-26deg);
      }
      100% {
        transform: rotate(0);
      }
    }
  `;
  return (
    <BreweryLoad>
      <h1 className="loading-header">Finding Beer...Cheers!</h1>
      <div className="beer-container">
        <div className="glass-left">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/beer-bottle.png"
            alt="beer bottle"
          />
        </div>
        <div className="glass-right">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/beer.png"
            alt="beer mug"
          />
        </div>
      </div>
    </BreweryLoad>
  );
};

import React from "react";
import "../sass/Favorites.scss";

const Button = (props) => {
  return (
    <p className="favBtn" onClick={props.toggle}>
      {props.name}
    </p>
  );
};

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <div className="favContainer">
        <Button name={this.state.isOpen ? "Hide" : "Favorites ☆"} toggle={this.toggle} />
        {this.state.isOpen && (
          <div className="favInside">
            <a href="//weather.com/uk-UA/weather/today/l/UPXX0014:1:UP" title="Weather" target="blank" className="svgImg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"></path>
              </svg>
            </a>
            <a href="//images.google.com/" title="Google image search" target="blank" className="svgImg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 17 5 C 16.179688 5 15.601563 5.5 15.1875 5.96875 C 14.773438 6.4375 14.4375 6.96875 14.125 7.46875 C 13.8125 7.96875 13.527344 8.4375 13.28125 8.71875 C 13.097656 8.929688 12.976563 8.988281 12.96875 9 L 3 9 C 1.355469 9 0 10.355469 0 12 L 0 39 C 0 40.644531 1.355469 42 3 42 L 47 42 C 48.644531 42 50 40.644531 50 39 L 50 12 C 50 10.355469 48.644531 9 47 9 L 37.03125 9 C 37.035156 9.003906 37.023438 9 37 9 C 36.96875 8.976563 36.878906 8.902344 36.71875 8.71875 C 36.472656 8.4375 36.1875 7.96875 35.875 7.46875 C 35.5625 6.96875 35.226563 6.4375 34.8125 5.96875 C 34.398438 5.5 33.820313 5 33 5 Z M 17 7 L 33 7 C 32.9375 7 33.066406 7 33.3125 7.28125 C 33.558594 7.5625 33.84375 8.03125 34.15625 8.53125 C 34.46875 9.03125 34.8125 9.5625 35.21875 10.03125 C 35.625 10.5 36.179688 11 37 11 L 47 11 C 47.5625 11 48 11.4375 48 12 L 48 39 C 48 39.5625 47.5625 40 47 40 L 3 40 C 2.4375 40 2 39.5625 2 39 L 2 12 C 2 11.4375 2.4375 11 3 11 L 13 11 C 13.820313 11 14.375 10.5 14.78125 10.03125 C 15.1875 9.5625 15.53125 9.03125 15.84375 8.53125 C 16.15625 8.03125 16.441406 7.5625 16.6875 7.28125 C 16.933594 7 17.0625 7 17 7 Z M 25 11 C 17.832031 11 12 16.832031 12 24 C 12 31.167969 17.832031 37 25 37 C 32.167969 37 38 31.167969 38 24 C 38 16.832031 32.167969 11 25 11 Z M 25 13 C 31.085938 13 36 17.914063 36 24 C 36 30.085938 31.085938 35 25 35 C 18.914063 35 14 30.085938 14 24 C 14 17.914063 18.914063 13 25 13 Z M 8 14 C 6.894531 14 6 14.894531 6 16 C 6 17.105469 6.894531 18 8 18 L 9 18 C 10.105469 18 11 17.105469 11 16 C 11 14.894531 10.105469 14 9 14 Z M 25 15 C 20.042969 15 16 19.042969 16 24 C 16 28.957031 20.042969 33 25 33 C 29.957031 33 34 28.957031 34 24 C 34 19.042969 29.957031 15 25 15 Z M 25 17 C 28.878906 17 32 20.121094 32 24 C 32 27.878906 28.878906 31 25 31 C 21.121094 31 18 27.878906 18 24 C 18 20.121094 21.121094 17 25 17 Z"></path>
                </svg>
              </div>
            </a>
            <a href="//translate.google.com.ua" title="Google Translate" target="blank" className="svgImg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 6 3 C 4.300781 3 3 4.300781 3 6 L 3 26 C 3 27.699219 4.300781 29 6 29 L 6.40625 29 L 8 27 L 6 27 C 5.398438 27 5 26.601563 5 26 L 5 6 C 5 5.398438 5.398438 5 6 5 L 26 5 C 26.601563 5 27 5.398438 27 6 L 27 21 L 24 21 C 22.300781 21 21 22.300781 21 24 L 21 27 L 16 27 L 17.59375 29 L 21 29 L 21 32.40625 L 23 34.09375 L 23 24 C 23 23.398438 23.398438 23 24 23 L 44 23 C 44.601563 23 45 23.398438 45 24 L 45 44 C 45 44.601563 44.601563 45 44 45 L 24 45 C 23.398438 45 23 44.601563 23 44 L 23 42 L 21 43.6875 L 21 44 C 21 45.699219 22.300781 47 24 47 L 44 47 C 45.699219 47 47 45.699219 47 44 L 47 24 C 47 22.300781 45.699219 21 44 21 L 29 21 L 29 6 C 29 4.300781 27.699219 3 26 3 Z M 16 8 L 16 10 L 8 10 L 8 12 L 19.90625 12 C 19.597656 14.226563 18.292969 16.054688 16.65625 17.53125 C 14.148438 15.332031 12.875 13.03125 12.875 13.03125 L 11.125 13.96875 C 11.125 13.96875 12.433594 16.378906 15.0625 18.78125 C 14.996094 18.828125 14.941406 18.890625 14.875 18.9375 C 12.234375 20.757813 9.59375 21.65625 9.59375 21.65625 L 10.21875 23.5625 C 10.21875 23.5625 13.125 22.597656 16.03125 20.59375 C 16.238281 20.449219 16.449219 20.28125 16.65625 20.125 C 17.796875 20.96875 19.125 21.742188 20.625 22.34375 L 21.375 20.46875 C 20.226563 20.011719 19.199219 19.417969 18.28125 18.78125 C 20.109375 17.050781 21.636719 14.792969 21.9375 12 L 25 12 L 25 10 L 18 10 L 18 8 Z M 12 25 L 7 31 L 10 31 L 10 35 L 14 35 L 14 31 L 17 31 Z M 33 26.40625 L 27.8125 40.1875 L 30.3125 40.1875 L 31.40625 37 L 36.6875 37 L 37.8125 40.1875 L 40.3125 40.1875 L 35.09375 26.40625 Z M 34 29.40625 L 36 35.09375 L 32 35.09375 Z M 19 33 L 19 36 L 10 36 L 14 40 L 19 40 L 19 43 L 25 38 Z"></path>
                </svg>
              </div>
            </a>
            <a href="//news.google.com" title="Google News" target="blank" className="svgImg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 4.9433594 4 A 1.0001 1.0001 0 0 0 4 5 L 4 43.09375 C 4 44.66261 5.2463594 46 6.8183594 46 L 35 46 A 1.0001 1.0001 0 0 0 35.707031 45.707031 L 45.707031 35.707031 A 1.0001 1.0001 0 0 0 46 35 L 46 5 A 1.0001 1.0001 0 0 0 44.400391 4.1992188 L 41 6.75 L 37.599609 4.1992188 A 1.0001 1.0001 0 0 0 36.400391 4.1992188 L 33 6.75 L 29.599609 4.1992188 A 1.0001 1.0001 0 0 0 28.400391 4.1992188 L 25 6.75 L 21.599609 4.1992188 A 1.0001 1.0001 0 0 0 20.400391 4.1992188 L 17 6.75 L 13.599609 4.1992188 A 1.0001 1.0001 0 0 0 13.042969 4 A 1.0001 1.0001 0 0 0 12.400391 4.1992188 L 9 6.75 L 5.5996094 4.1992188 A 1.0001 1.0001 0 0 0 5.0429688 4 A 1.0001 1.0001 0 0 0 4.9433594 4 z M 13 6.25 L 16.400391 8.8007812 A 1.0001 1.0001 0 0 0 17.599609 8.8007812 L 21 6.25 L 24.400391 8.8007812 A 1.0001 1.0001 0 0 0 25.599609 8.8007812 L 29 6.25 L 32.400391 8.8007812 A 1.0001 1.0001 0 0 0 33.599609 8.8007812 L 37 6.25 L 40.400391 8.8007812 A 1.0001 1.0001 0 0 0 41.599609 8.8007812 L 44 7 L 44 34 L 34 34 L 34 44 L 6.8183594 44 C 6.3903594 44 6 43.62289 6 43.09375 L 6 7 L 8.4003906 8.8007812 A 1.0001 1.0001 0 0 0 9.5996094 8.8007812 L 13 6.25 z M 8 11 L 8 12 L 8 17 L 42 17 L 42 11 L 8 11 z M 10 13 L 40 13 L 40 15 L 10 15 L 10 13 z M 8 21 L 8 22 L 8 35 L 23 35 L 23 21 L 8 21 z M 26 21 L 26 23 L 41 23 L 41 21 L 26 21 z M 10 23 L 21 23 L 21 33 L 10 33 L 10 23 z M 13.199219 25 L 12 26.199219 L 12 29.699219 L 13.199219 30.800781 L 17.800781 30.800781 L 19 29.699219 L 19 28.5 L 19 27.300781 L 17.800781 27.300781 L 16.699219 27.300781 L 15.5 28.5 L 17.800781 28.5 L 17.800781 29.699219 L 14.300781 29.699219 L 13.199219 29.699219 L 13.199219 26.199219 L 13.199219 25 z M 13.199219 26.199219 L 14.300781 26.199219 L 14.300781 29.699219 L 15.5 28.5 L 15.5 26.199219 L 19 26.199219 L 17.800781 25 L 14.300781 25 L 13.199219 26.199219 z M 26 25 L 26 27 L 41 27 L 41 25 L 26 25 z M 26 29 L 26 31 L 41 31 L 41 29 L 26 29 z M 26 34 L 26 36 L 32 36 L 32 34 L 26 34 z M 36 36 L 42.585938 36 L 36 42.585938 L 36 36 z M 8 37 L 8 39 L 23 39 L 23 37 L 8 37 z M 26 38 L 26 40 L 32 40 L 32 38 L 26 38 z"></path>
                </svg>
              </div>
            </a>
            <a href="//youtube.com" title="YouTube" target="blank" className="svgImg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 13 5 L 16 14 L 16 20 L 18 20 L 18 14 L 21 5 L 19 5 L 17 11 L 15 5 Z M 24 9 C 22.933594 9 22.410156 9.167969 21.757813 9.703125 C 21.132813 10.230469 20.960938 10.636719 21 12 L 21 17 C 21 17.996094 21.164063 18.652344 21.765625 19.234375 C 22.390625 19.816406 22.980469 20 24 20 C 25.066406 20 25.648438 19.816406 26.25 19.234375 C 26.875 18.675781 27 17.996094 27 17 L 27 12 C 27 11.117188 26.84375 10.28125 26.238281 9.722656 C 25.613281 9.148438 24.96875 9 24 9 Z M 29 9 L 29 18 C 29 18.972656 29.980469 20 31 20 C 32.019531 20 32.558594 19.488281 33 19 L 33 20 L 35 20 L 35 9 L 33 9 L 33 17 C 32.988281 17.683594 32.183594 18 32 18 C 31.792969 18 31 17.957031 31 17 L 31 9 Z M 24 11 C 24.300781 11 25 10.996094 25 12 L 25 17 C 25 17.96875 24.324219 18 24 18 C 23.699219 18 23 17.988281 23 17 L 23 12 C 23 11.183594 23.433594 11 24 11 Z M 25.457031 21.921875 C 20.414063 21.910156 15.375 21.921875 10.332031 22 C 9.652344 22.019531 8.972656 22.117188 8.324219 22.328125 C 7.800781 22.503906 7.300781 22.746094 6.847656 23.0625 C 6.3125 23.4375 5.851563 23.910156 5.492188 24.453125 C 5.238281 24.832031 5.035156 25.246094 4.882813 25.675781 C 4.632813 26.367188 4.519531 27.097656 4.5 27.828125 C 4.449219 31.109375 4.449219 34.390625 4.5 37.671875 C 4.519531 38.296875 4.601563 38.914063 4.765625 39.519531 C 5.082031 40.660156 5.6875 41.726563 6.570313 42.527344 C 6.824219 42.757813 7.097656 42.964844 7.390625 43.144531 C 7.75 43.367188 8.136719 43.550781 8.539063 43.6875 C 9.117188 43.882813 9.722656 43.980469 10.332031 44 C 20.441406 44.1875 30.558594 44.15625 40.667969 44 C 41.347656 43.980469 42.027344 43.882813 42.675781 43.671875 C 43.199219 43.496094 43.699219 43.253906 44.152344 42.9375 C 44.6875 42.5625 45.148438 42.089844 45.511719 41.546875 C 45.761719 41.167969 45.964844 40.753906 46.121094 40.324219 C 46.367188 39.632813 46.480469 38.902344 46.5 38.171875 C 46.550781 34.753906 46.515625 31.332031 46.5 27.917969 C 46.488281 27.179688 46.382813 26.441406 46.140625 25.746094 C 45.996094 25.3125 45.796875 24.894531 45.546875 24.511719 C 45.195313 23.964844 44.738281 23.484375 44.210938 23.105469 C 43.742188 22.765625 43.222656 22.507813 42.675781 22.328125 C 42 22.109375 41.292969 22.011719 40.582031 22 C 35.542969 21.976563 30.5 21.933594 25.457031 21.921875 Z M 33.09375 23.9375 C 35.605469 23.941406 38.117188 23.960938 40.625 24 C 41.023438 24.011719 41.421875 24.058594 41.808594 24.15625 C 42.429688 24.320313 43.015625 24.628906 43.464844 25.089844 C 43.617188 25.246094 43.75 25.414063 43.871094 25.597656 C 44.039063 25.859375 44.171875 26.144531 44.265625 26.441406 C 44.421875 26.902344 44.484375 27.386719 44.5 27.875 C 44.550781 31.292969 44.550781 34.710938 44.5 38.125 C 44.484375 38.613281 44.421875 39.097656 44.265625 39.558594 C 44.171875 39.855469 44.039063 40.140625 43.871094 40.402344 C 43.75 40.585938 43.617188 40.753906 43.464844 40.910156 C 43.015625 41.371094 42.429688 41.679688 41.808594 41.84375 C 41.421875 41.941406 41.023438 41.988281 40.625 42 C 30.566406 42.15625 20.503906 42.0625 10.441406 42 C 10.011719 41.992188 9.589844 41.929688 9.179688 41.792969 C 8.921875 41.703125 8.671875 41.585938 8.441406 41.441406 C 8.253906 41.328125 8.074219 41.195313 7.914063 41.046875 C 7.296875 40.484375 6.890625 39.730469 6.679688 38.933594 C 6.566406 38.507813 6.515625 38.066406 6.5 37.625 C 6.449219 34.398438 6.484375 31.167969 6.5 27.9375 C 6.507813 27.445313 6.570313 26.957031 6.71875 26.488281 C 6.8125 26.1875 6.941406 25.902344 7.109375 25.636719 C 7.230469 25.441406 7.375 25.253906 7.535156 25.089844 C 8 24.613281 8.601563 24.304688 9.242188 24.144531 C 9.65625 24.042969 10.082031 24.003906 10.503906 24 C 18.035156 24 25.566406 23.914063 33.09375 23.9375 Z M 11 26 L 11 28 L 13 28 L 13 40 L 15 40 L 15 28 L 17 28 L 17 26 Z M 26 26 L 26 40 L 28 40 L 28 39 C 28.386719 39.449219 28.949219 40.011719 30 40 C 30.621094 39.992188 31.101563 39.492188 31.421875 39.097656 C 31.75 38.703125 32 38.242188 32 37.5 L 32 31.5 C 32 30.636719 31.726563 30.050781 31.378906 29.609375 C 31.03125 29.171875 30.523438 28.9375 29.875 28.9375 C 29.546875 28.9375 29.222656 29.03125 28.902344 29.195313 C 28.574219 29.355469 28.230469 29.640625 28 30 L 28 26 Z M 18 29 L 18 38 C 18 38.625 18.269531 38.933594 18.5 39.234375 C 18.757813 39.5625 19.308594 40 19.792969 40 C 20.183594 40 20.605469 40.015625 21.019531 39.78125 C 21.4375 39.574219 21.628906 39.4375 22 39 L 22 40 L 24 40 L 24 29 L 22 29 L 22 37 C 21.820313 37.234375 21.8125 37.992188 21 38 C 20.269531 38.007813 20 37.230469 20 37 L 20 29 Z M 36.199219 29 C 35.25 29 34.371094 29.230469 33.902344 29.710938 C 33.320313 30.308594 33.003906 30.980469 33.003906 31.886719 L 33.003906 36.59375 C 33.003906 37.613281 33.28125 38.40625 33.8125 38.984375 C 34.34375 39.5625 35.085938 39.84375 36.035156 39.84375 C 37.074219 39.84375 37.867188 39.585938 38.375 39.027344 C 38.914063 38.496094 39 37.683594 39 36.59375 L 39 36 L 37 36 L 37 36.5 C 37 37.101563 36.941406 37.566406 36.800781 37.730469 C 36.664063 37.914063 36.40625 37.996094 36 38 C 35.632813 38.003906 35.355469 37.902344 35.21875 37.671875 C 35.074219 37.460938 35 37.105469 35 36.546875 L 35 35 L 39 35 L 39 31.886719 C 39 30.886719 38.835938 30.265625 38.320313 29.734375 C 37.816406 29.203125 37.148438 29 36.199219 29 Z M 29 30.5 C 29.550781 30.5 30 31 30 32 L 30 37.023438 C 30 37.574219 29.550781 38 29 38 C 28.449219 38 28.007813 37.789063 28 37.5 L 28 31.5 C 28.007813 30.996094 28.449219 30.5 29 30.5 Z M 36 31 C 36.550781 31 37 31.386719 37 32 L 37 33 L 35 33 L 35 32 C 35.007813 31.464844 35.449219 31 36 31 Z"></path>
                </svg>
              </div>
            </a>
            <a href="//twitter.com" title="Twitter" target="blank" className="svgImg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path>
                </svg>
              </div>
            </a>
            <a href="//www.inoreader.com" title="Inoreader" target="blank" className="svgImg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14.490234 11 C 13.254768 11 12.040671 11.09143 10.853516 11.267578 A 1.0001 1.0001 0 1 0 11.146484 13.246094 C 12.237329 13.084239 13.3537 13 14.490234 13 C 26.933826 13 37 23.065264 37 35.507812 C 37 36.645389 36.91663 37.76128 36.753906 38.851562 A 1.0001 1.0001 0 1 0 38.730469 39.148438 C 38.90774 37.96072 39 36.744237 39 35.507812 C 39 21.984362 28.014643 11 14.490234 11 z M 14.503906 21 C 13.203347 21 11.940704 21.172601 10.740234 21.496094 A 1.0001433 1.0001433 0 1 0 11.259766 23.427734 C 12.293296 23.149227 13.380465 23 14.503906 23 C 21.414305 23 27 28.614589 27 35.574219 C 27 36.672124 26.860939 37.736188 26.599609 38.75 A 1.0001 1.0001 0 1 0 28.535156 39.25 C 28.837826 38.075812 29 36.842313 29 35.574219 C 29 27.539848 22.501507 21 14.503906 21 z M 14.5 31 C 12.026466 31 10 33.023266 10 35.5 C 10 37.970962 12.023711 40 14.5 40 C 16.976289 40 19 37.970962 19 35.5 C 19 33.023266 16.973534 31 14.5 31 z M 14.5 33 C 15.898466 33 17 34.098734 17 35.5 C 17 36.891038 15.895711 38 14.5 38 C 13.104289 38 12 36.891038 12 35.5 C 12 34.098734 13.101534 33 14.5 33 z"></path>
                </svg>
              </div>
            </a>
            <a href="//www.facebook.com" title="Facebook" target="blank" className="svgImg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                </svg>
              </div>
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Favorites;
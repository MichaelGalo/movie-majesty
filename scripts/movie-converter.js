import { movies } from "./movies-data.js";

export const generateMoviesHTML = () => {
  let movieHTML = "";

  for (const movie of movies) {
    movieHTML += `
            <article class="movie">
                <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
                <div class="movie__details">
                    <h2 class="movie__title">${movie.title}</h2>
                    <p class="movie__description">${movie.description}</p>
                </div>
            </article>
        `;
  }

  return movieHTML;
};

// this converter is a form of serialization.

// Serialization refers to the process of converting an object or data structure into a format that can be stored, transmitted, or reconstructed later. In this project, the JavaScript objects representing the movie data are being converted into an HTML string format. This process of converting the movie objects to HTML is a form of serialization.

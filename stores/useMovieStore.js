import {useApiFetch} from "~/composables/useApiFetch";

async function fetchMovieData(movieId) {
    const response = await useApiFetch(`/movie/${movieId}`);
    const data = await response.json();
    return data;
}

// Usage example
const movieId = 123; // Replace with the actual movie ID
const movieData = await fetchMovieData(movieId);
console.log(movieData);

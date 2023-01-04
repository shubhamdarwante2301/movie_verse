const API_ROOT = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

export const API_URLS = {
    popular: (item) => `${API_ROOT}/${item}/popular?api_key=${API_KEY}&language=en-US&page=1`,
    trending: (day) => `${API_ROOT}/trending/all/${day}?api_key=${API_KEY}`,
    search: (query) => `${API_ROOT}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
}

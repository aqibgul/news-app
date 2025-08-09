import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

// This function fetches the top headlines from the News API
export const fetchHeadlines = async () => {
  return api.get("/top-headlines", {
    params: {
      country: "us",

      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
};
// This function fetches the top headlines from the News API based on a specific business category
export const fetchBusinessHeadlines = async () => {
  return api.get("/top-headlines", {
    params: {
      category: "business",
      country: "us",
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
};
// This function fetches the top headlines from the News API based on a specific entertainment category
export const fetchEntertainmentHeadlines = async () => {
  return api.get("/top-headlines", {
    params: {
      category: "entertainment",
      country: "us",
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
};
// This function fetches the top headlines from the News API based on a specific health category
export const fetchHealthHeadlines = async () => {
  return api.get("/top-headlines", {
    params: {
      category: "health",

      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
};

// This function fetches the top headlines from the News API based on a specific sports category

export const fetchSportsHeadlines = async () => {
  return api.get("/top-headlines", {
    params: {
      category: "sports",
      country: "us",
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
};

export const fetchTechnologyHeadlines = async () => {
  return api.get("/top-headlines", {
    params: {
      category: "technology",

      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
};

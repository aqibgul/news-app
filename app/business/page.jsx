"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card";

export default function HeadlinesPage() {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchHeadlines = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    fetch(
      `https://newsapi.org/v2/top-headlines?category=business&apiKey=${apiKey}` // Fetching business headlines
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched headlines:", data);
        setHeadlines(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchHeadlines();
  }, []);

  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-2xl ml-8 font-bold mb-4"> Business Headlines</h1>
      {loading ? (
        <p className=" text-center text-4xl ">Loading...</p>
      ) : (
        <ul className="  grid  md:grid-cols-2   gap-3.5 pl-5">
          {headlines.map((headline, index) => (
            <li key={index} className=" shadow-md rounded-lg ">
              <Card
                name={headline.source.name}
                description={headline.description || "No description available"}
                imageUrl={
                  headline.urlToImage || "https://via.placeholder.com/150"
                }
                url={headline.url}
                publishDate={headline.publishedAt || "Unknown"}
                title={headline.title || "No title available"}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card";
import { fetchHealthHeadlines } from "@/app/api/route"; // Import the fetchHealthHeadlines function from the API route

export default function HeadlinesPage() {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHealthData = async () => {
    try {
      const res = await fetchHealthHeadlines(); // Fetching health headlines
      setHeadlines(res.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching headlines:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchHealthData(); // Call the function to fetch health headlines
  }, []);

  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-2xl ml-8 font-bold mb-4">Health Headlines</h1>
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

import React, {
  creactContext,
  createContext,
  useContext,
  useState,
} from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

// children is a prop that every react component has
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchterm] = useState(" ");

  // make api  calls
  // type=/videos,/search./images,/news
  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "37497ed85fmsh3ad7dd10fdce28ap1d5358jsn323ff1bd6d0a",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });
    // data represent our actual result nd converting it into json format
    const data = await response.json();
    console.log(data);
    setResults(data);
    setIsLoading(false);
  };

  // pass all the states to the entire react application through context
  return (
    <ResultContextProvider
      value={{ getResults, results, isLoading, searchTerm, setSearchterm }}
    >
      {children}
    </ResultContextProvider>
  );
};
export const useResultContext = () => useContext(ResultContext);

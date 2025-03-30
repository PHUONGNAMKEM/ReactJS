//https://hn.algolia.com/api/v1/search?query=react
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";

type Hits = {
  title: string;
};

const HackerNewsPractice = () => {
  const [hits, setHits] = useState<Hits[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const handleFetchData = useRef<(() => Promise<void>) | null>(null);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setErrorMessage(`Happend error with: ${error}`);
      setLoading(false);
    }
    // console.log(">>> check hits: ", hits.data.hits[0].title);
  };

  useEffect(() => {
    if (handleFetchData.current) {
      handleFetchData.current();
    }
  }, [url]);

  //   const handleUpdateQuery = lodash.debounce(
  //     (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setQuery(e.target.value);
  //     },
  //     500
  //   );

  return (
    <div className="w-2/4 p-5 mx-auto mt-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md"
        >
          Fetching
        </button>
      </div>

      {loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full border-r-transparent loading animate-spin"></div>
      )}

      {!loading && errorMessage && (
        <p className="text-red-400 my5">{errorMessage}</p>
      )}

      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => {
            if (!item.title || item.title.length <= 0) return null;

            return (
              <h3 className="p-3 bg-gray-100 rounded-md" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsPractice;

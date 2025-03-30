import React, { useReducer, useRef, useState } from "react";
import axios from "axios";
// import lodash from "lodash";

// https://hn.algolia.com/api/v1/search?query=react

type Hits = {
  title: string;
};

type State = {
  hits: Hits[];
  query: string;
  loading: boolean;
  errorMessage: string;
  url: string;
};

type Action =
  | { type: "SET_HITS"; payload: Hits[] }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SET_URL"; payload: string };

const initialState: State = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerNewsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_HITS": {
      return { ...state, hits: action.payload };
    }

    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }

    case "SET_ERROR": {
      return { ...state, errrorMessage: action.payload };
    }

    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      return state;
  }
};

// const hackerNewsReducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "SET_HITS":
//       return { ...state, hits: action.payload };
//     case "SET_QUERY":
//       return { ...state, query: action.payload };
//     case "SET_LOADING":
//       return { ...state, loading: action.payload };
//     case "SET_ERROR":
//       return { ...state, errorMessage: action.payload };
//     case "SET_URL":
//       return { ...state, url: action.payload };
//     default:
//       return state;
//   }
// };

const HackerNewsReducer = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);

  const handleFetchData = useRef<(() => Promise<void>) | null>(null);

  //   const [url, setUrl] = useState(
  //     dispatch({ type: "SET_LOADING", payload: true })
  //   );

  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({ type: "SET_HITS", payload: response.data?.hits || [] });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });

      dispatch({
        type: "SET_ERROR",
        payload: `Happend error with: ${error}`,
      });
    }
  };

  React.useEffect(() => {
    if (handleFetchData.current) {
      handleFetchData.current();
    }
  }, [state.url]);

  //kiểu dữ liệu của một sự kiện là:  React.ChangeEvent<HTMLInputElement>
  //   const handleUpdateQuery = lodash.debounce(
  //     (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setQuery(e.target.value);
  //     },
  //     500
  //   );

  return (
    <div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          //   onChange={(e) => setQuery(e.target.value)}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          disabled={state.loading}
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md"
          style={{ opacity: state.loading ? "0.25" : "1" }}
        >
          Fetching
        </button>
      </div>

      {state.loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full border-r-transparent loading animate-spin"></div>
      )}

      {!state.loading && state.errorMessage && (
        <p className="my-5 text-red-400">{state.errorMessage}</p>
      )}

      <div className="flex flex-wrap gap-5">
        {/* A && B: Nếu A true, thì trả về B. Nếu A false, thì trả về A.
            A || B: Nếu A true, thì trả về A. Nếu A false, thì trả về B. */}
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsReducer;

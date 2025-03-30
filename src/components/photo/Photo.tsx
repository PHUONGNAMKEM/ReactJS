import { useEffect, useState } from "react";
import axios from "axios";

// const getRanDomPhotos = (page: number) => {
//   return axios
//     .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
//     .then((response) => {
//       console.log(">>> check data: ", response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// // https://picsum.photos/v2/list?page=2&limit=100
// // https://picsum.photos/v2/list
// type Photo = {
//   id: string;
//   author: string;
//   width: number;
//   height: number;
//   url: string;
//   download_url: string;
// };

// function Photos() {
//   // useEffect(callback, [dependencies])
//   // useEffect(function callback() {
//   //     // side-effects
//   // }, []);

//   const [randomPhotos, setRandomPhotos] = useState<Photo[]>([]);
//   const [nextPage, setNextPage] = useState(1);

//   //   console.log("outside");
//   const handleLoadMorePhotos = () => {
//     console.log("nextpage: ", nextPage);
//     getRanDomPhotos(nextPage).then((images) => {
//       const newPhotos = [...randomPhotos, ...images];
//       setRandomPhotos(newPhotos);
//       setNextPage(nextPage + 1);
//     });
//   };
//   console.log("nextpage ngoài: ", nextPage);

//   useEffect(() => {
//     // document.title = "Welcome to useEffect";
//     // console.log("inside");
//     handleLoadMorePhotos();
//   }, []);

//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-5 p-5">
//         {randomPhotos.length > 0 &&
//           randomPhotos.map((item, index) => (
//             <div
//               key={item.id}
//               className="p-3 bg-white rounded-lg shadow-md h-[200px]"
//             >
//               <img
//                 src={item.download_url}
//                 alt={item.author}
//                 className="object-cover w-full h-full rounded-lg"
//               />
//             </div>
//           ))}
//       </div>
//       <div className="text-center">
//         <button
//           onClick={handleLoadMorePhotos}
//           className="inline-block px-8 py-4 text-white bg-purple-600"
//         >
//           Load more
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Photos;

// https://picsum.photos/v2/list?page=2&limit=100
// https://picsum.photos/v2/list

const getRandomPhotos = async (page: number) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
  // return axios
  //   .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
  //   .then(function (images) {
  //     console.log(images);
  //     return images.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};

type Photos = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

function Photos() {
  const [randomPhotos, setRandomPhotos] = useState<Photos[]>([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMore = async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
    // getRandomPhotos(nextPage).then((images) => {
    //   const newPhotos = [...randomPhotos, ...images];
    //   setRandomPhotos(newPhotos);
    //   setNextPage(nextPage + 1);
    // });
  };
  useEffect(() => {
    handleLoadMore();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item) => (
            //p-3 bg-white rounded-lg shadow-md h-[200px]
            <div
              key={item.id}
              className="p-3 bg-white rounded-lg shadow-md h-[200px]"
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src={item.download_url}
                alt=""
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="inline-block px-8 py-4 text-lg text-white bg-purple-600 m-7"
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default Photos;

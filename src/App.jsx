// import React from 'react';  
// import ProductList from './components/ProductList';  

// function App() {  
//     return (  
//         <div>  
//             <ProductList />  
//         </div>  
//     );  
// }  

// export default App;  


import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default Users;


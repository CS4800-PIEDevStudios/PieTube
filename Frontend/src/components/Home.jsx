// import React from 'react';
// import { Button } from 'react-bootstrap';

// const Home = () => {
//   // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

//   return (
//     <div className="home">
//       {/* { error && <div>{ error }</div> }
//       { isPending && <div>Loading...</div> }
//       { blogs && <BlogList blogs={blogs} /> } */}
//       <div>
//         <h1>This is the first page</h1>
//         <Button variant="primary"> This is a button </Button>
//       </div>
//     </div>
//   );
// }
 
// export default Home;

import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {

  const [data, setData] = useState('');

  const fetchData = () => {
    console.log("fetching...")

    axios.get('http://127.0.0.1:8000/api/get-data')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
  return (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
    <Button variant="primary" onClick = {fetchData}> Fetch Data </Button>
    <p>{data}</p>
  </div>
  );
};






export default Home;
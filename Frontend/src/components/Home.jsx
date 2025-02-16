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

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
    <Link to="/page1">
      <Button variant="primary"> Page 1 </Button>
    </Link>
  </div>
);

export default Home;
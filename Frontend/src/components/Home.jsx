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
import { Button, Table } from 'react-bootstrap';

const Home = () => {
    const [movieData, setMovieData] = useState([]);
    const [userData, setUserData] = useState([]);

    const fetchData = () => {
        console.log("fetching...");
        axios.get('https://23.20.205.143/api/get-movie-data')
            .then(response => {
                console.log(response.data)
                setMovieData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get('https://23.20.205.143/api/get-user-data')
            .then(response => {
                console.log(response.data)
                setUserData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
            <Button variant="primary" onClick={fetchData}>Fetch Data</Button>

            <h2>Movie Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>MovieID</th>
                        <th>DirectorID</th>
                        <th>GenreID</th>
                        <th>ActorID</th>
                        <th>Title</th>
                        <th>Age Rating</th>
                        <th>Duration</th>
                        <th>Language</th>
                        <th>Rating</th>
                        <th>Release Date</th>
                        <th>Subtitles</th>
                        <th>Summary</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {movieData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.MovieID}</td>
                            <td>{item.DirectorID}</td>
                            <td>{item.GenreID}</td>
                            <td>{item.ActorID}</td>
                            <td>{item.Title}</td>
                            <td>{item.AgeRating}</td>
                            <td>{item.Duration}</td>
                            <td>{item.Language}</td>
                            <td>{item.Rating}</td>
                            <td>{item.ReleaseDate}</td>
                            <td>{item.SubtitleAvailability}</td>
                            <td>{item.Summary}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>


            <h2>User Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password Hash</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {userData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.UserID}</td>
                            <td>{item.Username}</td>
                            <td>{item.Email}</td>
                            <td>{item.PasswordHash}</td>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.DateOfBirth}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    );
};


export default Home;
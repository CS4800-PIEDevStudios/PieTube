import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const Home = () => {
    const [movieData, setMovieData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [actorData, setActorData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [movieRoleData, setMovieRoleData] = useState([]);
    const [movieGenreData, setMovieGenreData] = useState([]);
    const [directorData, setDirectorData] = useState([]);
    const [trailerData, setTrailerData] = useState([]);
    const [recommendationData, setRecommendationData] = useState([]);

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

            axios.get('https://23.20.205.143/api/get-actor-data')
            .then(response => {
                console.log(response.data)
                setActorData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get('https://23.20.205.143/api/get-genre-data')
            .then(response => {
                console.log(response.data)
                setGenreData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
            axios.get('https://23.20.205.143/api/get-movie-role-data')
            .then(response => {
                console.log(response.data)
                setMovieRoleData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get('https://23.20.205.143/api/get-movie-genre-data')
            .then(response => {
                console.log(response.data)
                setMovieGenreData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get('https://23.20.205.143/api/get-director-data')
            .then(response => {
                console.log(response.data)
                setDirectorData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get('https://23.20.205.143/api/get-trailer-data')
            .then(response => {
                console.log(response.data)
                setTrailerData(response.data); // Assuming the response data is an array of objects
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

            axios.get('https://23.20.205.143/api/get-recommendation-data')
            .then(response => {
                console.log(response.data)
                setRecommendationData(response.data); // Assuming the response data is an array of objects
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
            <Link to="/page1">
                <Button variant="primary"> Login </Button>
            </Link>

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


            <h2>Actor Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ActorID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {actorData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.ActorID}</td>
                            <td>{item.Name}</td>
                            <td>{item.DateOfBirth}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h2>Genre Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>GenreID</th>
                        <th>Genre Name</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {genreData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.GenreID}</td>
                            <td>{item.GenreName}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h2>Trailer Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>TrailerID</th>
                        <th>URL</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {trailerData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.TrailerID}</td>
                            <td>{item.URL}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h2>Movie Genre Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>MovieGenreID</th>
                        <th>GenreID</th>
                        <th>MovieID</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {movieGenreData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.MovieGenreID}</td>
                            <td>{item.GenreID}</td>
                            <td>{item.MovieID}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h2>Director Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>DirectorID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {directorData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.DirectorID}</td>
                            <td>{item.Name}</td>
                            <td>{item.DateOfBirth}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h2>Recommendations Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>RecommendationID</th>
                        <th>MovieID</th>
                        <th>UserID</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {recommendationData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.RecommendationID}</td>
                            <td>{item.MovieID}</td>
                            <td>{item.UserID}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};


export default Home;
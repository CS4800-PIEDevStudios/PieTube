import React, { useState, useRef, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { XLg, Filter } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const GenreFilter = ({show, onHide}) => {
  // Use states
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [excludedGenres, setExcludedGenres] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Navigation hook
  const navigate = useNavigate(); 

  const genres = [
    "Action", "Adventure", "Animation", "Comedy", "Crime", 
    "Documentary", "Drama", "Family", "Fantasy", "Historical", 
    "Horror", "Musical", "Mystery", "Romance", "Science Fiction", 
    "Thriller", "War", "Western", "Biography", "Sports", 
    "Superhero", "Noir", "Satire", "Teen", "Disaster"
  ];

  const ratings = [
    { value: "G", label: "G" },
    { value: "PG", label: "PG" },
    { value: "PG-13", label: "PG-13" },
    { value: "R", label: "R" },
    { value: "NC-17", label: "NC-17" },
    { value: "M", label: "M" },
    { value: "NR", label: "NR" },
    { value: "Passed", label: "Passed" },
    { value: "Approved", label: "Approved" }
  ];

  const toggleRating = (ratingValue) => {
    if (selectedRatings.includes(ratingValue)) {
        setSelectedRatings(prev => prev.filter(r => r !== ratingValue)); //if rating already selected, unselect it
    } else {
        setSelectedRatings(prev => [...prev, ratingValue]); //else add rating to list
    }
};

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(prev => prev.filter(g => g !== genre));
      setExcludedGenres(prev => [...prev, genre]);
    } else if (excludedGenres.includes(genre)) {
      setExcludedGenres(prev => prev.filter(g => g !== genre));
    } else {
      setSelectedGenres(prev => [...prev, genre]);
    }
  };

  const getGenreClass = (genre) => {
    if (selectedGenres.includes(genre)) return 'selected-genre';
    if (excludedGenres.includes(genre)) return 'excluded-genre';
    return '';
  };

  const handleSearch = () => {
    // Hides filter
    onHide();
    // Resets all options when clicked
    setSelectedGenres([]);
    setExcludedGenres([]);
    setSelectedRatings([]);
    // Variable to choose header for Search Results page
    localStorage.setItem('isFromFilter', true);
    localStorage.setItem('HeaderName', 'searchResults')
    navigate("/SearchResults", {
      state: { //Transfers data
        selectedGenres, 
        selectedRatings,
        excludedGenres
      }
    });
    window.location.reload();
  }

  return (
    <div className='d-flex justify-content align-items-center'>
      <Modal 
          show={show}
          onHide={onHide}
          backdrop="static"
          keyboard={false}
          dialogClassName='modal-50w'
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
        {/* Genre filter header */}
        <Modal.Header>
          {/* Title */}
          <div className='d-flex' style={{gap:"10px"}}>           
              <Filter width="40" height="40"/>
              <Modal.Title id="contained-modal-title-vcenter">Filter</Modal.Title>
          </div>
          {/* Close button */}
          <button class="btn-close" onClick={onHide} aria-label="Close">
              {/* <XLg width="20" height="20"/> */}
          </button>
        </Modal.Header>
        <Modal.Body className='modal-body d-flex flex-column'>
          {/* Genres */}
          <div>
            <h2 className='modal-body-header mx-5 m-3'> Genres</h2>
            <div id='Genres' className='d-flex flex-wrap mx-5' style={{ gap: "10px"}}>
                {genres.map((genre, index) => (
                  <div 
                    key={index}
                    className={`filter-genre-blob ${getGenreClass(genre)}`}
                    onClick={() => toggleGenre(genre)}
                  >
                    {genre}
                  </div>
                ))}
            </div>
          </div>
          {/* Age Rating */}
          <div>
            <h2 className='modal-body-header mx-5 m-3'> Age Rating</h2>
            <div> 
              <Form>
              <div id="AgeRating" className='d-flex flex-wrap mx-5' style={{ gap: "10px", fontSize:"1.5rem"}}>
                {ratings.map((rating) => (
                  <Form.Check
                  key={rating.value}
                  type="checkbox"
                  id={`rating-${rating.value}`}
                  label={rating.label}
                  value={rating.value}
                  checked={selectedRatings.includes(rating.value)}
                  onChange={(e) => toggleRating(rating.value)}
                  />
                ))}
              </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
        {/* Buttons */}
        <Modal.Footer className='d-flex flex-column m-3'>
          <button className="reset-btn mx-5 my-2" onClick={() => {
            // Resets all options when clicked
            setSelectedGenres([]);
            setExcludedGenres([]);
            setSelectedRatings([]);
          }}>
            Reset
          </button>
          <button className='search-btn mx-5 my-2' onClick={handleSearch}>
            Search
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GenreFilter;
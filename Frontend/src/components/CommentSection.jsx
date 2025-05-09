import { useState, useEffect, use } from 'react';
import Comment from './Comment.jsx'
import { Form, InputGroup} from 'react-bootstrap';
import axiosInstance from '../axiosConfig.js'
import AlertModal from './AlertModal.jsx';

const CommentSection = ({movie}) => {
    const [LoggedIn, setIsLoggedIn] = useState(false);
    const [commentContent, setCommentContent] = useState('');
    const [comments, setComments] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const createComment = async () => {
        if(!LoggedIn){
            setShowAlert(true);
            return;
        } else {
            const response = await axiosInstance.post('api/create-comment', {
                MovieID : movie.MovieID,
                content : commentContent,
            })
    
            setCommentContent('');
            // Refresh Comments
            getComments();
        }
    }

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    });

    useEffect(() => {
        getComments();
    }, [movie]);
    

    const getComments = async () => {
        console.log("MOVIE ID", movie);
        if(!movie.MovieID)
        {
            return;
        }
        const response = await axiosInstance.post('api/get-comments', {
            MovieID : movie.MovieID
        })
        console.log("COMMNETS", response.data)
        if(response.status===200)
        {
            setComments(response.data)
        }
    }

    return (
        <div className='comment-section-background d-flex flex-column align-items-center pt-5'>
            <AlertModal             
                show={showAlert} 
                onHide={() => setShowAlert(false)}
            />
            <div className='d-flex flex-column w-50 align-self-center'>
                {/* Comments header */}
                <div className='d-flex pb-3' style={{gap: "15px"}}>
                    <h1> Comments </h1>
                    {/* <h1 className='text-muted'> 40 </h1> */}
                </div>
                <InputGroup>
                    <Form.Control
                        placeholder="Add a comment"
                        aria-label="comment"
                        aria-describedby="basic-addon2"
                        style={{
                            backgroundColor: "#F5F5F5",
                            height: "250px",
                            borderRadius: "10px",
                            border: "#8B8B8B solid 2px",
                            fontSize: "1.75rem",
                            padding: "15px", 
                            resize: "none"
                        }}
                        className='comment-text-box'
                        as="textarea" // Use textarea for multi-line input if needed
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                    />
                </InputGroup>
                <button className='comment-submit-btn m-3' onClick={createComment}> Submit </button> 
                {/* Comments */}
                <div className='d-flex flex-column'>
                    {comments.map(comment => (
                        <Comment key={comment.id} comment={comment} id={movie.MovieID} />  
                    ))}
                </div>
            </div>
        </div>
    
    );
};

export default CommentSection;
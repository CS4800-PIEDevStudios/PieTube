import { useState, useEffec, useEffect } from 'react';
import Comment from './Comment.jsx'
import { Form, InputGroup } from 'react-bootstrap';
import axiosInstance from '../axiosConfig.js'



const CommentSection = ({movie}) => {
    const [commentContent, setCommentContent] = useState('');
    const [comments, setComments] = useState([]);

    const createComment = async () => {
        const response = await axiosInstance.post('api/create-comment', {
            MovieID : movie.MovieID,
            content : commentContent,
        })

        setCommentContent('');
        // Refresh Comments
        getComments();
    }

    useEffect(() => {
        getComments();
    }, [movie]);
    

    const getComments = async () => {
        console.log("MOVIE ID", movie)
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
    <div className='d-flex flex-column w-50 align-self-center'>
        {/* Comments header */}
        <div className='d-flex pb-3' style={{gap: "15px"}}>
            <h1> Comments </h1>
            <h1 className='text-muted'> 40 </h1>
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
                as="textarea" // Use textarea for multi-line input if needed
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
            />
        </InputGroup>
        <button className='comment-submit-btn m-3' onClick={createComment}> Submit </button> 
        {/* Comments */}
        <div className='d-flex flex-column'>
            {comments.map(comment => (
                        <Comment key={comment.id} comment={comment} />  
            ))}
        </div>
    </div>
    );
};

export default CommentSection;
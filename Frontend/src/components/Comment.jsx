import default_pfp from '../assets/default_pfp.png';
import LikeButtons from './LikeButtons.jsx'
import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Collapse, Button, InputGroup, Form } from 'react-bootstrap';
import Reply from './Reply.jsx'
import axiosInstance from '../axiosConfig.js'

const Comment = ({ comment, id }) => {
const [openReply, setOpenReply] = useState(false);
const [replies, setReplies] = useState([]);
const [content, setContent] = useState("");
const relativeTime = formatDistanceToNow(new Date(comment.created_at+'Z'), { addSuffix: true });

useEffect(() => {
    getReplies();
}, [comment]);

const getReplies = async () => {
    console.log("MOVIE ID", id);
    if(!id)
    {
        return;
    }
    const response = await axiosInstance.post('api/get-replies', {
        MovieID : id,
        ParentID : comment.id
    });
    console.log("replies", response.data);
    if(response.status===200)
    {
        setReplies(response.data);
    }
}

const createReply = async () => {
    console.log("Creating Reply")

    const response = await axiosInstance.post('api/create-reply', {
        MovieID : id,
        ParentID : comment.id,
        content : content,
    })

    setContent('');
    // Refresh Comments
    getReplies();
}
    return (
        <div className='comment-containter d-flex flex-column my-2'>
            <div className='d-flex justify-content-between'>
                {/* Profile */}
                <div className='d-flex' style={{gap:"20px"}}>
                    {/* Profile pic */}
                    <div className='rounded-circle profile-pic'>
                        {console.log(comment)}
                        <img src={comment.profilePic} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                    </div>
                    {/* Username */}
                    <div className='d-flex flex-column'>
                        <h4> {comment.username} </h4>
                        <h5 className='text-muted'>{relativeTime}</h5>
                    </div>
                </div>
                {/* Reply */}
                <div className='d-flex' style={{gap:"30px"}}>
                    <Button 
                        variant='link' 
                        onClick={() => setOpenReply(!openReply)}
                        aria-expanded={openReply}
                        aria-controls="collapseID"> 
                        <h5> Reply </h5> 
                    </Button>
                    <div className='d-flex'>
                        {/* <LikeButtons size={40} id={id}/> */}
                    </div>
                </div>
            </div>
            <div className='d-flex comment-text mt-4'>
                {comment.content}
            </div>
            <div className='d-flex mt-4'>
                <Collapse in={openReply}>
                    <InputGroup>
                        <div className='hr-2'/>
                        <Form.Control
                            placeholder="Add a reply"
                            style={{
                                backgroundColor: "#F5F5F5",
                                height: "100px",
                                borderRadius: "10px",
                                border: "#8B8B8B solid 2px",
                                fontSize: "1.2rem",
                                padding: "15px", 
                                resize: "none",
                                width:"100%"
                            }}
                            as="textarea" // Use textarea for multi-line input if needed
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <div>
                            <Button variant="link" className='m-3' onClick={() => setOpenReply(false)}> Cancel </Button>
                            <button className='reply-submit-btn m-3' onClick={createReply}> Submit </button> 
                        </div>
                    </InputGroup>
                </Collapse>
            </div>
            <div className='d-flex flex-column'>
                <h3 className='align-self-start mt-4'> Replies </h3>

                {replies.map(reply => (
                    <Reply key={reply.id} comment={reply} id={id} ParentID = {comment.id}/>  
                ))}
            </div>
        </div>
    );
};

export default Comment;
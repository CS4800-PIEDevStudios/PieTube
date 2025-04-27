import mepic from '../assets/me.png';
import LikeButtons from './LikeButtons.jsx'
import { formatDistanceToNow } from 'date-fns';
import { Collapse, Button, InputGroup, Form } from 'react-bootstrap';

const Comment = ({ comment }) => {
const [openReply, setOpenReply] = useState(false);
const relativeTime = formatDistanceToNow(new Date(comment.created_at+'Z'), { addSuffix: true });

    return (
        <div className='comment-containter d-flex flex-column my-2'>
            <div className='d-flex justify-content-between'>
                {/* Profile */}
                <div className='d-flex' style={{gap:"20px"}}>
                    {/* Profile pic */}
                    <div className='rounded-circle profile-pic'>
                        <img src={mepic} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                    </div>
                    {/* Username */}
                    <div className='d-flex flex-column'>
                        <h4> {comment.username} </h4>
                        <h5 className='text-muted'>{relativeTime}</h5>
                    </div>
                </div>
                {/* Reply */}
                <div className='d-flex' style={{gap:"30px"}}>
                    <Button variant='link' onClick={() => setOpenReply(!openReply)}> <h5> Reply </h5> </Button>
                    <div className='d-flex'>
                        <LikeButtons size={40}/>
                    </div>
                </div>
            </div>
            <div className='comment-text text-left my-2'>
                {comment.content}
            </div>
            <div className='d-flex w-50 align-items-center'>
                <Collapse in={openReply}>
                    <InputGroup className='d-flex flex-column justify-content-center align-items-end'>
                        <Form.Control
                            placeholder="Add a reply"
                            style={{
                                backgroundColor: "#F5F5F5",
                                height: "250px",
                                borderRadius: "10px",
                                border: "#8B8B8B solid 2px",
                                fontSize: "1.75rem",
                                padding: "15px", 
                                resize: "none",
                                width:"100%"
                            }}
                            as="textarea" // Use textarea for multi-line input if needed
                            // value={commentContent}
                            // onChange={(e) => setCommentContent(e.target.value)}
                        />
                        <div>
                            <Button variant="link" className='comment-submit-btn m-3' onClick={() => setOpenReply(false)}> Cancel </Button>
                            <button className='comment-submit-btn m-3'> Submit </button> 
                        </div>
                    </InputGroup>
                </Collapse>
            </div>
        </div>
    );
};

export default Comment;
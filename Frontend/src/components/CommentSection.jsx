import Comment from './Comment.jsx'
import { Form, InputGroup } from 'react-bootstrap';

const CommentSection = () => {
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
            />
        </InputGroup>
        <button className='comment-submit-btn m-3'> Submit </button> 
        {/* Comments */}
        <div className='d-flex flex-column'>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </div>
    );
};

export default CommentSection;
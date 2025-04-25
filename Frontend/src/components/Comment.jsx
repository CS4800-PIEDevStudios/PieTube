import mepic from '../assets/me.png';
import LikeButtons from './LikeButtons.jsx'
import { formatDistanceToNow } from 'date-fns';


const Comment = ({ comment }) => {
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
                    <h5> Reply </h5>
                    <div className='d-flex'>
                        <LikeButtons size={40}/>
                    </div>
                </div>
            </div>
            <div className='comment-text text-left my-2'>
                {comment.content}
            </div>
        </div>
    );
};

export default Comment;
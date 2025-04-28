import default_pfp from '../assets/default_pfp.png';
import LikeButtons from './LikeButtons.jsx'
import { formatDistanceToNow } from 'date-fns';

const Reply = ({ comment, id }) => {
const relativeTime = formatDistanceToNow(new Date(comment.created_at+'Z'), { addSuffix: true });
    return (
        <div className='reply-containter d-flex flex-column'>
            <div className='hr-2'/> 
            <div className='d-flex justify-content-between my-3'>
                {/* Profile */}
                <div className='d-flex' style={{gap:"20px"}}>
                    {/* Profile pic */}
                    <div className='rounded-circle profile-pic'>
                        <img src={default_pfp} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                    </div>
                    {/* Username */}
                    <div className='d-flex flex-column'>
                        <h4> {comment.username} </h4>
                        <h5 className='text-muted'>{relativeTime}</h5>
                    </div>
                </div>
                {/* Reply */}
                <div className='d-flex' style={{gap:"30px"}}>
                    <div className='d-flex'>
                        {/* <LikeButtons size={40} id={id}/> */}
                    </div>
                </div>
            </div>
            <div className='d-flex comment-text text-left mt-4'>
                {comment.content}
            </div>
        </div>
    );
};

export default Reply;
import mepic from '../assets/me.png';
import LikeButtons from './LikeButtons.jsx'

const Comment = () => {
    return (
        <div className='d-flex flex-column my-5'>
            <div className='d-flex justify-content-between'>
                {/* Profile */}
                <div className='d-flex' style={{gap:"20px"}}>
                    {/* Profile pic */}
                    <div className='rounded-circle profile-pic'>
                        <img src={mepic} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                    </div>
                    {/* Username */}
                    <div className='d-flex flex-column'>
                        <h4> Username </h4>
                        <h5 className='text-muted'> 2 days ago</h5>
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
                Input text here Input text hereInput text hereInput text hereInput text hereInput text hereInput text hereInput text hereInput text hereInput text hereInput text here
            </div>
        </div>
    );
};

export default Comment;
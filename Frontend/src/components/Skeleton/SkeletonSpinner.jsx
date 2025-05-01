import { Spinner } from 'react-bootstrap';
import './skeleton.css';

function SkeletonSpinner() {
  return (
    <div className='loading d-flex'>
      <Spinner animation="grow" size="xl" className="ellipsis-dot" style={{ animationDelay: '0.1s' }} />
      <Spinner animation="grow" size="xl" className="ellipsis-dot" style={{ animationDelay: '0.3s' }} />
      <Spinner animation="grow" size="xl" className="ellipsis-dot" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}

export default SkeletonSpinner;
import {Alert, Modal, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AlertModal = ({show, onHide}) => {
    const navigate = useNavigate(); 

    const handleClose = () => {
        navigate('/Login'); // Redirect to home page when modal is closed
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide} dialogClassName='modal-alert'>
            <Modal.Header closeButton>
                <Modal.Title>Login Required</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: "0px"}}>
                <Alert variant="danger">
                    You must be logged in!
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button style={{background:"#CD853F", border:"transparent"}} onClick={handleClose}>
                    Go to Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AlertModal;
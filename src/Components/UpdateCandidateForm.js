import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function UpdateCandidateForm(props) {
    const [show, setShow] = useState(false);
    const [updatedCandidate, setUpdatedCandidate] = useState({ ...props.candidate });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setUpdatedCandidate((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.clickUpdate(updatedCandidate);
        handleClose();
    }

    return (
        <>
            <Button type="submit" className="btn btn-info" size="sm" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-3 fw-bold">
                        Update for: <br></br> {updatedCandidate?.candidateName || ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="row">
                            <Form.Group className="mb-3">
                                <Form.Label>Candidate Name</Form.Label>
                                <Form.Control
                                    placeholder="Enter Candidates Name"
                                    type="text"
                                    id="nameUpdate"
                                    name="candidateName"
                                    onChange={handleChange}
                                    value={updatedCandidate?.candidateName || ''}
                                    required
                                />
                            </Form.Group>
                        </div>
                        {/* Other form fields go here */}
                        <Button type="submit" className="btn btn-success">
                            Update Candidate Record
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateCandidateForm;

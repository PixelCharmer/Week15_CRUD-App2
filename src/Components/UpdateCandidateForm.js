import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Uses the useState hook to manage the state
// Created a  state object containing information about the candidate to be updated, initialized with the values passed through props.candidate
function UpdateCandidateForm(props) {
    const [show, setShow] = useState(false);
    const [updatedCandidate, setUpdatedCandidate] = useState({ ...props.candidate });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handles changes in the form inputs and updates the updatedCandidate state accordingly
    function handleChange(e) {
        const { name, value } = e.target;
        setUpdatedCandidate((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    // Handles the form submission
    function handleSubmit(e) {
        e.preventDefault();
        props.clickUpdate(updatedCandidate);
        handleClose();
    }

    // Renders a button labeled "Update" Clicking this button triggers the display of the modal
    // The modal includes a form with fields for candidateName, jobTitle, and stage
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
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className="mb-3">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control
                                    placeholder="Enter Job Title"
                                    type="text"
                                    id="jobTitleUpdate"
                                    name="jobTitle"
                                    onChange={handleChange}
                                    value={updatedCandidate?.jobTitle || ''}
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className="mb-3">
                                <Form.Label>Candidate Name</Form.Label>
                                <Form.Select
                                    placeholder="What is the candidate's status?"
                                    id="stageInput"
                                    type="text"
                                    name="stage"
                                    value={updatedCandidate.stage}
                                    onChange={handleChange}
                                >
                                    <option value="--Current Status--">--Current Status--</option>
                                    <option value="Under Review">Under Review</option>
                                    <option value="Interviewing">Interviewing</option>
                                    <option value="Pending Feedback">Pending Feedback</option>
                                    <option value="Offer Extended">Offer Extended</option>
                                    <option value="Offer Rescinded">Offer Rescinded</option>
                                    <option value="Offer Accepted">Offer Accepted</option>
                                    <option value="Offer Rejected">Offer Rejected</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
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

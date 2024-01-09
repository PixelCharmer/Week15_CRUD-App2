import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddCandidateForm(props) {
    const [show, setShow] = useState(false);
    const [newCandidate, setNewCandidate] = useState({
        candidateName: "",
        jobTitle: "",
        stage: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNewCandidate((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (newCandidate.candidateName === "" || newCandidate.stage === "") {
            setShow(true);
            return;
        }

        props.clickAdd(newCandidate);
        setNewCandidate({
            candidateName: "",
            jobTitle: "",
            stage: "",
        });
        handleClose();
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New Candidate
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Candidate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Candidate Name</Form.Label>
                            <Form.Control
                                placeholder="Enter candidate's full name"
                                type="text"
                                name="candidateName"
                                onChange={handleChange}
                                value={newCandidate.candidateName}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formJobTitle">
                            <Form.Label>Job Title:</Form.Label>
                            <Form.Control
                                placeholder="Enter Job Title"
                                type="text"
                                name="jobTitle"
                                value={newCandidate.jobTitle}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formStatus">
                            <Form.Label>Status:</Form.Label>
                            <Form.Select
                                placeholder="What is the candidate's status?"
                                id="stageInput"
                                type="text"
                                name="stage"
                                value={newCandidate.stage}
                                onChange={handleChange}
                            >
                                <option value="">--Current Status--</option>
                                <option value="1">Under Review</option>
                                <option value="2">Interviewing</option>
                                <option value="3">Pending Feedback</option>
                                <option value="4">Offer Extended</option>
                                <option value="5">Offer Rescinded</option>
                                <option value="6">Offer Accepted</option>
                                <option value="7">Offer Rejected</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

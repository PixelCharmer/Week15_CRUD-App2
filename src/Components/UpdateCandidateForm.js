import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function UpdateCandidateForm(props) {
    const [show, setShow] = useState(false);
    const [updatedCandidate, setUpdatedCandidate] = useState({ ...props.Candidate });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setUpdatedProject((prevData) => {
          return {
            ...prevData,
            [name]: value,
          };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(updatedCandidate);
        props.clickUpdate(updatedCandidate);
        handleClose();
    }
    

    return (
        <>
            <Button type="button" class="btn btn-info" size="sm" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-3 fw-bold">
                        Update for: <br></br> {props.Candidate.candidateName}
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
                                    name="name"
                                    onChange={handleChange}
                                    value={updatedCandidate.candidateName}
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Control className="col-4 mb-3">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control
                                    placeholder="Enter Job Title"
                                    type="text"
                                    id="updateJob"
                                    name="job"
                                    onChange={handleChange}
                                    value={updatedCandidate.jobTitle}
                                />
                            </Form.Control>
                        </div>
                        <div className="row">
                            <Form.Control className="col-4 mb-3">
                                <Form.Label>Candidate Status</Form.Label>
                                <Form.Control
                                    placeholder="Update Candidate Status"
                                    type="text"
                                    id="updateStage"
                                    name="stage"
                                    onChange={handleChange}
                                    value={updatedCandidate.stage}
                                />
                            </Form.Control>
                        </div>
                        <Button type="button" class="btn btn-success">
                            Update Candidate Record
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default UpdateCandidateForm;
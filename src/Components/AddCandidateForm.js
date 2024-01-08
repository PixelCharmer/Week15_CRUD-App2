import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

export default function AddCandidateForm(props) {
    const [newCandidate, setNewCandidate] = useState ({
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
    console.log(newCandidate);


    function handleSubmit(e) {
        e.preventDefault;
        if (newCandidate.candidateName === "" || newCandidate.stage === "") {
            setShow(true);
            return;
        }
        console.log(newCandidate);

        props.clickAdd(newCandidate);
        setNewCandidate({
            candidateName: "",
            jobTitle: "",
            stage: "",
        });
    }

    return (
        <Card className="border-dark mb-3" style="max-width: 18rem;">
            <Card.Header className="card-header text-center fw-bold" id="addHeader">
                Add New Candidate
            </Card.Header>
            <Card.Body>
                <Alert
                    show={show}
                    variant="warning"
                    onClose={() => setShow(false)}
                    dismissible
                >
                    You must enter a candidate name and what their current status is
                </Alert>
                <Form className="p-3">
                    <div className="row">
                        <Form.Group className="col-8 mb-3">
                            <Form.Label>Candidate Name</Form.Label>
                            <Form.Control
                                placeholder="Enter Candidates Full Name"
                                type="text"
                                id="nameInput"
                                name="name"
                                onChange={handleChange}
                                value={newCandidate.candidateName}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="col-8 mb-3">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                placeholder="Enter candidates desired job title"
                                type="text"
                                id="jobInput"
                                name="job"
                                onChange={handleChange}
                                value={newCandidate.jobTitle}
                            />
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="col-8 mb-3">
                            <Form.Label>Candidate Status</Form.Label>
                            <Form.Control
                                placeholder="Candidates current status"
                                type="text"
                                id="stageInput"
                                name="stage"
                                onChange={handleChange}
                                value={newCandidate.stage}
                                required
                            />
                        </Form.Group>
                    </div>
                    <Button variant="success" onClick={handleSubmit}>
                        Submit Candidate
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
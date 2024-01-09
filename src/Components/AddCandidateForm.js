import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

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
    }

    return (
        <Card className="border-dark mb-3">
            <Card.Header className="card-header text-center fw-bold" id="addHeader">
                Add New Candidate
            </Card.Header>
            <Card.Body>
                {show && (
                    <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>You must enter a candidate name and what their current status is!</Alert.Heading>
                    </Alert>
                )}
                <Form className="p-3" onSubmit={handleSubmit}>
                    {/* ... */}
                    <Button type="submit" variant="success">
                        Submit Candidate
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

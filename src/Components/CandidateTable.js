import React from "react";
import Candidate from "./Candidate";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export default function CandidateTable(props) {
    return (
        <Card className="m-3 bg-success">
            <Card.Header className="text-center text-white fs-4 fw-bold">
                Candidates In Process
            </Card.Header>
            <Card.Body className="table-responsive">
                <Table striped hover>
                    <thead>
                        <tr>
                            <th scope="col">Candidate Name</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Candidate Status</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.candidates.map((candidate) => (
                            <Candidate
                                key={candidate.id} // Ensure that candidate.id is unique
                                candidate={candidate}
                                clickDelete={props.clickDelete}
                                clickUpdate={props.clickUpdate}
                            />
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

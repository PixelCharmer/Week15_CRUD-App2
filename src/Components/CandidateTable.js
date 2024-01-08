import { useState} from "react";
import Candidate from "./Candidate";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export default function CandidateTable(props) {
    return (
        <Card className="m-3" id="tableCard">
            <Card.Header className="text-center">
                Candidates In Process
            </Card.Header>
            <Card.Body className="table-responsive">
                <Table className="table table-hover table-striped">
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
                        {props.Candidate.map((Candidate) => (
                            <Candidate
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
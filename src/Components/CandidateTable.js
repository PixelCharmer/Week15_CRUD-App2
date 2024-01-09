import React from "react";
import Candidate from "./Candidate";
import Table from "react-bootstrap/Table";

export default function CandidateTable(props) {
        return (
            <Table striped bordered hover variant="secondary">
                <thead>
                    <tr>
                        <th id="tableColor">Candidate Name</th>
                        <th id="tableColor">Job Title</th>
                        <th id="tableColor">Candidate Status</th>
                        <th id="tableColor">Update</th>
                        <th id="tableColor">Delete</th>
                    </tr>
                </thead>
                <tbody id="rowColor"> 
                        {props.candidates.map((candidate) => (
                            <Candidate
                                key={candidate.id}
                                candidate={candidate}
                                clickDelete={props.clickDelete}
                                clickUpdate={props.clickUpdate}
                            />
                        ))}
                </tbody>
            </Table>
        );
}

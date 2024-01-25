import React from "react";
import Candidate from "./Candidate";
import Table from "react-bootstrap/Table";

// Renders a Bootstrap table with headers for Candidate Name, Job Title, Candidate Status, Update, and Delete
// Maps through the list of candidates and renders a Candidate component for each candidate

export default function CandidateTable(props) {
    return (
        <Table striped bordered hover>
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

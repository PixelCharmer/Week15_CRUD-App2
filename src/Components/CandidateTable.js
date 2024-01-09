import React from "react";
import Candidate from "./Candidate";
import Table from "react-bootstrap/Table";

export default function CandidateTable(props) {
        return (
            <Table stripped bordered>
                <thead>
                    <tr>
                        <th>Candidate Name</th>
                        <th>Job Title</th>
                        <th>Candidate Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        {props.candidates.map((candidate) => (
                            <Candidate
                                key={candidate.id}
                                candidate={candidate}
                                clickDelete={props.clickDelete}
                                clickUpdate={props.clickUpdate}
                            />
                        ))}
                    </tr>
                </tbody>
            </Table>
        );
}

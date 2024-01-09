import React from "react";
import Button from "react-bootstrap/Button";
import UpdateCandidateForm from "./UpdateCandidateForm";

export default function Candidate(props) {
    return (
        <tr>
            <td>{props.candidate.candidateName}</td>
            <td>{props.candidate.jobTitle}</td>
            <td>{props.candidate.stage}</td>
            <td>
                <UpdateCandidateForm
                    candidate={props.candidate}
                    clickUpdate={props.clickUpdate}
                />
            </td>
            <td>
                <Button
                    type="submit"
                    variant="danger"
                    size="sm"
                    onClick={() => props.clickDelete(props.candidate.id)}
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}


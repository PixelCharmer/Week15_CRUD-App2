import UpdateCandidateForm from "./UpdateCandidateForm";
import Button from "react-bootstrap/Button";

export default function Candidate(props) {
    return (
        <tr>
            <td scope="row">{props.candidate.candidateName}</td>
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
                    variant="danger"
                    size="sm"
                    onClick={() => props.clickDelete(props.project.id)}
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
}
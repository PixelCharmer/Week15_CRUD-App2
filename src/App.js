import "./App.css";
import { useEffect, useState } from "react";
import AddCandidateForm from "./Components/AddCandidateForm";
import CandidateTable from "./Components/CandidateTable";

function App() {
  const URL = "https://659afe2cd565feee2daabf11.mockapi.io/api/tracker";
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch candidates");
      }
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error("Error fetching candidates:", error.message);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const deleteCandidate = async (idToDelete) => {
    try {
      await fetch(`${URL}/${idToDelete}`, {
        method: "DELETE",
      });

      setCandidates((prevCandidates) =>
        prevCandidates.filter((candidate) => candidate.id !== idToDelete)
      );
    } catch (error) {
      console.error("Error deleting candidate:", error.message);
    }
  };

  const postNewCandidate = async (newCandidate) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCandidate),
      });

      if (!response.ok) {
        throw new Error("Failed to add new candidate");
      }

      const newCandidateWithId = await response.json();
      setCandidates((prevCandidates) => [...prevCandidates, newCandidateWithId]);
    } catch (error) {
      console.error("Error adding new candidate:", error.message);
    }
  };

  const updateCandidate = async (updatedCandidate) => {
    try {
      const response = await fetch(`${URL}/${updatedCandidate.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCandidate),
      });

      if (!response.ok) {
        throw new Error("Failed to update candidate");
      }

      const updatedCandidateResponse = await response.json();
      const newCandidateArray = candidates.map((candidate) =>
        candidate.id === updatedCandidateResponse.id ? updatedCandidateResponse : candidate
      );
      setCandidates(newCandidateArray);
    } catch (error) {
      console.error("Error updating candidate:", error.message);
    }
  };

  return (
    <div className="App" id="pageTitle">
      <h1 className="display-6 fw-bold" id="header">
        Candidate Tracker
      </h1>
      <AddCandidateForm clickAdd={postNewCandidate} />
      <CandidateTable candidates={candidates} clickDelete={deleteCandidate} clickUpdate={updateCandidate} />
    </div>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import AddCandidateForm from "./Components/AddCandidateForm";
import CandidateTable from "./Components/CandidateTable";

// initializes the URL variable with the mock API endpoint
// uses the useState hook to manage the candidates state, which holds an array of candidate data
function App() {
  const URL = "https://659afe2cd565feee2daabf11.mockapi.io/api/tracker";
  const [candidates, setCandidates] = useState([]);

  // Fetches candidate data from the mock API using the specified URL
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

  // Calls getCandidates on component mount to initially fetch and set the list of candidates
  useEffect(() => {
    getCandidates();
  }, []);

  
// Deletes a candidate by sending a DELETE request to the API and updating the state
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

  // Adds a new candidate by sending a POST request to the API and updating the state
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

  // Updates a candidate by sending a PUT request to the API and updating the state
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


  // Renders the main application UI
  return (
    <div className="App" id="pageTitle">
      <h1 className="display-6 fw-bold" id="header">
        CANDIDATE TRACKER
      </h1>
      <AddCandidateForm clickAdd={postNewCandidate} />
      <CandidateTable candidates={candidates} clickDelete={deleteCandidate} clickUpdate={updateCandidate} />
    </div>
  );
}

export default App;

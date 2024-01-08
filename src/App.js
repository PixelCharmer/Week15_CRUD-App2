import "./App.css";
import { useEffect, useState } from "react";
import ProjectTable from "./Components/ProjectTable";
import AddProjectForm from "./Components/AddProjectForm";
import AddCandidateForm from "./Components/AddCandidateForm";
import CandidateTable from "./Components/CandidateTable";


function App() {

  const URL = "https://659afe2cd565feee2daabf11.mockapi.io/api/tracker"


  const getCandidates = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    setCandidates(data);
    //.then((data) => data.json())
    //.then((data) => setCandidates(data));
  };

  useEffect(() => {
    getCandidates()
  }, []);

  const deleteCandidate = async (idToDelete) => {
    await fetch(`${URL}/${idToDelete}`, {

      method: "DELETE",
    });
    setCandidates(candidates.filter((candidate) => candidate.id !== idToDelete));
    //.then(() => getCandidates());
  };

  const postNewCandidate = async (newCandidate) => {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCandidate),
    }); 
    const newCandidateWithId = await response.json();
    setCandidates([...candidates, newCandidateWithId]);
    //.then(() => getCandidates());
  };


  const updateCandidate = async (updateCandidate) => {
    const response = await fetch(`${URL}/${updatedProject.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    });

    const updatedCandidateResponse = await response.json();
      const newCandidateArray = candidates.map((candidate) => {
        if (candidate.id === updateCandidateResponse.id) {
          return updatedCandidateResponse;
        } else {
          return candidate;
        }
      });
      setProjects(newCandidateArray);

      //.then(() => getProjects());
    };

return (
  <div className="App" id="pageTitle">
    <h1 className="display-6 fw-bold" id="header">Candidate Tracker</h1>
    <AddCandidateForm clickAdd={postNewCandidate} />
    <CandidateTable
      candidates={candidates}
      clickDelete={deleteCandidate}
      clickUpdate={updateCandidate}
    />
  </div>
);

}

export default App;

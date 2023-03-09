import React from "react";
import NoteContext from "./UserContext";
import axios from "axios";

const NoteState = (props) => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios.get("/Project").then(
      (res) => setProjectData(res.data.projects)
      // console.log(res)
    );
  }, []);
  {
    projectData.map((projects) => {
      const {
        projectName,
        projectInfo,
        numOfBeneficiaries,
        beneficiaries,
        target,
        startDate,
        deadline,
      } = projects;
    });
  }
  return (
    <NoteContext.Provider value={projectData}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

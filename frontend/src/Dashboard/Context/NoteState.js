import React from "react";
import NoteContext from "./noteContext";
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
        numOfBenificiaries,
        benificiaries,
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
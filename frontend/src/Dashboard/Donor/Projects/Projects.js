import React, { useEffect, useState } from "react";
import charity from "../../../images/project.jpg";
import DonarNavar from "../DonorNavbar/DonorNavbar";
import { toast } from "react-toastify";
import "./Projects.css";
import axios from "axios";
import { seeBalance, transact } from "../../../web3connection";

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState({
    _id: "",
    projectName: "",
    projectInfo: "",
    numOfBeneficiaries: "",
    target: "",
    startDate: "",
    enddate: "",
    contractAddress: "",
  });

  const [values, setValues] = useState({
    token: "",
  });

  const [modal, setModal] = useState(false);
  const [projectData, setProjectData] = useState([]);

  const [status, setStatus] = useState(false);

  // Donation or Transfer amount from one account to another
  const fetchTransfer = (address, amount) => {
    console.log(address, amount);
    transact(address.toString(), (values.token * 10 ** 18).toString())
      .then((balance) => {
        console.log("sdfdsaf", balance);
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //call donateToken method of contract
  // const FetchTransfer = (amount) => {
  //   donate((values.token * 10 ** 18).toString())
  //     .then((balance) => {
  //       console.log("donated tokens", balance);
  //       setStatus(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   seeBalance(projectDetails.contractAddress);
  //   // .then((balance) => {
  //   //   console.log("sdfsdfsfdfdsfsd", balance);
  //   // })
  //   // .catch((err) => {
  //   //   console.log(err);
  //   // });
  // }, [status]);

  const handleChange = (e) => {
    console.log(values);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const toggleModal = (projects) => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  useEffect(() => {
    axios.get("/Project").then((res) => setProjectData(res.data.projects));
    // startProject();
  }, []);

  const donateDetails = (projects) => {
    setProjectDetails(projects);
    console.log(projects);
  };

  const startProject = (projects) => {
    console.log(projects, "Show Project");
    axios
      .post("/donor/donate", {
        contractAddress: projects.contractAddress,
      })
      .then((response) => {
        console.log(projects, "Show Project");
        console.log(response.data.message);
        if (response.data.message === "yes u can donate. go for it") {
          console.log("You can Donate");
        } else if (response.data.message === "no u cannot donate now") {
          console.log("you cannot donate");
          toast.warn("Donation hasnot been Started Yet");
        }
      });
  };

  return (
    <div className="Project-Body">
      <DonarNavar />
      <div className="Project-Whole-Body">
        <div style={{ width: "100%", marginTop: "6em" }}>
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                border: "2px solid #3cb100",
                borderRadius: "5px",
                padding: "5px 20px 5px 20px",
                color: "white",
                background: "#3cb100",
              }}
            >
              Projects
            </p>
          </div>
          <hr style={{ marginTop: "2em", color: "red" }} />

          {/* fetching projects data from Database */}
          {projectData.map((projects) => {
            const {
              _id,
              projectName,
              projectInfo,
              beneficiaries,
              target,
              startDate,
              deadline,
            } = projects;

            return (
              <div className="Projects-Data" key={beneficiaries._id}>
                <img
                  style={{ width: "100%", height: "15em" }}
                  src={charity}
                  alt="PROJECT"
                />
                <div className="Projects">
                  <div className="ProjectName">
                    {/* <p>{beneficiaries[0].email}</p> */}
                    <p>{projectName}</p>
                  </div>
                  <p>
                    {projectInfo.length > 200
                      ? `${projectInfo.substring(0, 200)}...`
                      : projectInfo}
                    <a
                      style={{
                        color: "#3b9d0a",
                        cursor: "pointer",
                        fontFamily: "Source Sans Pro",
                        fontWeight: "600",
                      }}
                      onClick={(e) => {
                        donateDetails(projects);
                        toggleModal();
                      }}
                    >
                      ...Readmore
                    </a>
                  </p>
                  {/* <hr style={{ width: "26em" }} /> */}
                  <div className="donate-button-border">
                    {/* <Link to="/projectdetails"> */}
                    <button
                      className="Donate-Button"
                      onClick={(e) => {
                        donateDetails(projects);
                        console.log(_id);
                        toggleModal();
                        startProject(projects);
                      }}
                    >
                      DONATE NOW
                    </button>
                    {/* </Link> */}
                  </div>
                  <div className="restDetails">
                    <p>
                      {target} <a>JKT Needed</a>
                    </p>
                    <p>StartDate: {startDate} </p>
                    <p>EndDate: {deadline}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modal && (
        <div className="ProjectDetails">
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="Project-content">
              <button className="close-button" onClick={toggleModal}>
                CLOSE
              </button>
              <div className="three-bodies">
                <div style={{ marginTop: "4em" }}>
                  <img style={{ width: "25em" }} src={charity} alt="PROJECT" />
                </div>
                <div className="middle">
                  <div
                    style={{
                      textAlign: "center",
                      border: "2px solid #3cb100",
                      borderRadius: "3px",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "25px",
                        padding: "30px",
                      }}
                    >
                      Amount Needed
                    </a>
                    <p
                      style={{
                        border: "5px solid #3cb100",
                      }}
                    >
                      {projectDetails.target} JKT
                    </p>
                  </div>
                  <div
                    style={{
                      marginTop: "2em",
                      textAlign: "center",
                      border: "2px solid #3cb100",
                      borderRadius: "3px",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "25px",
                        padding: "30px",
                      }}
                    >
                      Amount Collected
                    </a>

                    <p
                      style={{
                        border: "5px solid #3cb100",
                      }}
                    >
                      0 JKT
                    </p>
                  </div>
                </div>
                <div className="input">
                  <input
                    placeholder="JKT Token"
                    type="number"
                    name="token"
                    value={values.token}
                    onChange={handleChange}
                  />

                  <button
                    style={{ margin: "15px 0 0 0px" }}
                    onClick={() => {
                      return fetchTransfer(
                        projectDetails.contractAddress,
                        values.token
                      );
                    }}
                  >
                    DONATE
                  </button>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: "2em",
                  marginLeft: "0.79em",
                }}
              >
                {projectDetails.projectName}
              </p>
              <p style={{ fontFamily: "Source Sans Pro", marginLeft: "1.6em" }}>
                {projectDetails.projectInfo}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

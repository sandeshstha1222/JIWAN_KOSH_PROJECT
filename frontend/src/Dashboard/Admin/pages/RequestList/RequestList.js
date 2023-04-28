import React, { useState, useEffect } from "react";
import "./RequestList.css";
import axios from "axios";
import AdminSidebar from "../../Components/sidebar/AdminSidebar";

const RequestList = () => {
  const [mydata, setMyData] = useState([]);

  const getProjectData = async () => {
    try {
      const res = await axios.get("/token/tokendisplaytoadmin");
      console.log(res);
      setMyData(res.data.tokens);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div>
      <div>
        <AdminSidebar />
      </div>
      <div className="RequestList">
        <h1 className="displayList"> Request Lists </h1>
        {mydata.map((post) => {
          const { tokenAmount, walletAddress } = post;
          return (
            <div className="displayItem" key={walletAddress}>
              <div className="restdata">
                <p className="displayText">
                  {" "}
                  {walletAddress} has requested {tokenAmount} token.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RequestList;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./aidAgency.css";

const AidAgency = () => {
  const [datas, setDatas] = useState([]);

  const getAidAgency = async () => {
    try {
      const res = await axios.get("/user/list/aidagency");
      console.log(res);
      setDatas(res.data.AidAgency);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAidAgency();
  }, []);

  return (
    <div>
      <h1 className="AidAgencyTitle"> Aid Agency </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>

        <tbody>
          {datas.map((curUser) => {
            const { name, username, email } = curUser;
            return (
              <tr key={username}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AidAgency;

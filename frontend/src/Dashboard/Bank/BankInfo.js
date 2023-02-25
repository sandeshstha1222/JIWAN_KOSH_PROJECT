import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Bank from "./Bank";
import axios from "axios";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
  display: flex;
  flex: 1;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const BankInfo = styled.div`
  margin-top: 1rem;
  width: 100%;
  padding: 20px;
  color: white;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const BankC = styled.div`
  background-color: rgb(102, 101, 101);
  flex: 1;
  height: 200px;
  width: 260px;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 35px;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
  -webkit-box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
  -moz-box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 300px;
  }
`;
const CopyButton = styled.button`
  padding-bottom: 20px;
  font-size: 10px;
  cursor: pointer;
  border: none;
  background: none;
  color: white;
  margin-left: 10px;
`;
const MainLoader = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  /* border: 2px solid white; */
`;

const Loader = styled.div`
  flex: 1;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 200px;
  height: calc(100vh);
  border: 16px solid #f3f3f3;
  border-top: 16px solid black;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Info = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        "http://localhost:5005/api/bank/info",
        config
      );
      console.log(data);
      console.log(data.success);
      console.log(data.data);
      setPosts(data.data);
      console.log("posts:", posts);
      setLoading(false);
    } catch (err) {
      console.log(err, "error occured");
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Bank />
      {loading && (
        <div>
          <MainLoader>
            <Loader></Loader>
          </MainLoader>
        </div>
      )}
      {!loading && (
        <BankInfo>
          {posts.map((post) => {
            return (
              <BankC key={post._id}>
                <h4>{post.username}</h4>
                <h4>{post.phoneNumber}</h4>
                <h4>{post.address}</h4>
                <h4>
                  {post.walletAddress
                    ? `${post.walletAddress.slice(
                        0,
                        5
                      )}...${post.walletAddress.slice(
                        post.walletAddress.length - 5
                      )}`
                    : "-"}
                  {post.walletAddress ? (
                    <CopyButton
                      style={{ height: "10px" }}
                      onClick={() => {
                        navigator.clipboard.writeText(post.walletAddress);
                      }}
                    >
                      <ContentCopyIcon />
                    </CopyButton>
                  ) : (
                    ""
                  )}
                </h4>
              </BankC>
            );
          })}
        </BankInfo>
      )}
    </Container>
  );
};

export default Info;

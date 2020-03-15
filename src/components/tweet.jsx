import React, { Component } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const TweetContainer = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 75px;
  background-color: #eee;
  word-break: break-all;
`;

export class Tweet extends Component {
  render() {
    return <TweetContainer>{this.props.data}</TweetContainer>;
  }
}

export default Tweet;

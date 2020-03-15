import React, { Component } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Tweet from "./tweet";
import Chance from "chance";

const SimulatorContainer = styled.div``;

const TweetContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

let tweets = [];
let chance = new Chance();

export class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      time: 0,
      finished: false
    };
  }
  componentDidMount() {
    let newTweet = this.generateTweet();
    tweets.push(newTweet);
    this.pushTweets(tweets);
    let tempTime = this.state.time;
    let i;
    let timer = setInterval(() => {
      if (!this.state.finished) {
        this.generateTweet();
      }
    }, 650);
    /*while (tempTime < 10) {
      tweets.push(this.generateTweet());
      this.pushTweets(tweets);
    }*/
  }

  generateTweet() {
    console.log(this.state.time);
    let newTweet;
    if (this.state.time < 90) {
      let time = this.state.time + Math.floor(Math.random() * 10) + 1;
      this.setState({
        time: time
      });
      let event = chance.weighted(["pass.", "goal!"], [12, 1]);
      let timeWord;
      if (time < 1) {
        timeWord = "minute";
      } else {
        timeWord = "minutes";
      }
      if (time > 90) {
        let extraTime = time - 90;
        let time = "90+" + extraTime;
      }
      newTweet = event + " " + time + " " + timeWord + " gone.";
    } else {
      this.setState({
        finished: true
      });
    }
    return newTweet;
  }

  pushTweets = tweets => {
    this.setState({
      tweets: tweets
    });
  };
  render() {
    return (
      <SimulatorContainer>
        It's time for coverage of {this.props.homeTeam} vs {this.props.awayTeam}{" "}
        in the {this.props.competition}
        <TweetContainer>
          {this.state.tweets.map((data, index) => (
            <Tweet data={data} />
          ))}
        </TweetContainer>
      </SimulatorContainer>
    );
  }
}

export default Simulator;

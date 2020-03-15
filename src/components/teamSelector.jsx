import React, { Component } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Competitions from "../data/competitions.json";
import PremierLeague from "../data/premierLeagueTeams.json";

const teamSelectorContainer = styled.div``;

export class teamSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: [],
      teams: [],
      datateamSelector: false
    };
  }
  componentDidMount = () => {
    this.setState(
      {
        competitions: Competitions
      },
      () => {
        console.log(this.state.competitions);
        this.setState({
          datateamSelector: true
        });
      }
    );
  };

  change = event => {
    let id = event.target.value - 1;
    console.log(this.props.teams);
    let teamName = this.props.teams[id].name;
    this.props.handleTeamChange(teamName);
  };

  render() {
    return (
      <teamSelectorContainer>
        <select value={this.props.selectChanged} onChange={this.change}>
          <option disabled selected>
            Select
          </option>
          {this.props.teams.map((data, index) => (
            <option id={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      </teamSelectorContainer>
    );
  }
}

export default teamSelector;

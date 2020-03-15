import React, { Component } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import TeamSelector from "./teamSelector";

import Competitions from "../data/competitions.json";
import PremierLeague from "../data/premierLeagueTeams.json";

const SetupContainer = styled.div``;

export class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: [],
      teams: [],
      dataSetup: false,
      competition: 1
    };
  }
  componentDidMount = () => {
    this.setState(
      {
        competitions: Competitions,
        teams: PremierLeague
      },
      () => {
        console.log(this.state.competitions);
        this.setState({
          dataSetup: true
        });
      }
    );
  };

  handlecompetitionChange = event => {
    let id = event.target.value - 1;
    this.props.handleCompetitionChange(
      this.state.competitions.england[id].name
    );
  };

  render() {
    return (
      <SetupContainer>
        {this.state.dataSetup ? (
          <div>
            <div>
              Select Competition
              <select onChange={this.handlecompetitionChange}>
                {this.state.competitions.england.map((data, index) => (
                  <option id={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
                <option disabled>More Leagues Coming Soon</option>
              </select>
            </div>
            <div>
              Select Home Team{" "}
              <TeamSelector
                teams={this.state.teams}
                handleTeamChange={this.props.handleHomeTeamChange}
              />
            </div>
            <div>
              Select Away Team{" "}
              <TeamSelector
                teams={this.state.teams}
                handleTeamChange={this.props.handleAwayTeamChange}
              />
            </div>
          </div>
        ) : (
          "loading"
        )}
      </SetupContainer>
    );
  }
}

export default Setup;

import React, { Component } from "react";
import "./App.css";

import Simulator from "./components/simulator";
import Setup from "./components/setup";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTeam: null,
      awayTeam: null,
      competition: "Premier League",
      running: false,
      homeTeamSetup: false,
      awayteamSetup: false
    };
  }

  handleHomeTeamChange = team => {
    this.setState({
      homeTeam: team,
      homeTeamSetup: true
    });
  };

  handleAwayTeamChange = team => {
    console.log("Away Team Refresh" + team);
    this.setState({
      awayTeam: team,
      awayteamSetup: true
    });
  };

  handleCompetitionChange = competition => {
    this.setState(
      {
        competition: competition
      },
      () => {
        console.log(this.state.competition);
      }
    );
  };

  run = () => {
    this.setState({
      running: true
    });
  };

  render() {
    return (
      <div>
        {this.state.running ? (
          <Simulator
            homeTeam={this.state.homeTeam}
            awayTeam={this.state.awayTeam}
            competition={this.state.competition}
            handleHomeTeamChange={this.handleHomeTeamChange}
            handleAwayTeamChange={this.handleAwayTeamChange}
          />
        ) : (
          <div>
            <Setup
              homeTeam={this.state.homeTeam}
              awayTeam={this.state.awayTeam}
              competition={this.state.competition}
              handleHomeTeamChange={this.handleHomeTeamChange}
              handleAwayTeamChange={this.handleAwayTeamChange}
              handleCompetitionChange={this.handleCompetitionChange}
            />
            {this.state.homeTeamSetup && this.state.awayteamSetup ? (
              <button onClick={() => this.run()}>Run</button>
            ) : (
              <button onClick={() => this.run()}>Run</button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;

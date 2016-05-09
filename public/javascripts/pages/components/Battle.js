import React from "react";

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.summonerNameA = this.props.summonerNameA.toLowerCase();
    this.summonerNameB= this.props.summonerNameB.toLowerCase();
    console.log(this.props);
    this.state = {
      allData: this.props.allData
    };
  }

  render() {
    return (
        <div>
            <h1>{this.state.allData[this.summonerNameA].name}</h1>
            <h1>{this.state.allData[this.summonerNameB].name}</h1>
        </div>
    );
  }
}
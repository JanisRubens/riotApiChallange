import React from "react";

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.summonerA = this.props.allData[this.props.summonerNameA.toLowerCase()];
    this.summonerB = this.props.allData[this.props.summonerNameB.toLowerCase()];
    console.log(this.props);
    this.state = {
      allData: this.props.allData
    };
  }

  render() {
    return (
      <div id="battle-wrapper">
        <section className="summoner-data-wrapper">
          <h2 className="title">{this.summonerA.name}</h2>
          <div top-champ-wrapper>
            <ul>
              <li className="champions" src="http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Aatrox.png"></li>
              <li className="champions"></li>
              <li className="champions"></li>
            </ul>
          </div>
          <div className="mastery-score">
            <span></span>
          </div>
        </section>
        <div id="separator-wrapper">
        <figure id="vs-logo"></figure>
        </div>
        <section className="summoner-data-wrapper">
          <h2 className="title">{this.summonerB.name}</h2>
          <div top-champ-wrapper>
            <ul>
              <li className="champions"></li>
              <li className="champions"></li>
              <li className="champions"></li>
            </ul>
          </div>
          <div className="mastery-score">
            <span></span>
          </div>
        </section>
      </div>
    );
  }
}
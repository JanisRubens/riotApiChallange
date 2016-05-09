import React from "react";

export default class Form extends React.Component {
  //BR, EUNE, EUW, JP, KR, LAN, LAS, NA, OCE, RU, TR
  //should map them and loop the options
  render() {
    return (
      <div>
        <select id="region" onChange ={ this.props.handleSelect.bind(this) } value = {this.props.region}>
          <option value="br">BR</option>
          <option value="eune">EUNE</option>
          <option value="euw">EUW</option>
          <option value="jp">JP</option>
          <option value="kr">KR</option>
          <option value="lan">LAN</option>
          <option value="las">LAS</option>
          <option value="na">NA</option>
          <option value="oce">OCE</option>
          <option value="ru">RU</option>
          <option value="tr">TR</option>

        </select>
        <h4 className="sub-title">LEAGUE OF LEGENDS</h4>
        <h2 className="title">CHAMPION MASTERY BATTLE</h2>
        <form>
          <span className="input-label">YOUR SUMMONER</span>
          <input
            className="input-field"
            value= {this.props.summonerNameA}
            onChange={this.props.handleFormChange('summonerNameA') } />
          <button id="submit-button" type="button" onClick= { this.props.handleButtonPress.bind(this) } >GO</button>
          <span className="input-label">ENEMMY SUMMONER</span>
          <input
            className="input-field"
            value= {this.props.summonerNameB}
            onChange={this.props.handleFormChange('summonerNameB') } />
        </form>
      </div>
    );
  }
}
import React from "react";
import * as AppActions from "../actions/appActions";
import AppStore from "../stores/appStore";
import Form from "./components/Form";
import Battle from "./components/Battle";

export default class Page_one extends React.Component {

  constructor() {
    super();
    this.state = {
      summonerNameA: 'test1',
      summonerNameB: 'test2',
      region: 'eune',
      allData: this.getAllData.bind(this),
      loading: false,
      dataRecived: false,
      error: null
    };
  }

  handleSelect(event) {
    this.setState({ region: event.target.value });
    console.log(this.state.region);
  }

  handleFormChange(key) {
    return function (event) {
      console.log("InsideHandleFormchange", e.target.value);
      var state = {};
      state[key] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleButtonPress(e) {
    console.log("Called hanndleButton press", e);
    this.setState({
      loading: true
    });
    console.log("button press",this.state);
    console.log(this.state.region);
    AppActions.getSummonerData(this.state);
  }

  componentWillMount() {
    AppStore.on("change", this.getAllData.bind(this));
  }

  componentWillUnmount() {
    AppStore.removeListener("change", this.getAllData.bind(this));
  }

  getAllData() {
    this.setState({
      allData: AppStore.getData(),
      dataRecived: true,
      loading: false
    });
    console.log(this.state);
  }

  render() {
    if (this.state.loading) {
      return (
        <span>Loading...</span>
      )
    }
    else if (this.state.error !== null) {
      return (
        <span>Error: {this.state.error.message}</span>
      )
    }
    else if (this.state.dataRecived) {
      return (
        <Battle allData = { this.state.allData }
          summonerNameA = { this.state.summonerNameA }
          summonerNameB = { this.state.summonerNameB }
          ></Battle>
      )
    }
    else {
      return (
        <div className="page1">
          <div className="video-overlay">
            <video loop autoPlay>
              <source src="../../images/intro.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div id="input-wrapper">
            <Form
              summonerNameA = { this.state.summonerNameA }
              summonerNameB = { this.state.summonerNameB }
              region = { this.state.region }
              handleSelect = { this.handleSelect.bind(this) }
              handleButtonPress = { this.handleButtonPress.bind(this) }
              handleFormChange = { this.handleFormChange.bind(this) }
              >
            </Form>
          </div>
        </div>
      );
    }
  }
}

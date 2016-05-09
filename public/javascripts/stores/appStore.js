import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class AppStore extends EventEmitter {
  constructor() {
    super()
       this.data = null;
  }
  
  getData(){
    return this.data;
  }
  
  
  handleSummonerData( allData ) {
    this.data = allData;
    this.emit("change");
  }

  handleActions( action ) {
    switch( action.type ) {
      case "RECIVED_SUMMONER_DATA": {
        console.log("Action",action.allData);
        this.handleSummonerData(action.allData);
        break;
      }
    }
  }

}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;
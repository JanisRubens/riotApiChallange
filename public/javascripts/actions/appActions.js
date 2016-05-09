import dispatcher from "../dispatcher";
import * as axios from 'axios';


export function getSummonerData(data) {
  let allData = {};
  axios.get('/api/summoner/by-name/' + data.region + '/' + data.summonerNameA + '/' + data.summonerNameB)
    .then((res) => {
      //I should do axios.all(req1 req2 req3)
      Object.keys(res.data).forEach(function (key) {
        allData[key] = res.data[key]
        axios.all([
          axios.get('/api/championmastery/topchampions/' + data.region + '/' + allData[key].id),
          axios.get('/api/championmastery/champions/' + data.region + '/' + allData[key].id),
          axios.get('/api/summoner/stats/' + data.region + '/' + allData[key].id)
        ]).then(axios.spread(function (topChamps, champions, stats) {
          console.log("top", topChamps);
          console.log("all", champions);
          console.log("stats", stats);
          allData[key].topChampion = topChamps.data;
          allData[key].allChampions = champions.data;
          allData[key].leagueStats = stats.data;
        }));
      });
      console.log("ALLDATA", allData);
      dispatcher.dispatch({
        type: "RECIVED_SUMMONER_DATA",
        allData
      });
    })
    .catch((res) => {
      return res;
    })

};
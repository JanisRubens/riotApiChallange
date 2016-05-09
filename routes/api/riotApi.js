
//after babel is included, change to CONST;
const KEY = "201853a9-9879-45ae-b6d5-a698bbb47c85";
const HOST = "https://na.api.pvp.net";

module.exports = {

    // champion-v1.2 [BR, EUNE, EUW, JP, KR, LAN, LAS, NA, OCE, RU, TR]
    //Retrieve all champions. (REST)
    getAllChamps: function (region) {
        var url = HOST + "/api/lol/" + region + "/v1.2/champion?api_key=" + KEY;

    },

    //Retrieve champion by ID. (REST)
    getChampionById: function (region, id) {
        var url = HOST + "/api/lol/" + region + "/v1.2/champion/" + id + "?api_key=" + KEY;

    },

    //summoner-v1.4 [BR, EUNE, EUW, JP, KR, LAN, LAS, NA, OCE, RU, TR]

    //Get summoner objects mapped by standardized summoner name for a given list of summoner names. (REST)
    getSummonerByName: function (region, nameA, nameB) {
        return HOST + "/api/lol/" + region + "/v1.4/summoner/by-name/" + nameA + "," + nameB + "?api_key=" + KEY;

    },

    //Get summoner objects mapped by summoner ID for a given list of summoner IDs. (REST)
    getSummonerById: function (region, id) {
        var url = HOST + "/api/lol/" + region + "/v1.4/summoner/" + id + "?api_key=" + KEY;

    },

    // championmastery [BR, EUNE, EUW, JP, KR, LAN, LAS, NA, OCE, RU, TR]

    //Get a champion mastery by player id and champion id.
    //Response code 204 means there were no masteries found for given player id or player id and champion id combination. (RPC)

    //Well this name sucks :?
    getChampionmasteryByPlayerIdAndChampionId: function (region, playerId, championId) {
        var platformId = region.slice(0, -1) + "1"; //feels like a rushed ednpoints Kappa
        return HOST + "/championmastery/location/" + platformId + "/player/" + playerId + "/champion/" + championId + "?api_key=" + KEY;


    },

    //Get all champion mastery entries sorted by number of champion points descending (RPC)
    getAllChampionmasterysByPlayerId: function (region, playerId) {
        var platformId = region.slice(0, -1) + "1";
        return HOST + "/championmastery/location/" + platformId + "/player/" + playerId + "/champions?api_key=" + KEY;

    },

    //Get a player's total champion mastery score, which is sum of individual champion mastery levels (RPC)
    getTotalChampionmasteryScoreByPlayerId: function (region, playerId) {
        var platformId = region.slice(0, -1) + "1";
        return HOST + "/championmastery/location/" + platformId + "/player/" + playerId + "/score?api_key=" + KEY;

    },

    //Get specified number of top champion mastery entries sorted by number of champion points descending (RPC)
    //Count is not needed
    getTopChampionsByPlayerId: function (region, playerId, count) {
        var platformId = region.slice(0, -1) + "1";
        if (count !== null || count != undefined || count > 0)
            return HOST + "/championmastery/location/" + platformId + "/player/" + playerId + "/topchampions?count=" + count + "&api_key=" + KEY;
        else
            return HOST + "/championmastery/location/" + platformId + "/player/" + playerId + "/topchampions?api_key=" + KEY;
    },

    //gotToFinishFast
    //Just so you know, its 4AM and i am out of energy drink and i have no idea what i am doing Kappa
    getLeagueStatsByPlayerId: function (region, playerId) {
        return HOST + "/api/lol/" + region + "/v2.5/league/by-summoner/" + playerId + "/entry?api_key=" + KEY;
    },

    getStaticData: function (region) {
        return HOST + "/api/lol/static-data/" + region + "/v1.2/champion?dataById=true&api_key=" + KEY;
    }

}
var express = require('express');
var router = express.Router();
var axios = require('axios');
var riotApi = require('./riotApi.js');

router.route('/topchampions/:region/:id')
    .get(function (req, res) {
        axios.get( riotApi.getTopChampionsByPlayerId(req.params.region, req.params.id, null) )
            .then(function (response) {
                res.send( response.data );
            })
            .catch(function (response) {
                res.send( response.data );
            });
    });

router.route('/champions/:region/:id')
    .get(function (req, res) {
        axios.get( riotApi.getAllChampionmasterysByPlayerId(req.params.region, req.params.id) )
            .then(function (response) {
                res.send(  response.data );
            })
            .catch(function (response) {
                res.send( response.data );
            });
      });





module.exports = router;

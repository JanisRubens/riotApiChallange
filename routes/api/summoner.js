var express = require('express');
var router = express.Router();
var axios = require('axios');
var riotApi = require('./riotApi.js');

router.route('/by-name/:region/:namea/:nameb')
    .get(function (req, res) {
        axios.get( riotApi.getSummonerByName(req.params.region, req.params.namea, req.params.nameb ) )
            .then(function (response) {
                res.send(response.data );
            })
            .catch(function (response) {
                res.send(response.data );
            });

    });
router.route('/stats/:region/:id')
    .get(function (req, res) {
        axios.get( riotApi.getLeagueStatsByPlayerId( req.params.region, req.params.id ) )
            .then(function (response) {
                res.send(response.data );
            })
            .catch(function (response) {
                res.send(response.data );
            });

    });   
    





module.exports = router;

/**
 * Description : Main file to handle scrapping
 * Author : Zeeshan Al Abedin
 * Date : 23/05/19
 */

// This will allow ES6 functionality
"use strict";

const express   = require('express');
const config    = require('./config/config.js');
const app       = express();


let steamapicalls = require('./class/steamapicalls');
var Promise = require('promise');
//var request = require('request');

process.env.NODE_ENV = 'development';

app.get('/', (httpRequest, httpResponse) => {
    
    var steamCalls = new steamapicalls(process.env.NODE_ENV);
    steamCalls.getAppListFromSteam()
        .then(function(err, steamBody){
            console.log(steamBody);
        });
    
 
        
    // Get already saved game data file
    // If not present the run the scrapping
    // If present show the last appid 
    // Then run the scrapping and append in the file
});

app.listen(global.gConfig.node_port, () => {
    console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
});



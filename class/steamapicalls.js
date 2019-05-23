/**
 * Description :
 * Author : 
 * Date : 
 */

 "use strict";

 const config = require(__dirname + '\\..\\config\\config.js');
 var request  = require('request');

 module.exports = class steamapicalls {
     
    constructor(env) {
        process.env.NODE_ENV = env;
    }

    getAppListFromSteam() {
        var api_url = 'http://api.steampowered.com/ISteamApps/GetAppList/v2';
        request.get(api_url, (error, steamResponse, steamBody) => {           
            var obj = JSON.stringify(steamBody.applist);     
            return obj;                 
        })
    }
        
    


 }
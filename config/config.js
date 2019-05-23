/**
 * Description : File to handle setting up global configuration parameters
 * Author : Zeeshan Al Abedin
 * Date : 23/05/19
 */

// Lodash is used to merge simmilar objects
const _ = require("lodash");

// module variables
const config            = require('./config.json');
const defaultConfig     = config.development;
const environment       = process.env.NODE_ENV || 'development'; // default to dev
const environmentConfig = config[environment];
const finalConfig       = _.merge(defaultConfig, environmentConfig);

global.gConfig = finalConfig;

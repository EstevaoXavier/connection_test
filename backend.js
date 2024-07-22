const si = require('systeminformation');
si.wifiNetworks[0].then(data => console.log(data));
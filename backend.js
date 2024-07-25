

const si = require('systeminformation');
si.wifiNetworks([0].id).then(data => console.log(data[0].quality));
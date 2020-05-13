module.exports = require("./lib/axios");
// const axios = require("./lib/axios");
//
// const os = require('os');
//
// const interfaces = os.networkInterfaces();
//
//
// // console.log(interfaces);
// console.log("====================");
// const interfaceName = {
//     'Ethernet': true,
//     'Ethernet 2': true
// }
// for (let iface in interfaces) {
//     if (interfaceName[iface]) {
//         for (let i in interfaces[iface]) {
//             const f = interfaces[iface][i];
//             if (f.family === "IPv4" && !f.internal) {
//                 console.log(iface);
//                 console.log(f);
//                 // console.log(f);
//                 const rs = axios.create({
//                     // baseURL: 'https://api.ipify.org/',
//                     timeout: 1000000,
//                     localAddress: f.address
//                 }).request({
//                     url: 'https://api.ipify.org',
//                     method: 'get',
//                     params: {
//                         format: 'json'
//                     }
//                 }).then(res => {
//                     console.log(res.data);
//                 }).catch(e => {
//                     console.log(e);
//                     // console.log("error")
//                 });
//
//             }
//         }
//     }
// }

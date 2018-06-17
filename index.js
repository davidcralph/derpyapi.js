const snekfetch = require('snekfetch');

class derpy {
    static miku() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`https://ohlookitsderpy.space/api/miku`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static lovelive() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`https://ohlookitsderpy.space/api/lovelive`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
    static ddlc() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`https://ohlookitsderpy.space/api/ddlc`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
    static k_on() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`https://ohlookitsderpy.space/api/k_on`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
    static takagi() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`https://ohlookitsderpy.space/api/takagi`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
}

module.exports = derpy;

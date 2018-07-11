const snekfetch = require('snekfetch'),
      baseURL = 'https://api.ohlookitsderpy.space';

module.exports = class derpy {
    static miku() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`${baseURL}/miku`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static lovelive() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`${baseURL}/lovelive`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static ddlc() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`${baseURL}/ddlc`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static k_on() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`${baseURL}/k_on`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static takagi() {
       return new Promise((reject, resolve) => {
       snekfetch.get(`${baseURL}/takagi`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
}

const jaczfetch = require('jaczfetch'),
      baseURL = 'https://api.ohlookitsderpy.space';

module.exports = class derpy {
    static miku() {
       return new Promise((reject, resolve) => {
       jaczfetch.get(`${baseURL}/miku`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static lovelive() {
       return new Promise((reject, resolve) => {
       jaczfetch.get(`${baseURL}/lovelive`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static k_on() {
       return new Promise((reject, resolve) => {
       jaczfetch.get(`${baseURL}/k-on`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static ddlc() {
       return new Promise((reject, resolve) => {
       jaczfetch.get(`${baseURL}/ddlc`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static takagi() {
       return new Promise((reject, resolve) => {
       jaczfetch.get(`${baseURL}/takagi`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static nekoparastatic() {
       return new Promise((reject, resolve) => {
       jaczfetch.get(`${baseURL}/nekoparastatic`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
   static nekoparagif() {
       return new Promise((reject, resolve) => {
       jaczfetch.get(`${baseURL}/nekoparagif`)
       .then((res) => resolve(res.body))
       .catch(err => reject(err))
       });
   }
}

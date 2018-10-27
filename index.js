const fetch = require('node-superfetch');

module.exports = class derpy {
    constructor(options) {
        this.key = options.key;
        this.url = options.url || 'https://api.derpyenterprises.org'
    }

    static image(type) {
        return new Promise((reject, resolve) => {
            fetch.get(`${this.url}/image/${type}`)
                .set("Authorization", this.key)
                .then((res) => resolve(res.body))
                .catch(err => reject(err))
        });
    }

    static text(type, text) {
        return new Promise((reject, resolve) => {
            fetch.get(`${this.url}/text/${type}?text=${text}`)
                .set("Authorization", this.key)
                .then((res) => resolve(res.body))
                .catch(err => reject(err))
        });
    }

    static imagegen(type, url, text, query) {
        let owo; //OwO what's this?
        if (!url) return owo = text;
        if (!text) return owo = url;
        return new Promise((reject, resolve) => {
            fetch.get(`${this.url}/imagegen/${type}?${owo}=${query}`)
                .set("Authorization", this.key)
                .then((res) => resolve(res.body))
                .catch(err => reject(err))
        });
    }
}

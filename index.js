const express = require('express');
const geoip = require('geoip-lite');
const cors = require('cors');
const { phonePlaceholders, noRegix } = require('./phone');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

let gtU = (req, res, noreg) => {
    try {
        // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        // const geo = geoip.lookup(ip);
        // if (geo) {
        //     const country = geo.country.toLowerCase();
        //     const placeholderData = phonePlaceholders.find(item => item.type === country) || phonePlaceholders.find(item => item.isDefault);
        //     res.json(placeholderData);
        // } else {
        //     res.status(404).json({ error: 'Geo information not found' });
        // }
        let rg = noreg ? noRegix : phonePlaceholders
        res.send(rg)
    } catch {
        req.destroy()
        res.destroy()
    }
};

app.use('*', (req, res) => {
    if (req.originalUrl === '/') {
        gtU(req, res)
    } else {
        gtU(req, res, true)
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
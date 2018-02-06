
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json()); // creates http server
const token = 'test'; // type here your verification token

app.listen(3000, () => console.log('[BotEngine] Webhook is listening'));


app.get('/', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        res.writeHead(401);
        return res.end();
    }

    // return challenge
    return res.end(req.query.challenge);
});


app.post('/', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        res.writeHead(401);
        return res.end();
    }
  
    // print request body
    console.log(req.body);

    // return a text response
    const data = {
        responses: [
            {
                type: 'text',
                elements: ['Hi', 'Hello']
            }
        ]
    };

    res.end(JSON.stringify(data));
});
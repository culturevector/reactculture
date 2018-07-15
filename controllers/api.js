const { promisify } = require('util');
const request = require('request');
const graph = require('fbgraph');

/**
 * GET /api
 * List of API examples.
 */

exports.getApi = (req, res) => {
    res.render('api/index', {
        title: 'API Examples'
    });
}

exports.getUser = (req, res) => {
    console.log(JSON.stringify(res.user))
    res.json(req.user);
}

exports.getFacebook = (req, res, next) => {
    const token = req.user.tokens.find(token => token.kind === 'facebook');
    graph.setAccessToken(token.accessToken);
    graph.get(`${req.user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err, profile) => {
        if (err) { return next(err); }
        res.render('api/facebook', {
            title: 'Facebook API',
            profile
        });
    });
};

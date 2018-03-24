module.exports = (io) => { 
    var express = require('express');
    var router = express.Router();
    // var mongoose = require('mongoose');
    // var Auth = require('../models/Auth');
    
    /* GET ALL BOOKS */
    router.get('/', function(req, res, next) {
        res.locals.req = req;
        io.sockets.emit('voiceEmitReq',{imes:'Socket Success!'})
        res.json({
            imes: 'Kết nối socket'
        });
        
    });
    
    return router;
}
    
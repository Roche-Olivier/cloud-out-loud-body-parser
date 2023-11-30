exports._parse = {
    init: function (app) {
        var bodyParser = require('body-parser');
        app.use(bodyParser.urlencoded({
            limit: process.env.PARSER_URL_ENCODED_SIZE_MAX,
            extended: true
        }));
        app.use(bodyParser.json({
            limit: process.env.PARSER_JSON_SIZE_MAX
        }));
    }

}
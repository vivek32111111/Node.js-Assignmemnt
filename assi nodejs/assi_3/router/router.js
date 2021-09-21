import url from "url";

import {calculateMetrics} from "../controller/controller.js";

export const myfunc = (req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    const fetchQuery = url.parse(req.url, true).query;
    var api = url.parse(req.url, true).pathname;

    if(api === '/metrics') {
        calculateMetrics(req, res, fetchQuery);
    }
}
let express = require('express');
let app = express();
let port = 8080

app.get('/converterTemperatura', (req,res) => {

    valor = parseInt(req.query.valor)

    if (req.query.de === 'C') {
        if (req.query.para === 'F') {
            var ans = ((valor * (9 / 5)) + 32).toFixed(2);
            res.json({
                message: ans,
                status: "ok"
            });
        } else if (req.query.para == 'K') {
            var ans = (valor + 273.15).toFixed(2);
            res.json({
                message: ans,
                status: "ok"
            });
        } else {
            res.json({
                message: "error",
                status: "error"
            });
        }
    }
    else if (req.query.de === 'F') {
        if (req.query.para === 'C') {
            var ans = ((valor - 32) * (5 / 9)).toFixed(2);
            res.json({
                message: ans,
                status: "ok"
            });
        } else if (req.query.para == 'K') {
            var ans = ((valor + 459.67) * 5/9).toFixed(2);
            res.json({
                message: ans,
                status: "ok"
            });
        } else {
            res.json({
                message: "error",
                status: "error"
            });
        }
    }
    else if (req.query.de === 'K') {
            var ans = (valor - 273.15).toFixed(2);
        if (req.query.para === 'C') {
            res.json({
                message: ans,
                status: "ok"
            });
        } else if (req.query.para == 'F') {
            var ans = (valor * (9 / 5) - 459.67).toFixed(2);
            res.json({
                message: ans,
                status: "ok"
            });
        } else {
            res.json({
                message: "error",
                status: "error"
            });
        }
    }
    else {
        res.json({
            message: "error",
            status: "error"
        });
    }
})


app.listen(8080);
console.log("Listening on port: " + port)

module.exports = app;
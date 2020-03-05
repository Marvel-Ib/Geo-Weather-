exports.main = (req,res) =>
{
    res.render('all',{
        title:"Geo-Weather"
    })
};

exports.error =(req,res) =>
{
    res.render('404',{
        title:"Error"
    });
}
const fgeo = require('../utils/forward');
const rgeo = require('../utils/reverse')
const wgeo = require('../utils/weather');



exports.fgeoo = (req,res) =>
{
    
    fgeo(req.query.address, (err,data) =>
    {
        
        res.send(data);
    })

}

exports.rgeoo = (req,res) =>
{
    rgeo(req.query.longitude, req.query.latitude,(err,data) =>
    {
        res.send(data);
        
    })
}

exports.gweather = (req,res) =>
{
    fgeo(req.query.address,(err,data) =>
    {
        let long = data.features[0].center[0]
        let lat =data.features[0].center[1]

        wgeo(lat,long, (erre,da) =>
        {
            res.send(da);
        })
    })

}
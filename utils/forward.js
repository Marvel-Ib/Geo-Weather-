const request = require('request');

const forwardgeo = (address, cb) =>
{   const key = process.env.MAP
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${key}&limit=1`
    request({url:url, json:true}, (err,data) =>
    {
        if(err)
        {
            return cb("fatal error",undefined)
        }
        cb(undefined,data.body);
    } )
}


module.exports =forwardgeo
/*
forwardgeo("Osogbo", (err,data) =>
{
    console.log(data)
})
*/
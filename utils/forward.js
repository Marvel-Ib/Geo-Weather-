const request = require('request');
//forward geocoding
//  

const forwardgeo = (address, cb) =>
{   const key ='pk.eyJ1IjoibWFydmVsLWliIiwiYSI6ImNrMTNodGFodDA3N2IzaXJxcmxnNTI5ZTMifQ.UKeLhyp30PL9cwIkDUwDAw'
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
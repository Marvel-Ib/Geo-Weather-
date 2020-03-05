const request = require('request');

//reverse geocoding 
//  https://api.mapbox.com/geocoding/v5/mapbox.places/-122.463,37.7648.json?access_token=pk.eyJ1IjoibWFydmVsLWliIiwiYSI6ImNrMTNodGFodDA3N2IzaXJxcmxnNTI5ZTMifQ.UKeLhyp30PL9cwIkDUwDAw&limit=1

const reversegeo = (longitude, latitude, cba) =>
{
    const key = 'pk.eyJ1IjoibWFydmVsLWliIiwiYSI6ImNrMTNodGFodDA3N2IzaXJxcmxnNTI5ZTMifQ.UKeLhyp30PL9cwIkDUwDAw';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${key}&limit=1`;
    request({url:url, json:true}, (err, res) =>
    {
        if(err)
        {
           return cba("error", undefined);
        }
     cba(undefined,res.body)
    })
};




module.exports = reversegeo;
/*

reversegeo('-122.463','37.7648', (err, data) =>
{
    console.log(data)
});
*/
const request = require('request');



const reversegeo = (longitude, latitude, cba) =>
{
    const key = process.env.MAP
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
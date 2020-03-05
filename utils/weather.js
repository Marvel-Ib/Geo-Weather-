const request = require('request');


//https://api.darksky.net/forecast/a0c3548f7db1e5927e5438cb125497f9/37.8267,-122.4233

const weather = (lat, long, cb) =>
{
    const key ='a0c3548f7db1e5927e5438cb125497f9';
    const url =`https://api.darksky.net/forecast/${key}/${lat},${long}`;
    request({url:url, json:true}, (err,res) =>
    {
        if(err)
        {
            return cb("opps", undefined)
        }
        cb(undefined,res.body)
    })
}


module.exports =weather;

/*
weather('37.8267','-122.4233',(err,res) =>
{
    console.log(res)
})
*/
const request = require('request');




const weather = (lat, long, cb) =>
{
    const key =process.env.DARK
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
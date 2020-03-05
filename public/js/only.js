const forwardform = document.getElementById('k')
const hh1 = document.getElementById('longhead')
const hq1 = document.getElementById('lathead')

forwardform.addEventListener('submit', (e) =>
{
    e.preventDefault();
    const ks = document.getElementById('kk').value;
    const url = `/getfgeo?address=${ks}`;
    fetch(url).then(res => res.json())
    .then((data) =>
    {
    
        
        let long = data.features[0].center[0]
        let lat =data.features[0].center[1]
        hh1.textContent ="Longitude :  " + long;
        hq1.textContent = "Latitude : " + lat;
    })
    .catch((err) =>
    {
        console.log(err);
    })
})


const revform = document.getElementById('hmm');
const showadd = document.getElementById('show');

revform.addEventListener('submit', (e) =>
{
    e.preventDefault();
    let lons = document.getElementById('Glong').value;
    let lats = document.getElementById('Glat').value;
    let url =`http://localhost:9000/getrgeo?latitude=${lats}&longitude=${lons}`
    fetch(url).then(res => res.json())
    .then((data) =>
    {
        showadd.textContent = "Address : " + data.features[0].place_name;
    }).catch((err) =>
    {
        console.log(err)
    })
})


 let weatherform = document.getElementById('wa');
 let showdetail = document.getElementById('wq');
 let showsummary = document.getElementById('ww');
weatherform.addEventListener('submit',(e) =>
{
    e.preventDefault();
    getadd = document.getElementById('wb').value;
    getinfo = document.getElementById('ex').value;

  let url = `http://localhost:9000/getweather?address=${getadd}`
  fetch(url).then(res => res.json())
  .then((data) =>
  {
      showdetail.innerHTML =  data[getinfo].summary
      showsummary.innerHTML =data[getinfo].icon
  }).catch((err) =>
  {
      console.log(err)
  })
})
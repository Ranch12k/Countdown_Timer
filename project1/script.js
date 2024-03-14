const endData = "14 March 2024 12:00 AM";

document.getElementById("end-Date").innerText=endData;
const inputs =document.querySelectorAll("input")


function clock(){
    const end = new Date(endData);
    const now = new Date()
    console.log(end)
    console.log(now)
    const diff= (end-now)/1000;
    

    inputs[0].value=Math.floor(diff/3600/24)
    inputs[1].value=Math.floor(diff/3600)%24 
    inputs[2].value=Math.floor((diff/60)%60)
    inputs[3].value=Math.floor(diff%60)
    // console.log(diff/3600/24)
    // console.log((diff/3600)%24)
    // console.log((diff/60)%60)
    // console.log((diff)%60)
     

    // console.log(Days)
    // console.log(Hours)
    // console.log(Minutes)
    // console.log(seco)

    inputs[0].values=Days


    // console.log(inputs[0])
}
// clock()
// Uncomment the following lines if you want to update the clock every second

setInterval(()=>{
clock()
},1000)
let hours=document.getElementById('hour')
let minutes=document.getElementById('minute')
let seconds=document.getElementById('second')
let am_pm=document.getElementById('am_pm')

setInterval(()=>{
let x=new Date()
hours.innerText=x.getHours()
minutes.innerText=x.getMinutes()
seconds.innerText=x.getSeconds()
if(x.getHours()<10){
    seconds.innerText=`0${x.getSeconds()}`
}
if(x.getMinutes()<10){
    seconds.innerText=`0${x.getSeconds()}`
}
if(x.getSeconds()<10){
    seconds.innerText=`0${x.getSeconds()}`
}
if(x.getHours()<12){
    am_pm.innerText="AM"
}
else{
    am_pm.innerText="PM"
}
},1000)
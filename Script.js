let time=document.querySelector(".time");
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let min=document.querySelector(".num1");
let sec=document.querySelector(".num2");
let total=0;
let interval;
function update() {
    let minute=Math.floor(total/60);
    let second=total%60;
    time.innerText=`${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
}
start.addEventListener("click",()=>{
    let minute=parseInt(min.value) || 0;
    let second=parseInt(sec.value) || 0;
    total=minute*60+second;
    if(total<=0 || interval) return;
    interval=setInterval(()=>{
        if(total>0) {
            total--;
            update();
        }
        else {
            clearInterval(interval);
            alert("times Up !!");
        }
    },1000);
})
stop.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
})
reset.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
    total=0;
    sec.value="";
    min.value="";
    time.innerText="00:00";
})

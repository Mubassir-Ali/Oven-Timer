let sec=0;
let state = false;

let toggleBtn=false;


function start(me) {
    if(state){
        state=false;
        me.innerHTML="Start";
    } else {
        state=true;
        me.innerHTML="Pause";
    }
}


function reset(){
    sec=0;
    document.getElementById("displayCounter").innerHTML=sec;
}


function add(value){
    sec +=value;
    document.getElementById("displayCounter").innerHTML=sec;
}


setInterval(function(){
    if(state && sec>0) {
        if(sec>0){
            document.getElementById("displayCounter").innerHTML = --sec; 
        }
    } else {
        state=false;
        me.value="Start";
    }
},1000);
const clouds= document.querySelectorAll(".hole");
const scoreBord = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
const start = document.querySelector("#morty-play");
const novice = document.getElementById("demo1");
const apprenti = document.getElementById("demo2");
const expert = document.getElementById("demo3");

let lastCloud;

let timeUp = false; //false si pas fini | true si fini
let score = 0;

function randomTime(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random()*clouds.length);
    const cloudSelect = clouds[indexCloud];

    if(cloudSelect == lastCloud){
        return randomCloud(clouds);
    }
    lastCloud = cloudSelect;
    return cloudSelect;
}

function showHead1(){
    const time = randomTime(600,1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp){
            showHead1();
        }
        cloud.classList.remove("up");
    },time);
}
function showHead2(){
    const time = randomTime(500,800);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp){
            showHead2();
        }
        cloud.classList.remove("up");
    },time);
}
function showHead3(){
    const time = randomTime(400,600);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp){
            showHead3();
        }
        cloud.classList.remove("up");
    },time);
}

function playeurScore(event){
    if(!event.isTrusted) return;
    score++;
    this.classList.remove("up");
    scoreBord.textContent = score;
}

heads.forEach(head => head.addEventListener("click",playeurScore));

function startGame1(){
    score = 0;
    scoreBord.textContent = 0;
    timeUp = false;
    showHead1();
    setTimeout(()=>{
        timeUp = true;
        setTimeout(() => {
            scoreBord.textContent = "end";
        },2000);
    },10000);
}
function startGame2(){
    score = 0;
    scoreBord.textContent = 0;
    timeUp = false;
    showHead2();
    setTimeout(()=>{
        timeUp = true;
        setTimeout(() => {
            scoreBord.textContent = "end";
        },2000);
    },10000);
}
function startGame3(){
    score = 0;
    scoreBord.textContent = 0;
    timeUp = false;
    showHead3();
    setTimeout(()=>{
        timeUp = true;
        setTimeout(() => {
            scoreBord.textContent = "end";
        },2000);
    },10000);
}

/* NIVEAU */
let i = 0;
let j = 0;
let k = 0;
const speed = 50;

let text1 = "NOVICE";
let text2 = "APPRENTI";
let text3 = "EXPERT";

function typeWriter1(){
    if(i< text1.length){
        novice.innerText += text1.charAt(i);
        i++;
        setTimeout(typeWriter1,speed);
    }
}
function typeWriter2(){
    if(j< text2.length){
        apprenti.innerText += text2.charAt(j);
        j++;
        setTimeout(typeWriter2,speed);
    }
}

function typeWriter3(){
    if(k< text2.length){
        expert.innerText += text3.charAt(k);
        k++;
        setTimeout(typeWriter3,speed);
    }
}

function myclick(){
    for(var i = 1;i<=3;i++){
        document.getElementById("demo" + i).addEventListener("click",function(){
            document.getElementById("demo1").style.display = "none";
            document.getElementById("demo2").style.display = "none";
            document.getElementById("demo3").style.display = "none";
        })
    }
}

start.addEventListener("click",function(){
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myclick();
})


// novice.addEventListener("click",function(){
//     myclick();
//     showHead1();
// })


// apprenti.addEventListener("click",function(){
//     myclick();
//     document.getElementById("demo1").style.display = "none";
//     document.getElementById("demo2").style.display = "none";
//     document.getElementById("demo3").style.display = "none";
//    showHead2();
// })


// expert.addEventListener("click",function(){
//     myclick();
//  showHead3();
// })

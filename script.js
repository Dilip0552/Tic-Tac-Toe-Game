console.log("Tic Tac Toe game initialized.");

document.body.addEventListener("click",check)

var user="user1"
let winning_pattern=["123","456","798","159","357","147","258","369"]
var user1_pattern=""
var user2_pattern=""
function clicked(id){
    if (user==="user1"){
        box=document.getElementById(id);
        if (!box.querySelector('img')){
            box.innerHTML=""
            img=document.createElement("img");
            img.src="x.svg"
            box.value="x"
            box.appendChild(img)
            user1_pattern+=box.value;
            user="user2"
        }
    }
    else{
        box=document.getElementById(id);
        if (!box.querySelector('img')){
            console.log("it is working")
            box.innerHTML=""
            img=document.createElement("img");
            img.src="o.svg"
            box.value="o"
            box.appendChild(img)
            user2_pattern+=box.value;
            user="user1"
        }
    }

}
function check(){
for (pattern of winning_pattern){
    count_o=0
    count_x=0
    for (i=0; i<pattern.length;i++){
    b=document.getElementById(`box${pattern[i]}`).value;
    if (b==="o"){
        count_o+=1
    }
    else if (b==="x"){
        count_x+=1
    }
    }
    if (count_o===3){
        console.log("O wins")
        winner=document.createElement("div");
        winner.setAttribute("id","winner")
        text=document.createElement("p");
        text.style="color:red"
        text.innerText=`Red Wins`
        winner.appendChild(text)
        a_tag=document.createElement("a")
        a_tag.setAttribute("href","http://127.0.0.1:5500/index.html")
        restart_btn=document.createElement("button");
        restart_btn.innerText="Restart"
        a_tag.appendChild(restart_btn)
        winner.appendChild(a_tag)
        document.body.appendChild(winner)
    }
    else if (count_x===3){
        console.log("X wins")
        winner=document.createElement("div");
        winner.setAttribute("id","winner")
        text=document.createElement("p");
        text.style="color:blue"
        text.innerText=`Blue Wins`
        winner.appendChild(text)
        a_tag=document.createElement("a")
        a_tag.setAttribute("href","http://127.0.0.1:5500/index.html")
        restart_btn=document.createElement("button");
        restart_btn.innerText="Restart"
        a_tag.appendChild(restart_btn)
        winner.appendChild(a_tag)
        document.body.appendChild(winner)
    }
}
}
box=document.getElementsByClassName("box");

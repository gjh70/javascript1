let boxes= document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset");
let newb=document.querySelector("#newb");
let msgc=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turnO= true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset = () =>{
       turnO=true;
       enable();
       msgc.classList.add("hide");
       msg.innerText="";

}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
     console.log("box was clicked");
     if(turnO){ //playerO
        box.innerText="O";
        turnO=false;
     }
     else{//playerX
        box.innerText="X";
        turnO=true;
     }
     box.disabled=true;
     check();
    });

    });

    const disable= () =>{
        for( let box of boxes){
            box.disabled = true;
        }
    }

    
    const enable= () =>{
        for( let box of boxes){
            box.disabled = false;
            box.innerText="";
        }
    }


    const show = (winner) => {
        msg.innerText=`Congratulations, Winner is ${winner}`;
        msgc.classList.remove("hide");
        disable();
    };




    const check = () => {
        for( let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val!=="" && pos2Val !== "" && pos3Val !== ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner",pos1Val);
                    show(pos1Val);
                    return;
                    
                }
            }
        }
    };

    newb.addEventListener("click",reset);
    resetBtn.addEventListener("click",reset);  
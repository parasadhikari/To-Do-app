// // ******************************MINI Project********************************
// let btn=document.querySelector("button")
// let ul=document.querySelector("ul")
// let input=document.querySelector("input") 
// let li=document.querySelector("li") 
// //now we want on clickinge button(Add Task) our input text to be copy in list (li)
// btn.addEventListener("click",f1)

// function f1() 
// {
//     let li=document.createElement("li")//list item is to 
//     li.innerText=input.value
//     let delbtn=document.createElement("button")
//     // //  delbtn=document.addEventListener("button")
//     delbtn.innerText="Delete"
//     delbtn.classList.add("delete")

//     li.appendChild(delbtn)
//     ul.appendChild(li);
//     input.value="";//i.e on submitting one input it gets automatically get remove  
// };

// // to delete the task we add --->
// // let del=document.querySelectorAll(".delete")
// // for (delbtn of del) 
// // {
// //   delbtn.addEventListener("click",function() {
// //     let par=this.parentElement;
// //     // console.log(par)
// //     par.remove();//but this delete only existence item  not new created item bcz----->>> addEventlistener only applied for previous existence element not createdElement
// //     // console.log("deleted")
// //   })    
// // }


// //**********************Event Delegation***************************** */ 
// // its type of phenomeneon in which event listener is added to parentelement----->instead of childElement
// //i.e if eventListener in parent--->then automatically childElement gets that eventListener.
// ul.addEventListener("click",f2)
// function f2 (event) 
// {
//     console.log(event.target.nodeName);//it tells which list has been deleted or clicked
//     console.log("clicked")
//     if (event.target.nodeName=="BUTTON")
//     {
//         let listItem=event.target.parentElement;
//         console.log(listItem)
//         listItem.remove();
//         console.log("deleted")
//     }
//     else
//     {
//         console.log("don't delete")
//     }
// };



//**********************************---------------OR(in Shortcut)---------------*************************************/ 





let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
let li=document.querySelector("li");
btn.addEventListener("click",f1);
function f1(event) 
{
    // console.log(btn.value=input.value)
    let li=document.createElement("li")
    li.innerText=input.value
    ul.appendChild(li)
    input.value=""

    // also we want delete button to be there in new items on clicking Add button 
    let delbtn=document.createElement("button")
    delbtn.innerText="Delete"
    li.appendChild(delbtn)
}

// now our task is to make delete button functionable
// li.addEventListener("click",f2)//--->>it work for 1st list only not all ,therefore we will make Ul 
ul.addEventListener("click",f2)
function f2(event) 
{
    // console.log("deleted")//but we doesnt clicking any random name or space--->then also got delete as we have created ul(on clicking)
    // but we want only when delete button clicked its get delete
    // console.log(event)//event whole list...
    // console.log(event.target)
    // console.log(event.target.nodeName)//it tells what has been clicked list/ul/button....
    // console.log(event)
    if (event.target.nodeName=="BUTTON") 
    {
        let listItem=event.target.parentElement;//select individual parent list
        listItem.remove();
        
    }
    
}


let Inputbox = document.getElementById("input-box");
let ListContainer = document.getElementById("list-container");

function addTask()
{
    
    if(Inputbox.value==='')
    {
        alert("You must have to write Something to add in this list");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=Inputbox.value;
        ListContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }    
    Inputbox.value="";
    saveData();
}

   
ListContainer.addEventListener("click",(e)=>{
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
},false);

addBtn.addEventListener("click",addTask);
Inputbox.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter')
    {
        addTask();
    }
})

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}
function showTask(){
    ListContainer.innerHTML=localStorage.getItem("data");
}
showTask();
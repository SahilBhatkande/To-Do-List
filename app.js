const text = document.querySelector('#text1');
const list = document.querySelector('#list-container'); // Corrected selector

function addTask() {
    if (text.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = text.value; // Corrected accessing input value
        list.appendChild(li);
        text.value = ''; // Clearing the input field after adding the task

        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)

    }
    text.value="";
    saveData();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", list.innerHTML);
}


function showTask(){

    list.innerHTML=localStorage.getItem("data");
}

showTask();
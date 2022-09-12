let popup = document.getElementById("popup")

function openPopup(){
    popup.classList.add("openPopup");
}

function closePopup(){
    popup.classList.remove("openPopup");
}

let sizeInput = prompt('Size of Grid?');
let size = Number(sizeInput)

for (let i = 0; i < size; i++)
{
    const newDiv = document.createElement("div");
    newDiv.className = 'row';
    newDiv.id = i;
    parentNode = document.getElementById("container");
    parentNode.appendChild(newDiv);
    for (let j = 0; j < size; j++)
    {
        const newDiv2 = document.createElement("div");
        newDiv2.className = 'column';
        parentNode = document.getElementById(i);
        parentNode.appendChild(newDiv2);
    }
}

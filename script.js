var artistList = [];
loadFromFile();

function addArtist() {
let addArtistbtn = document.querySelector("#add-artist");
let form = document.querySelector("#add-artist-form");
    if (getComputedStyle(form, null).display === "none") {
        form.style.display = "flex";
        addArtistbtn.textContent = "Cancel";
    } else {
        form.style.display = "none";
        addArtistbtn.textContent = "Add Artist";
    }
}

function addedArtist(){
    let name = document.querySelector("#name").value;
    let des = document.querySelector("#description").value;
    let url = document.querySelector("#url").value;
    var obj = {"name" : name, "description" : des, "link": url};
    if(checkExistArtist(name)){
        window.alert("The artist exists in the dictionary.");
        return;
    }

    let cell = document.createElement("div");
    let list = document.getElementById("list");
    let textContent = document.createElement("div");
    let deletebtn = document.createElement("button");
    let artistName = document.createElement("h3");
    let artistDes = document.createElement("p");
    let icon = document.createElement("img");
    let btnDiv = document.createElement("div");

    cell.className = "cell";
    artistName.textContent = name;
    artistName.className = "artist-name"
    artistDes.textContent = des;
    artistDes.className = "artist-description";
    icon.className = "image"
    textContent.className = "content";
    deletebtn.className = "delete";
    deletebtn.textContent = "delete";
    btnDiv.className = "deleteBtnDiv";
    icon.setAttribute("src", url);

    addToFile(obj);

    location.reload();
    
}

function deleteArtist(deletebtn){
    let obj = deletebtn.parentNode.parentNode;
    console.log(obj);
    let target = {"name": obj.children[1].children[0].textContent,
                            "description": obj.children[1].children[1].textContent,
                            "link": obj.children[0].src
                }
    deleteFromFile(target);
    location.reload()
}
function search(){
    var a = document.getElementById("search").value.toUpperCase();
    var cell = document.getElementsByClassName("cell");
    while(cell.length>0){
        cell[0].remove();
    }
    findArtist(a);
}
function findArtist(string){
    fetch("/search").
    then((res)=>{
        return res.json();
    }).then((data)=>{
        data.forEach((obj)=>{
            if (obj.name.toUpperCase().includes(string)){
            loadArtist(obj.name, obj.description, obj.link);
            }
        });
    })
}

function loadArtist(name, des, url){
    let cell = document.createElement("div");
    let list = document.getElementById("list");
    let textContent = document.createElement("div");
    let deletebtn = document.createElement("button");
    let artistName = document.createElement("h3");
    let artistDes = document.createElement("p");
    var icon = document.createElement("img");
    let btnDiv = document.createElement("div");

    cell.className = "cell";
    artistName.textContent = name;
    artistName.className = "artist-name"
    artistDes.textContent = des;
    artistDes.className = "artist-description";
    icon.className = "image"
    textContent.className = "content";
    deletebtn.className = "delete";
    deletebtn.textContent = "delete";
    btnDiv.className = "deleteBtnDiv";
    icon.src = url;

    btnDiv.appendChild(deletebtn);
    cell.appendChild(icon);
    textContent.appendChild(artistName);
    textContent.appendChild(artistDes);
    cell.appendChild(textContent);
    cell.appendChild(btnDiv);
    list.appendChild(cell);
    deletebtn.onclick = (e) => {
        deleteArtist(deletebtn);
    }
}

function checkExistArtist(name){
    var list = document.getElementById("list");
    for(let i=0; i < list.children.length; i++){
        if(list.children[i].children[1].children[0].textContent.localeCompare(name) == 0){
            return true;
        }
    }
    return false;
}
function loadFromFile(){
    fetch('/load')
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        data.forEach((obj)=>{
            loadArtist(obj.name, obj.description, obj.link);
        })
    }) 
}

function addToFile(obj){
    fetch("/add", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
       })
       .then((response) => console.log(response))
       .catch((err) => console.log(err))
}

function deleteFromFile(obj){
    fetch("/delete", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
       })
       .then((response) => console.log(response))
       .catch((err) => console.log(err))
}

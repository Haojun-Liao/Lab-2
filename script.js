var artistList = [];
// localStorage.clear();
loadStorage();

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

    if(checkExistArtist(name)){
        window.alert("The artist exists in the dictionary.");
        return;
    }

    artistList.push({"name" : name, "description" : des, "link": url});

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

    localStorage.setItem("artist-list", JSON.stringify(artistList));

    location.reload();

    // cell.appendChild(icon);
    // textContent.appendChild(artistName);
    // textContent.appendChild(artistDes);
    // cell.appendChild(textContent);
    // cell.appendChild(deletebtn);
    // list.appendChild(cell);
    // deletebtn.onclick = (e) => {
    //     deleteArtist(deletebtn);
    // }

    
}

function deleteArtist(deletebtn){
    let parent = deletebtn.parentNode;
    console.log(parent.childNodes);
    for (var i = 0; i < parent.childNodes.length; i++){
        if (parent.childNodes[i].className == "content"){
            var delName = parent.children[i].children[0].textContent;
            var list = JSON.parse(localStorage.getItem("artist-list"));
            for(let i=0; i<list.length; i++){
                console.log(list[i]);
                if (list[i].name == delName){
                    list.splice(i,1);
                    break;
                }
            }
            localStorage.setItem("artist-list", JSON.stringify(list));
            deletebtn.parentNode.parentNode.removeChild(deletebtn.parentNode);
            break
        }
    }
}
function search(){
    var list = JSON.parse(localStorage.getItem("artist-list"));
    if (list === null){
        return;
    }
    var a = document.getElementById("search").value.toUpperCase();
    var cell = document.getElementsByClassName("cell");

    for(let i=0; i<list.length; i++){
        if(!list[i].name.toUpperCase().includes(a)){
            cell[i].style.display = "none";
        } else {
            cell[i].style.display = "flex";
        }
    }
}

function loadStorage(){
    if (localStorage.getItem("artist-list") == null)
        return;
    let list = localStorage.getItem("artist-list");
    artistList = JSON.parse(list);
    artistList.forEach(function(a){
        loadArtist(a["name"], a["description"], a["link"]);
    }
    )
}

function loadArtist(name, des, url){
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

    btnDiv.appendChild(deletebtn);
    cell.appendChild(icon);
    textContent.appendChild(artistName);
    textContent.appendChild(artistDes);
    cell.appendChild(textContent);
    cell.appendChild(btnDiv);
    list.appendChild(cell);
    deletebtn.onclick = (e) => {
        deleteArtist(deletebtn);
        location.reload();
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

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
    console.log("1");
}

function addedArtist(){
    console.log("2");
    addArtist();
    let name = document.querySelector("#name").value;
    let des = document.querySelector("#description").value;
    let url = document.querySelector("#url").value;
    let cell = document.createElement("div");
    let list = document.getElementById("list");
    let textContent = document.createElement("div");
    let deletebtn = document.createElement("button");
    cell.className = "cell";
    let artistName = document.createElement("h3");
    artistName.textContent = name;
    artistName.className = "artist-name"
    let artistDes = document.createElement("p");
    artistDes.textContent = des;
    artistDes.className = "artist-description";
    let icon = document.createElement("img");
    icon.className = "image"
    textContent.className = "content";
    deletebtn.className = "delete";
    deletebtn.textContent = "delete";
    icon.setAttribute("src", url);
    cell.appendChild(icon);
    textContent.appendChild(artistName);
    textContent.appendChild(artistDes);
    cell.appendChild(textContent);
    cell.appendChild(deletebtn);
    list.appendChild(cell);
    console.log(0);
    deletebtn.onclick = (e) => deletebtn.parentNode.parentNode.removeChild(deletebtn.parentNode);
}

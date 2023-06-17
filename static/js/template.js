// start header part
let showMega = document.getElementById("show-mega");

showMega.onclick = () => {

    $("#mega-container").slideToggle()
}
// End header part


// Start main part-------
let list = document.getElementById("menu");
let liList = list.querySelectorAll("li");
let video = document.getElementById("iframe");
let discription = document.getElementById("discription");

list.addEventListener("mousedown" , (e) => {
    
    for (let i = 0; i < liList.length; i++) {

        video.src = $(e.target).attr("data-link");

        discription.innerHTML = e.target.querySelector(".disc").innerHTML

        liList[i].style.backgroundColor = "transparent";

        if (e.target = liList[i]) {
            e.target.style.backgroundColor = "#2196f3";
        }
    }
});
// End main part-------




// up and down btn 

window.onscroll = () => {
    if (scrollY >= 1100) {
        upbtn.style.display = "block";
    }
    else {
        upbtn.style.display = "none";
    }
}

upbtn.onclick = () => {
    scroll({
        top : 0,
        behavior : "smooth"
    });
};
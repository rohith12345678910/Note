//selecting popup box popupoverlay button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display = "block"
})

//select cancel button 

var cancelpopup = document.getElementById("cancel-book")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault(event)
    popupoverlay.style.display="none"
    popupbox.style.display = "none"
})

//select container,add-book,book--titleinput,book-author-input,book-description

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault(event)

    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h3>${bookauthorinput.value}</h3>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">close</button>`
    container.append(div)
     popupoverlay.style.display="none"
     popupbox.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
var popbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var addpopbutton=document.getElementById("popup-button")

addpopbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popbox.style.display="none"
})


var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var author=document.getElementById("book-author")
var bookdescrip=document.getElementById("book-description")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${author.value}</h5>
    <p>${bookdescrip.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popbox.style.display="none"
    
})
function deletebook(event){
    event.target.parentElement.remove()

}
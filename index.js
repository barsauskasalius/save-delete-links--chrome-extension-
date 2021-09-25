// chrome://extensions/ 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
//JSON.parse() Pavercia data is string i normalu JSON.stringify() pavercia i string
//localStorage.getItem("myLeads", JSON.stringify(myLeads))


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)  
     })
   
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)
   console.log( localStorage.getItem("myLeads"))
})
function render(leads) {
let listItems = ""
for(let i = 0; i < leads.length; i++){
    listItems += `
<li>
    <a href = "${leads[i]}" target="_blank" rel="noopener noreferrer">
        ${leads[i]} 
    </a>
</li>`
//ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" // U CAN CREATE HTML ELEMENTS WITH JAVASCRIPT
/*const li = document.createElement("li")
li.textContent = myLeads[i]
ulEl.append(li)*/
}
ulEl.innerHTML = listItems
}





// falsy walues: false, 0, null -> how dev emphesises emptynes, "", undefined => how javascript does, NaN

/*

let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
    console.log("i want to open the box")
})


const playerName = "alius";
let credits = 45;

credits -= 10
// if posible use const. if not use let.


//iner html manipulation

let container = document.getElementById("container")

container.innerHTML = `<button onclick="buy()"> buy!! </button> `

function buy() {
container.innerHTML += `<p> thank you for buying </p>`
}
*/

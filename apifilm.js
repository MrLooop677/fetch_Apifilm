const api = "https://www.breakingbadapi.com/api/characters"
const select = document.querySelector("select")
const content = document.querySelector("#content");
async function getData() {
    try {
        const response = await fetch(api);
        const data = await response.json()
        printData(data)
    } catch (e) {
        console.log("Error:", e.message)
    }
}
getData()

function printData(data) {
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")
    header.innerHTML +=
        `<select class=form-control onchange="getch(this.value)">
    <option>Select character</option>
     ${data.map(character => `<option>${character.name}</option>`)}
    </select>`
} 

async function getch(name){
 if(name!=="Select character"){
    const response= await fetch(`${api}?name=${name}`)
    const data=await response.json()
    content.innerHTML=`
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <img src=${data[0].img} width=250> </img>
    ` 
 }
}
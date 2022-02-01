// Write your code here!
// let element = document.createElement('div')
// document.body.appendChild(element)

// let ul = document.createElement('ul')

// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }

// element.appendChild(ul)

//after index.js is processed, no longer has DOM node main#main
//expected <main id=main> to not exist
document.getElementById('main').remove();


//add a newHeader varaible that points to a node h1#victory with "YOUR-NAME is the champion" inside inner hmtl
// var newHeader = document.createElement('h1#victory');
var newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"




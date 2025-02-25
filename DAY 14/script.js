/*
function addLanguage(langname) {
  const li = document.createElement('li')
  li.innerHTML = `${langname}`
  document.querySelector('.language').
  appendChild(li)
}

addLanguage("Python")
addLanguage("TypeScript")

//Optimised Way
function addOptionLangauge(langname) {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(langname))
  document.querySelector('.language').appendChild(li)

}

addOptionLangauge("Golang")

//Edit Value
const secondLang =  document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "Mojo"
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

//Chnage Javscript with Typescript
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = "<li>TypeScript</li>"

//remove
const lastLang = document.querySelector("li:last-child")
lastLang.remove()

*/

///////////////////////////////////////Events//////////////////////////////////////////////////////

console.log('%c HI', 'color: firebrick')


const container = document.querySelector('#dog-image-container')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const ulContainer = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')
let dogBreedsObj;




function getImages(){
fetch(imgUrl)
.then(res => res.json())
.then(images => {
const imgs = images.message
let imgsArray = createElement(imgs)
renderElement(imgsArray)
})
function createElement(imgs){
return imgs.map((img) => {
let i = `<img src = ${img}>`
return i
})
}


}


function renderElement(element){
container.innerHTML += element
}


getImages()




function getBreeds(){
fetch(breedUrl)
.then(res => res.json())
.then(breeds => {
    dogBreedsObj = Object.keys(breeds.message)
    const breedsLis = createLiElement(dogBreedsObj)
    renderBreeds(breedsLis)
})
}




function createLiElement(dogBreedsObj){
    return dogBreedsObj.map((breed) => {
    let li = `<li>${breed}</li>`
    return li
})
}


function renderBreeds(breedsLis){
    breedsLis.forEach(element => {
    ulContainer.innerHTML += element
})


}


// ulContainer.addEventListener("click", function(e){
//     e.target.style.color = 'blue';
// })


dropDown.addEventListener('change', function(e){
    const letter = e.target.value
    const filteredBreeds = dogBreedsObj.filter(breed => breed.startsWith(letter))
    const filteredBreedsLi = createLiElement(filteredBreeds)
    ulContainer.innerHTML = ''
    renderBreeds(filteredBreedsLi)
})


getBreeds()
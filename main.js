// letters 
let  letters ="abcdefhijgklmnopqrstuvwxyz"
let lettersDiv = document.querySelector(".letters")
let lettersARray = Array.from(letters)

lettersARray.forEach((el)=>{
    let myelemnt = document.createElement("span")
    let myelementcontent = document.createTextNode(el)
    myelemnt.className = "letters-box"
    myelemnt.appendChild(myelementcontent)    
    lettersDiv.appendChild(myelemnt)
})


// object of words 

const words = {
people : ["mahatma gandi","Albert Einsgein","khalid ibn ELwalid","abou obaida"] ,
programming : ["php","java","go","rubby","mysql","python","c++"],
countries : ["palestie","algeria","syria","Qatar","liban"],
movies : ["up","got","vikings","hubbit","the lord of the ring","Coro","avatare"],
}

// get random property  

let allKeys = Object.keys(words)
let randomPropertyNumber = Math.floor(Math.random()*allKeys.length)
 // category
let randomPropName = allKeys[randomPropertyNumber]
// category words
let randomPropValue = words[randomPropName]

console.log(randomPropValue)
// random Number depend on words
let randomValueNumber = Math.floor(Math.random()* randomPropValue.length)
console.log(randomValueNumber) 
// 
let randomValueValue = randomPropValue[randomValueNumber]
console.log(randomValueValue)


// set category nfo
document.querySelector(".game-info .category span").innerHTML = randomPropName 


// selects Letters Guess container
let letterGuess = document.querySelector(".letters-guess")
// convert the chosen Word into an array
let ArrayvalueWithSpaces = Array.from(randomValueValue)
console.log(ArrayvalueWithSpaces)
// spans depent on word length
ArrayvalueWithSpaces.forEach((el)=>{
    let emptyspan = document.createElement("span")
    // if w have a space
    if(el === ' '){
     // add class to span who has a space 
    emptyspan.className = 'with-space'
    }
    //append the spane info the letters Guess container
    letterGuess.appendChild(emptyspan)
})

let GuessSpans = document.querySelectorAll(".letters-guess span")
// set wrong attemps 
let wrongattemps = 0
// drow element
let TheDrow = document.querySelector(".hangman-drow")
// Set the choose status
// handle clicking on letters
document.addEventListener("click",(e)=>{
    let Thestatus = false;// default
    if(e.target.className === 'letters-box'){
        e.target.classList.add("clicked")
        // get clicked letter
        let theclickedletter = e.target.innerHTML.toLowerCase()
        // loop to the target word
        ArrayvalueWithSpaces.forEach((e,wordInex)=>{
            // check the clicked letter one of the chosen word letter
    if(theclickedletter == e){
        Thestatus = true
        // loop on all guess spans 
            GuessSpans.forEach((spn,spanindex)=>{
            if(spanindex === wordInex){
             spn.innerHTML = theclickedletter
             // set statues to correct 
             }
            })}
            
        })
           // outside loop
           //if the statues flase
           if(Thestatus !== true){
            // play fail sound*    
            document.getElementById("fail").play()
            wrongattemps++;     
            TheDrow.classList.add(`wrong-${wrongattemps}`)
            

            if(wrongattemps === 8){
            endGame()
            lettersDiv.classList.add("finished")
            }
           }else{
            document.getElementById("success").play()
           }
    }
   
})
console.log(TheDrow)

function endGame(){
    // create popUp
let myPopUp=document.createElement('div')
let textContent = document.createTextNode(`Game Over , the Word is :"${randomValueValue.toUpperCase()}"`)
myPopUp.appendChild(textContent)
myPopUp.className = 'PopUp'
document.body.appendChild(myPopUp)

}

const inputs = document.querySelectorAll(".controls input");
const root = document.documentElement
const body = document.querySelector("body")
 
 
 
//rabbit's features
const eyes = document.querySelectorAll(".eye")
const ears = document.querySelectorAll(".inner-ear")
const leftInnerEar = document.querySelector("#left-inner-ear")
const rightInnerEar = document.querySelector("#right-inner-ear")
const nose = document.querySelector('.nose')
const mouth = document.querySelector('.mouth')


function updateEars(feature){
    let count = 0
    const intervalID = setInterval(function() {
        if(count===6){  //break case
            leftInnerEar.style.marginLeft = ".2em" 
            rightInnerEar.style.marginLeft = ".5em" 
            ears.forEach(ear => root.style.setProperty (`--${feature.name}`, feature.value))
            clearInterval(intervalID)
        }else if(count === 0){  //provides a delay
            count++
        }else if(count%2 === 0){
            leftInnerEar.style.marginLeft = ".2em" 
            rightInnerEar.style.marginLeft = ".5em" 
            count++
        }else{
            leftInnerEar.style.marginLeft = ".5em" 
            rightInnerEar.style.marginLeft = ".2em" 
            count++
        }
    }, 150)
    
}

function updateEyes(feature){
    let count = 0
    const intervalID = setInterval(function(){
        if(count===4){      //break case
            eyes.forEach(eye => {
                root.style.setProperty (`--${feature.name}`, feature.value)
                eye.style.alignItems = "flex-end"
                eye.style.justifyContent = "space-evenly"
                clearInterval(intervalID)
            })
        }else if(count===0){
            count++
        }else if(count===1){
            eyes.forEach(eye => {
                eye.style.alignItems = "center"
                eye.style.justifyContent = "start"
            })
            count++
        }else if(count===2){
            eyes.forEach(eye=> {
                eye.style.alignItems = "flex-start"
                eye.style.justifyContent = "space-evenly"
            })
            count++
        }else if(count===3){
            eyes.forEach(eye=>{
                eye.style.alignItems = "center"
                eye.style.justifyContent = "end"
            })
            count++
        }
    },100)
}

function updateNose(feature){
    let count = 0
    const intervalID = setInterval(function(){
        if(count===4){      //break case
            nose.style.background = root.style.setProperty (`--${feature.name}`, feature.value)
            nose.style.marginTop = ".1em"
            mouth.style.marginTop = "0"
            clearInterval(intervalID)
        }else if(count===0){
            count++
        }else if(count===1){
            nose.style.marginTop = ".3em"
            mouth.style.marginTop = "-.2em"
            count++
        }else if(count===2){
            nose.style.marginTop = ".1em"
            mouth.style.marginTop = "0"
            count++
        }else if(count===3){
            nose.style.marginTop = ".3em"
            mouth.style.marginTop = "-.2em"
            count++
        }
    }, 180)
    
}



function handleUpdate(e) {
    const feature = e.target
    if(feature.name === "base"){
        updateEars(feature)
    }else if(feature.name === "base2"){
        updateEyes(feature)
    }else if(feature.name === "base3"){
        updateNose(feature)
    }
}

inputs.forEach(input => input.addEventListener("change", handleUpdate))

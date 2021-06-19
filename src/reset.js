export function reset(){
    const removePreviousP = document.querySelectorAll("p")
    removePreviousP.forEach((el)=>{
        el.style.display="none"
    })
    const removePreviousDiv = document.querySelectorAll(".match-video")
    removePreviousDiv.forEach((el)=>{
        el.style.display="none"
    })
    const removePreviousFollows = document.querySelectorAll(".follow")
         removePreviousFollows.forEach((el)=>{
                    el.style.display="none"
    })
     const removePreviousDate = document.querySelectorAll(".date")
         removePreviousDate.forEach((el)=>{
                    el.style.display="none"
    })
}
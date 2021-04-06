import {closePopup} from './closePopup.js'

export function settingMatch (el,submitTeam){
    let divVideo = document.createElement('div'); 
    let listOfMatches=document.createElement("p")
    const titleWrapper=document.querySelector(".div-match-title")
    const sidesWrapper=document.querySelector(".div-sides")
    const followWrapper=document.querySelector(".div-follow")
    const dateWrapper=document.querySelector(".div-date")
    const popup=document.querySelector(".popup")
    const closeButton=document.querySelector(".close-button") 
    const grayBackGround=document.querySelector(".gray-background")
    const videoError= document.querySelector(".video-error")
    titleWrapper.appendChild(listOfMatches)
    listOfMatches.textContent=el.title
    listOfMatches.classList.add("match-title")
     listOfMatches.addEventListener("click",(e)=>{
         submitTeam.style.pointerEvents="none"
         videoError.style.display="none"
         popup.classList.add("popup-active")
         grayBackGround.classList.add("gray-background-active")
        const removePreviousDiv = document.querySelectorAll(".match-video")
        removePreviousDiv.forEach((el)=>{
            el.style.display="none"
        })
        const removePreviousTeams = document.querySelectorAll(".sides")
        removePreviousTeams.forEach((el)=>{
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
         if(e.target.textContent===listOfMatches.textContent){
             const date =document.createElement("p")
             date.textContent=el.date.split("T")[0]
             dateWrapper.appendChild(date)
             date.classList.add("date")
             dateWrapper.appendChild(date)
             date.classList.add("date")
            const side1= document.createElement("p")
            const side2=document.createElement("p")
             side1.textContent=el.side1.name
             side2.textContent=el.side2.name
             sidesWrapper.appendChild(side1)
             sidesWrapper.appendChild(side2)
             side1.classList.add("sides")
             side2.classList.add("sides")
             const follow1= document.createElement("a")
            const follow2=document.createElement("a")
             follow1.textContent=`Follow ${el.side1.name}`
             follow2.textContent=`Follow ${el.side2.name}`
             follow1.href=el.side1.url
             follow2.href=el.side2.url
             follow1.target="_blank"
             follow2.target="_blank"
             followWrapper.appendChild(follow1)
             followWrapper.appendChild(follow2)
             follow1.classList.add("follow")
             follow2.classList.add("follow")
            el.videos.forEach(element =>{
                const apiVideo = element.embed;
                divVideo.innerHTML = apiVideo;   
                divVideo.classList.add("match-video")
               const videoWrapper=document.querySelector(".div-match-video")
               videoWrapper.appendChild(divVideo) 
                /*setTimeout( ()=>{
                    const innerDiv=htmlObject.children.item(0)
                const iFrame = innerDiv.children.item(0)  
               const innerDoc = iFrame.contentDocument || iFrame.contentWindow.document;
              console.log(innerDoc.body)
                },1000)               
               if(!iFrame.contentWindow.document.querySelector("iframe")){
                   videoError.style.display="block"
               }*/
            })
         }
     })
     closePopup(closeButton,grayBackGround,popup,submitTeam,divVideo)
}
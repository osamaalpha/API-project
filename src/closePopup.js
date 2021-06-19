export function closePopup (closeButton,grayBackGround,popup,submitTeam,divVideo){
    closeButton.addEventListener("click",()=>{
      divVideo.remove();
      submitTeam.style.pointerEvents="auto"
    popup.classList.remove("popup-active")
    grayBackGround.classList.remove("gray-background-active")
    })
    grayBackGround.addEventListener("click",()=>{
      divVideo.remove();
      submitTeam.style.pointerEvents="auto"
      popup.classList.remove("popup-active")
      grayBackGround.classList.remove("gray-background-active")
    })
    }
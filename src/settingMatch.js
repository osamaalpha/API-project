import { closePopup } from "./closePopup.js";
import { renderPopup } from "./renderPopup.js";

export function settingMatch(el, submitTeam) {
  let divVideo = document.createElement("div");
  let listOfMatches = document.createElement("p");
  const titleWrapper = document.querySelector(".div-match-title");
  const popup = document.querySelector(".popup");
  const closeButton = document.querySelector(".close-button");
  const grayBackGround = document.querySelector(".gray-background");
  const videoError = document.querySelector(".video-error");
  titleWrapper.appendChild(listOfMatches);
  listOfMatches.textContent = el.title;
  listOfMatches.classList.add("match-title");
  listOfMatches.addEventListener("click", (e) => {
    submitTeam.style.pointerEvents = "none";
    videoError.style.display = "none";
    popup.classList.add("popup-active");
    grayBackGround.classList.add("gray-background-active");
    const removePreviousDiv = document.querySelectorAll(".match-video");
    removePreviousDiv.forEach((el) => {
      el.style.display = "none";
    });
    const removePreviousTeams = document.querySelectorAll(".sides");
    removePreviousTeams.forEach((el) => {
      el.style.display = "none";
    });
    const removePreviousFollows = document.querySelectorAll(".follow");
    removePreviousFollows.forEach((el) => {
      el.style.display = "none";
    });
    const removePreviousDate = document.querySelectorAll(".date");
    removePreviousDate.forEach((el) => {
      el.style.display = "none";
    });
    renderPopup(e, listOfMatches, el, divVideo);
  });
  closePopup(closeButton, grayBackGround, popup, submitTeam, divVideo);
}

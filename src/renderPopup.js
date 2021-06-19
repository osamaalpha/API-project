export function renderPopup(e, listOfMatches, el, divVideo) {
  const sidesWrapper = document.querySelector(".div-sides");
  const followWrapper = document.querySelector(".div-follow");
  const dateWrapper = document.querySelector(".div-date");
  if (e.target.textContent === listOfMatches.textContent) {
    const date = document.createElement("p");
    date.textContent = el.date.split("T")[0];
    dateWrapper.appendChild(date);
    date.classList.add("date");
    dateWrapper.appendChild(date);
    date.classList.add("date");
    const side1 = document.createElement("p");
    const side2 = document.createElement("p");
    side1.textContent = el.side1.name;
    side2.textContent = el.side2.name;
    sidesWrapper.appendChild(side1);
    sidesWrapper.appendChild(side2);
    side1.classList.add("sides");
    side2.classList.add("sides");
    const follow1 = document.createElement("a");
    const follow2 = document.createElement("a");
    follow1.textContent = `Follow ${el.side1.name}`;
    follow2.textContent = `Follow ${el.side2.name}`;
    follow1.href = el.side1.url;
    follow2.href = el.side2.url;
    follow1.target = "_blank";
    follow2.target = "_blank";
    followWrapper.appendChild(follow1);
    followWrapper.appendChild(follow2);
    follow1.classList.add("follow");
    follow2.classList.add("follow");
    el.videos.forEach((element) => {
      const apiVideo = element.embed;
      divVideo.innerHTML = apiVideo;
      divVideo.classList.add("match-video");
      const videoWrapper = document.querySelector(".div-match-video");
      videoWrapper.appendChild(divVideo);
    });
  }
}

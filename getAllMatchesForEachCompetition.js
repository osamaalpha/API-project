import {settingMatch} from './settingMatch.js'
import {reset} from './reset.js'

export function getAllMatchesForEachCompetition (getData,select,searchTeamError,submitTeam){
    select.addEventListener("click",()=>{
        searchTeamError.style.display="none"
        reset()
        getData.forEach((el=>{
            if(!el){
                const matchError= document.querySelector(".match-error")
                matchError.style.display="block"
            }
            if(el.competition.name===select.value){
       settingMatch(el,submitTeam)
            }
        }
        ))
    })
}
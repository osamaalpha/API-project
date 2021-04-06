import {settingMatch} from './settingMatch.js'
import {reset} from './reset.js'

export function searchByTeam (getData,submitTeam,searchTeamError){
    const team= document.querySelector(".input-team")
    submitTeam.addEventListener("click",()=>{
        searchTeamError.style.display="none"
        if(team.value==="" || team.value===" "){
            searchTeamError.style.display="block"
        }
        reset () 
        getData.forEach(el =>{ 
            if(team.value.trim().toUpperCase()!==el.side1.name.toUpperCase() && team.value.trim().toUpperCase()!==el.side2.name.toUpperCase() ){
                searchTeamError.style.display="block"
            }
        })  
        getData.forEach(el =>{ 
             if(team.value.trim().toUpperCase()===el.side1.name.toUpperCase() || team.value.trim().toUpperCase()===el.side2.name.toUpperCase() ){
                searchTeamError.style.display="none"
                settingMatch(el,submitTeam)
             }
         })
    })
}
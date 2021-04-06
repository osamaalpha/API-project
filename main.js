import {competition} from './competition.js'
import {getAllMatchesForEachCompetition} from './getAllMatchesForEachCompetition.js'
import {searchByTeam} from './searchByTeam.js'



async function fetchApi (){
    try{
    const searchTeamError = document.querySelector(".search-team-error")
    const submitTeam = document.querySelector(".submit-team")
    const fetching = await fetch('https://www.scorebat.com/video-api/v1/')
    const data = await fetching.json()
    const getData = await data
    const select = document.createElement("select")
    const selectWrapper= document.querySelector(".div-select-competition")
    select.classList.add("select-competition")
    selectWrapper.appendChild(select)
    competition(getData,select)
    getAllMatchesForEachCompetition(getData,select,searchTeamError,submitTeam)
    searchByTeam(getData,submitTeam,searchTeamError)
    }
    catch(error){
     const apiError = document.querySelector(".api-error")
     apiError.style.display="none"
     const apiErrorAlert = document.querySelector(".api-error-alert")
     apiErrorAlert.style.display="block"
     console.log(error)
    }  
}
 
fetchApi()

        /*async function fetchVideoUrl (iFrame){
            try{
            const getUrl= await fetch(iFrame.src)
             const innerDiv=htmlObject.children.item(0)
             const iFrame = innerDiv.children.item(0)
            const dataVideo = await getUrl.json()
            const showingData = await dataVideo
            console.log(showingData)
            return dataVideo
            }
            catch (error){
                console.log(error)
            }
        }*/
        



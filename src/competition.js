export function competition (getData,select){
    const arrayOfAllCompetitions = []
    getData.forEach(element => {
    arrayOfAllCompetitions.push(element.competition.name) 
    });
    const removingDuplicatedCompetitions =  arrayOfAllCompetitions.filter(function(item, pos) {
        return arrayOfAllCompetitions.indexOf(item) == pos;
    })
    removingDuplicatedCompetitions.forEach(el =>{
        const option = document.createElement("option")
        option.textContent=el
        option.value=el
        select.appendChild(option)
    })
}
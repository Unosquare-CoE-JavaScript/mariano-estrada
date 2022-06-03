//Comparaison practice
const dayStart = "07:30"
const dayEnd = "17:45"

function scheduleMeeting(startTime,durationMinutes) {
    //Start
    let dayStartHour = Number(dayStart.substring(0,2)) 
    let dayStartMinutes = Number(dayStart.substring(3,5))
    
    //End
    let dayEndHour = Number(dayEnd.substring(0,2))
    let dayEndMinutes = Number(dayEnd.substring(3,5))
    
    //time start
    let startHour = Number(startTime.substring(0,2))
    let startMinutes = Number(startTime.substring(3,5))
    //Minutes
    let minutes = durationMinutes

    let spentMinutes = startMinutes + minutes
    if(spentMinutes >= 60){
        startHour +=  1
        spentMinutes = spentMinutes - 60
    }

    if(startHour >= dayStartHour && startHour < dayEndHour){
        console.log(true)
    } else {
        console.log(false)
    }

   
    
}

scheduleMeeting("18:00", 15)


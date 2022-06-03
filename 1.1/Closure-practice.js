//Closure Practice
function range(start, end){
    start = Number(start)

    if(end == undefined){
        return function getEnd(end){
            return getRange(start,end)
        }
    } else {
        end = Number(end)
        return getRange(start, end)
    }

    function getRange(start, end){
        let array = []
        for(let i = start; i<=end; i++){
            array.push(i)
        }
        console.log(array)
    }
}

range(3)
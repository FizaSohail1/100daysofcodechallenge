//  Average Score Calculator: Write a simple program that can take lots of scores and find their average.


function totalAverage (...scores:number[]):number{
    let total = scores.reduce((one,two)=> one + two,0)
    return total/scores.length
}
console.log(totalAverage(34,35,66));
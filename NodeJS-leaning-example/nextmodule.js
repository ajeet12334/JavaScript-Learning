console.log("Next module file")
let fixedVal = 20
function calculate(a,b){
    const sum = fixedVal + a + b;
    console.log("total is =",sum)
}

module.exports = {calculate, fixedVal};
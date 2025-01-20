const person = {
    name : "Ajeet",
    surName : "Bhati",
}

function printPerson(locality, district) {
    console.log(this.name + " " + this.surName + " from: " + locality +", "+ district)
}

const print = printPerson.bind(person, "Madhuban")
print("Jodhpur")

Function.prototype.myBind = function(...arg){
    const caller = this
    const argument = arg[0]
    const restArgument = arg.slice(1)
    return function(...param) {
        caller.apply(argument, [...restArgument, ...param])
    }
}

const myPrint = printPerson.myBind(person, "Madhuban")
myPrint("Jodhpur")
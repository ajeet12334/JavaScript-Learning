const arr = [1,2,3,4,5]
const arr1 = arr.reduce((acc, curr, index, arr) => {
    return acc+curr
}, 0)
console.log("Using default reduce arr1", arr1)

Array.prototype.myReduce = function(cb, initialValue){
    let acc = initialValue
    for (let i = 0; i < this.length; i++) {
     acc = acc ? cb(acc, this[i], i, this) : this[i]   
        
    }
    
    return acc;
}

const arr2 = arr.reduce((acc, curr, index, arr) => {
    return acc+curr
}, 0)

console.log("Using custom filter arr2", arr2)
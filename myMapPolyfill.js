const arr = [1,2,3,4,5]
const arr1 = arr.map((item, index, arr) => {
    return item * 2
})
console.log("Using default map arr1", arr1)

Array.prototype.myMap = function(cb){
    const temp = []
    for(let i=0; i< this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

const arr2 = arr.myMap((item, index, arr) => {
    return item * 2
})

console.log("Using default map arr2", arr2)
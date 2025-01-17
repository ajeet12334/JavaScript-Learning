const arr = [1,2,3,4,5]
const arr1 = arr.filter((item, index, arr) => {
    return item % 2 ===0
})
console.log("Using default filter arr1", arr1)

Array.prototype.myFilter = function(cb){
    const temp = []
    for(let i=0; i< this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i])
        }
    }
    return temp;
}

const arr2 = arr.myFilter((item, index, arr) => {
    return item % 2 === 0
})

console.log("Using custom filter arr2", arr2)
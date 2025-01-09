let count = 0
//Api call or expensive call put here : business logic
const callApi = () => {
  console.log("getting data...",count++);
}

//Custom debounce functionality
const debounce = (func, limit) => {
  let timer;
  return function(arguments) {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, limit);
  }
}

//function getDataToShow expose for outside world
const getDataToShow = debounce(callApi, 300)






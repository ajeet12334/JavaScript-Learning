const throttle = (func, limit) => {
  let flag = true;
  return function (arguments) {
    let context = this;
    let args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttle(expensive, 1000);

function expensive() {
  //do api call here
  console.log("API call");
}

// Define the function to handle button click
function onButtonClick() {
  // alert('Button was clicked!');
  betterExpensive();
}

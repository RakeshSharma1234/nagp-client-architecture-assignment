/// <reference lib="webworker" />

addEventListener('message', ({data}) => {
  // Perform heavy computations
  const result = factorialCalculator(data);
  postMessage(result);
});

function factorialCalculator(num:number):number {
  // Your heavy computation logic here
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorialCalculator(num - 1));
  }
}
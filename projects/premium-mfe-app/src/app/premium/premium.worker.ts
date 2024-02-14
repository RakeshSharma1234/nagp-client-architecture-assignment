/// <reference lib="webworker" />

addEventListener('message', ({data}) => {
  const result:Number[]=[];
  // Perform heavy computations
  for (let i = 1; i < data; i++) {
    let fact = factorialCalculator(i);
    result.push(fact);
  }
  postMessage(result);
});

function factorialCalculator(num:number):number {
  // Your heavy computation logic here
  let factorial = 1;

  for(let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
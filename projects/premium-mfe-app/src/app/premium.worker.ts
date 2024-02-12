/// <reference lib="webworker" />

addEventListener('message', ({data}) => {

  // Perform heavy computations
  const result = performHeavyComputation(data);
  const response = `worker response to ${result}`;
  postMessage(response);
});

function performHeavyComputation(data:number) {
  // Your heavy computation logic here
  return data * 2;
}

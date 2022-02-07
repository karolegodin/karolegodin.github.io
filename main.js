if (window.Worker) {
	const myWorker = new Worker("worker.js");
  
  
}
else{
  console.log('Your browser doesn\'t support web workers.')
}

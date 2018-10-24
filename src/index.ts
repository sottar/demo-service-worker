console.log('master');

document.getElementById('button').addEventListener('click', () => {
  fetch('/test');
});

navigator.serviceWorker.register('service-worker.js').then(registration => {
  console.log(registration);
});

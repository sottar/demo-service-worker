console.log('master');

navigator.serviceWorker.register('service-worker.js').then(() => {});

document.getElementById('button').addEventListener('click', () => {
  fetch('/test');
});
document.getElementById('button2').addEventListener('click', () => {
  fetch('/test2');
});

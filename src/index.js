console.log('master');

navigator.serviceWorker
  .register('service-worker.js')
  .then(registration => {
    registration.addEventListener('updatefound', e => {
      console.info('update', e);
    });
    return navigator.serviceWorker.ready;
  })
  .then(registration => {
    console.log('jhge');
    setInterval(() => {
      console.log('update()');
      registration.update();
    }, 1000);
  });

document.getElementById('button').addEventListener('click', () => {
  fetch('/test');
});
document.getElementById('button2').addEventListener('click', () => {
  fetch('/test2');
});

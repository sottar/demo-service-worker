console.log('master');

navigator.serviceWorker
  .register('service-worker.js')
  .then(registration => {
    return navigator.serviceWorker.ready;
  })
  .then(registration => {
    document.getElementById('button').addEventListener('click', () => {
      registration.sync
        .register('sync-data')
        .then(() => {
          console.log('sync registerd');
        })
        .catch(console.error.bind(console));
    });
  })
  .catch(console.error.bind(console));

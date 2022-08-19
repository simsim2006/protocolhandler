(async() => {
      console.log('test');
      
      document.querySelector('button').addEventListener('click', () => {
        console.log('clicked');
        navigator.registerProtocolHandler('sms', 'https://simsim2006.github.io/protocolhandler/?sms=%s', 'SMS APP');
      });
})();
    

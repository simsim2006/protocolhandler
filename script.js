(async() => {
      console.log('test');
      
      document.querySelector('button').addEventListener('click', () => {
        console.log('clicked');
        navigator.registerProtocolHandler('web+cooiliuyt', 'https://simsim2006.github.io/protocolhandler/?burger=%s');
      });
})();
    

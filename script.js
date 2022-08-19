(async() => {
      console.log('test');
      
      document.querySelector('button').addEventListener('click', () => {
        console.log('clicked');
        navigator.registerProtocolHandler('web+cooiliuyt', './?burger=%s');
      });
})();
    

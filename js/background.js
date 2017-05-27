chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log('recv '+ message);
    if(message == 'addLink'){
        sendResponse("bg");
    }
    console.log('x');
});

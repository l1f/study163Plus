chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log('recv '+ message);
    if(message == 'addLink'){
        sendResponse('Hello from background.');
    }
    console.log('x');
});

$('body').append($('<div class="ui sidebar inverted vertical menu">'));
$('.ui.sidebar')
  .sidebar('toggle')
;

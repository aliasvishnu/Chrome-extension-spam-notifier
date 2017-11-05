chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    alert(message);
    // var response = "Hello to you too";
    // sendResponse(response);
});

const webList = [];

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addWebsite').addEventListener('click', addSaveAndDisplayUrl);
  redirectToCodesmith();
});





function addSaveAndDisplayUrl() {
  //take user input, add url to webList array
  const inputUrl = document.getElementById("websiteURL");
  webList.push(inputUrl.value);
  //display url on popup
  document.getElementById('displayList').innerHTML += ('<li>'+ inputUrl.value +'</li>');
  //save webList to chrome
  chrome.storage.local.set({"urlList" : webList}, function() {
    console.log("webList saved");
    console.log({"urlList" : webList});
  })
  //clear input box
  inputUrl.value = '';
}

function redirectToCodesmith() {
  //add event listener for crhom,tabs.query, callback is redirect web page
  chrome.tabs.query({currentWindow: true,active: true}, function(tabs) {
    //obtain current tab's url
    let currentUrl = tabs[0].url;
    console.log(currentUrl);
    //get webList from chrome
    chrome.storage.local.get({"urlList" : webList}, function() {
      console.log("got webList from chrome");
      console.log(currentUrl);
      //if url is in webList
      if (webList.includes(currentUrl)) {
        //redirect webpage to codesmith
        tabs[0].location.replace("https://www.codesmith.io/faq#tuition-financing");
      }
        
    })  
    
  });
}
//const webList = [];
function createBlockList() {
  const input = document.getElementById("websiteURL")
  //webList.push(input.value + '/*');

  chrome.storage.local.set({input: document.location}, function() {
    //   console.log('Value is set to ' + value);
    });

  document.getElementById('displayList').innerHTML += ('<li>'+ input.value +'</li>');
  input.value = '';
  console.log(displayList);
}




document.getElementById('addWebsite').addEventListener('click', createBlockList);




// chrome.storage.local.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });

document.addEventListener("DOMContentLoaded", function() {
  let currentWeb = document.location;
  console.log("function invoked");
  //if chrome.storage.local contains currentWeb run the location replace .get(input, function)
  if (chrome.storage.local.includes(currentWeb)) {
   currentWeb = location.replace("https://www.codesmith.io/faq#tuition-financing");
    return currentWeb;
  }
});


//below: rule variable to note when a banned site has been triggered, with actions
// var bannedSiteRule = {
// conditions: [

//   //need to make sure that 'RequestMatcher' actually matches what we want it to
//   new chrome.declarativeWebRequest.RequestMatcher({
//     //must find a way to make this url suffix pull from the weblist variable above
//      url: { hostSuffix: 'example.com' } })

//     //lines below would be how to add another url request; comma separates them after }})
//     //  ,
//     //  new chrome.declarativeWebRequest.RequestMatcher({
//     //  url: { hostSuffix: 'foobar.com' } })
//  ],

//   actions: [
//     //need to have below action redirect the request to a different URL (code in line 1)


//     //may still need to have cancel request?
// new chrome.declarativeWebRequest.CancelRequest()
//   ]
//  };

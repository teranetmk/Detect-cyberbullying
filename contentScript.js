(() => {

  const detectCyberbullying = () => {
    const CyberbullyingData = ["the", "a", "i", "is", "are", "good", "on", "in", "of"];
    const regexFromMyArray = new RegExp(CyberbullyingData.map(match=> `\\b${match}\\b`).join("|"), 'gi');
    const comments = document.querySelectorAll('[data-testid="tweetText"]');
    comments.forEach(comment => comment.innerHTML =  comment.textContent.replace(regexFromMyArray, text => `<span style="filter: blur(3px);">${text}</span>`));
  }

  chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
      const { type } = obj;
      detectCyberbullying();
      sendResponse({
        received: true
      });
  });

//   detectCyberbullying();


// document.addEventListener("load", function(){
//   console.log('DOM fully loaded and parsed');
// });

// window.addEventListener("scroll", function(e) {
//   detectCyberbullying();
// });

})();

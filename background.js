chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.url && tab.url.includes("twitter.com")) {
    console.log("onUpdated")
    chrome.tabs.sendMessage(tabId, {
      type: "update",
    });
  }
});
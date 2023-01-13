import { getActiveTabURL } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();

  if (!activeTab.url.includes("twitter.com")) {
    const container = document.querySelector(".container");
    container.innerHTML = '<div class="title">Extension is disabled.</div>';
  } else {
    // chrome.tabs.sendMessage(activeTab.id, {
    //   type: "created",
    // });
  }
});


export async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });
  
    return tabs[0];
}

export const detectCyberbullying = () => {
    const CyberbullyingData = ["the", "a"];
    const regexFromMyArray = new RegExp(CyberbullyingData.map(match=> `\\b${match}\\b`).join("|"), 'gi');
    console.log(regexFromMyArray);
    const comments = document.querySelectorAll('[data-testid="tweetText"]');
    comments.forEach(comment => comment.innerHTML =  comment.textContent.replace(regexFromMyArray, text => `<span style="filter: blur(3px);">${text}</span>`));
}

// export const CyberbullyingData = ["the", "a"];

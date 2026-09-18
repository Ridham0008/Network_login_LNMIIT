document.getElementById('fillForm').addEventListener('click', async function(){
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['myscript.js']
  });
});

document.getElementById('fillForm').click();
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        // Source: https://stackoverflow.com/questions/31568721/chrome-extension-to-redirect-to-url-with-parameter
        return {
            redirectUrl: details.url + //'?oldIssueView=true'
                (details.url.indexOf("?") == -1 ? "?" : "") +
                (details.url.indexOf("&oldIssueView=true") == -1 ? "&oldIssueView=true" : "")
        };
    },
    {
        urls: ["*://blacklinegps.atlassian.net/browse/*"],
        types: ["main_frame"]
    },
    ["blocking"]
);

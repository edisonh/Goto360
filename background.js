
chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		var url = info.url.replace('ajax.googleapis.com', 'ajax.useso.com');
		url = url.replace('fonts.googleapis.com', 'fonts.useso.com');
		// 360 cnd proxy does not support https
		if (url.indexOf('//') == 0) {
			url = 'http:' + url;
		}
		if (url.indexOf('https://') == 0) {
			url = url.replace('https://', 'http://');
		}
		return {redirectUrl: url};
	},
	{ urls: [ 
		"http://ajax.googleapis.com/*",
		"https://ajax.googleapis.com/*",
		"http://fonts.googleapis.com/*",
		"https://fonts.googleapis.com/*"] },
	["blocking"]);
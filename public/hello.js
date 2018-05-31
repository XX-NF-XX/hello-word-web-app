
var headerTitle = document.getElementById("header_title");
var headerDefaultTitle = headerTitle.innerText;
var userName = document.getElementById("user_name");
userName.onchange = function () { updateHeader() };

function updateHeader() {
	if (isValid(userName.value)) {
		headerTitle.innerText = "Hello, " + userName.value + ". " + headerDefaultTitle;
	}
	else {
		headerTitle.innerText = headerDefaultTitle;
	}
}

function isValid(string) {
	return string.replace(/^\s+/g, '').length;
}

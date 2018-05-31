
var headerTitle = document.getElementById("headerTitle");
var headerDefaultTitleText = headerTitle.innerText;
var userName = document.getElementById("userName");
userName.onchange = updateHeader;

getComments();

function updateHeader() {
	if (isValid(userName.value)) {
		headerTitle.innerText = "Hello, " + userName.value + ". " + headerDefaultTitleText;
	}
	else {
		headerTitle.innerText = headerDefaultTitleText;
	}
}

function isValid(string) {
	return string.replace(/^\s+/g, '').length;
}

function getComments() {
	$.get("/comments", function (data) {
		if (!data) {
			console.log("No data received");
		} else {
			console.log("Data received");
			showComments(data);
		}
	});
}

function showComments(comments) {
	var commentsSection = document.getElementById("comments");
	for (var i = 0; i < comments.length; i++) {

		var section = document.createElement("section");
		section.className += "comment";

		var commentAuthor = document.createElement("h3");
		commentAuthor.innerText = comments[i].name;
		section.appendChild(commentAuthor);

		var comment = document.createElement("p");
		comment.innerText = comments[i].comment;
		section.appendChild(comment);

		commentsSection.appendChild(section);
	}
}

'use strict';
$(function onReady() {
	var url = (location.href).split('/').pop();
console.log(url)
$('#navbar-menu-topbar li').each(function cb(i, element) {
	var href = $(element).children('a').attr('href').split('/').pop();
	$(element).removeClass('active');

	if (url === href) {
		$(element).addClass('active');
	}
	console.log(href)
})
});
function openWin() {
    window.open("https://www.w3schools.com");
}

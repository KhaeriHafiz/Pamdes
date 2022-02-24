(function () {
	"use strict";

	var treeviewMenu = $('.app-menu');

	// Toggle Sidebar
	$('[data-toggle="sidebar"]').click(function (event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	// Activate sidebar treeview toggle
	$("[data-toggle='treeview']").click(function (event) {
		event.preventDefault();
		if (!$(this).parent().hasClass('is-expanded')) {
			treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	// Set initial active toggle
	$("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

})();

// dark theme support
// function myFunction() {
// 	var element = document.body;
// 	element.classList.toggle("dark-mode");
// }

//asd

function dark() {
	body.className = "dark-mode";
};

$(function () {
	var bgColor = document.cookie.replace(/(?:(?:^|.*;\s*)bgColor\s*\=\s*([^;]*).*$)|^.*$/, "$1");

	var button = $('input[type=button].changeBg');
	button.on('click', function (event) {
		event.preventDefault();

		eval($(this).val().toLowerCase() + "();");

		button.not($(this)).removeAttr('disabled');
		if ($(this).val() != "Reset") {
			$(this).attr('disabled', '');
			document.cookie = "bgColor=" + $(this).val();
		}
	});

	if (bgColor.length > 0) {
		eval(bgColor.toLowerCase() + '()');
		$.each($('input[type="button"].changeBg'), function () {
			if ($(this).val() == bgColor)
				$(this).attr('disabled', 'disabled');
		});
	}
});
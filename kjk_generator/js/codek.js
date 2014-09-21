$(document).ready(function () {
	$("#rg-max").slider('value', 36);

	var slider_min = $("#rg-min").slider();
	var slider_max = $("#rg-max").slider();

	var slider_len = $("#rg-len").slider().on('slide', function () {
		$("#len").val(slider_len.slider('getValue'));
	});
});

function _map(o, orgmin, orgmax, newmin, newmax) {
	return newmin + (newmax-newmin)*((o-orgmin) / (orgmax-orgmin));
}

function rand_(min, max) {
  return Math.random() * (max - min) + min;
}

var rstr = "";
function g_(len, min, max, cur, callback) {
	if (cur > len) {
		callback();
		return;
	}
	cur++;
	var t = rand_(min, max)
	rstr += String.fromCharCode(t);
	$("#prog").css("width", (cur/(1.0*len)*100)+"%");
	setTimeout(function () { g_(len, min, max, cur, callback); }, 0);
}

function g(l, min, max, callback) {
	rstr = '';
	$("#prog").css("width", "0%");
	g_(l, min, max, 0, callback);
	return rstr;
}

function generate() {
	var _len = $("#len").val();
	var len = parseInt(_len);
	var min = $("#rg-min").slider('getValue'), max = $("#rg-max").slider('getValue');
	g(len, min, max, function () {
		$("#result").val(rstr);

		$("#prog").css("-webkit-transition", "width 1s ease");
		$("#prog").css("-o-transition", "width 1s ease");
		$("#prog").css("transition", "width 1s ease");

		$("#prog").css("width", "100%");

		$("#prog").css("width", "0%");

		setTimeout(function() {
			$("#prog").css("-webkit-transition", "width 0");
			$("#prog").css("-o-transition", "width 0");
			$("#prog").css("transition", "width 0");
		}, 1000);

	});
}
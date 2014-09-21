$(document).ready(function () {
	$("#rg-max").slider('value', 36);

	var slider_min = $("#rg-min").slider();
	var slider_max = $("#rg-max").slider();
});

function _map(o, orgmin, orgmax, newmin, newmax) {
	return newmin + (newmax-newmin)*((o-orgmin) / (orgmax-orgmin));
}

function rand_(min, max) {
  return Math.random() * (max - min) + min;
}

function g(l, min, max) {
	var ret = '';
	for (var i = 0; i < l; i++)
		ret += String.fromCharCode(rand_(min, max));

	return ret;
}

function generate() {
	var _len = $("#len").val();
	var len = parseInt(_len);
	var min = $("#rg-min").slider('getValue'), max = $("#rg-max").slider('getValue');
	alert(min);
	alert(max);
	$("#result").val(g(len, min, max));
}
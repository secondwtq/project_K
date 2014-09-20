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
	var min = $("#rg-min").val(), max = $("#rg-max").val();
	$("#result").val(g(len, min, max));
}
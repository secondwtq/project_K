/* global Fallback */
/* global Lottery */

Lottery = { };

Fallback = { };

Fallback.firstElementChild = function (ele) {
	var current = ele.firstChild;

	while (current !== null) {
		if (current.nodeType === 1) {
			return current;
		}
		current = current.nextSibling;
	}

	return null;
};

Fallback.lastElementChild = function (ele) {
	var current = ele.firstChild;

	var last_valid = null;

	while (current !== null) {
		if (current.nodeType === 1) {
			last_valid = current;
		}
		current = current.nextSibling;
	}

	return last_valid;
};

Lottery.$current = [ '基础', '压力', '靠谱' ];

Lottery.add_to_list = function () {
	var content = document.getElementById('input-name').value;

	if (content.length == 0) {
		alert('Value cannot be empty!');
		return;
	}

	this.$current = this.$current.concat([ content ]);

	this.add_to_dom(this.$current.length - 1, content);
	this.update_nothing(this.$current);
	document.getElementById('input-name').value = '';
	document.getElementById('input-name').focus();
};

Lottery.clear_list = function () {
	this.$current = [ ];
	this.refresh_with(this.$current);
};

Lottery.test_click = function () {
	this.refresh_with(['a', 'b', 'c', 'd']);
};

Lottery.clear_dom = function (callback) {
	var liste = document.getElementById('objects');

	var func_del = function () {
		if (Fallback.firstElementChild(liste) !== null) {
			liste.removeChild(Fallback.lastElementChild(liste));
			setTimeout(func_del, 100);
		} else {
			if (callback !== undefined) callback();
		}
	};

	func_del();
};

Lottery.update_nothing = function (src) {
	var nothing = document.getElementById('no-object');

	if (src.length === 0) {
		nothing.className = '';
	} else {
		nothing.className = 'l-hidden';
	}
};

Lottery.add_to_dom = function (idx, src) {
	var liste = document.getElementById('objects');

	var objecte = document.createElement('li');
	objecte.className = 'object-item';
	liste.appendChild(objecte);

	var div_id = document.createElement('span');
	div_id.className = 'object-id';
	div_id.innerHTML = idx.toString();
	objecte.appendChild(div_id);

	var div_text = document.createElement('span');
	div_text.innerHTML = src.toString();
	objecte.appendChild(div_text);

	var div_del = document.createElement('span');
	div_del.className = 'l-fa-icon l-fa-ibutton del-button';
	div_del.innerHTML = '&#xf00d;';

	// closures are awesome!
	var that = this;
	div_del.onclick = function () {
		liste.removeChild(objecte);
		that.$current.splice(idx, 1);
	};

	objecte.appendChild(div_del);
};

Lottery.refresh_with = function (src, callback) {
	var i = 0;

	var that = this;
	var func_add = function () {
		if (i < src.length) {
			that.add_to_dom(i, src[i]);

			i++;
			setTimeout(func_add, 100);
		} else {
			if (callback !== undefined) callback();
			that.update_nothing(src);
		}
	};

	this.clear_dom(function () {
		func_add();
	});

};

Lottery.on_load = function () {
	this.update_nothing(this.$current);
	this.refresh_with(this.$current);
};

Lottery.shuffle = function (src) {
	var d = { };
	var res = [ ];
	var i;

	var len = src.length;

	while (res.length < len) {
		i = Math.ceil(Math.random() * len);

		if (d[i] == undefined) {
			d[i] = true;
			res.push(src[i-1]);
		}
	}

	return res;
};

Lottery.save_onclick = function () {
	var content = this.$current.join('\r\n');
	var element = document.getElementById('download-placeholder');
	this.save_as_text(element, content, 'shuffled.txt').click();
}

Lottery.save_as_text = function (element, src, filename) {
	// not usable
	if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
		alert('...');
		var f = new ActiveXObject("Scripting.FileSystemObject");
		var r = f.CreateTextFile("result.txt", true);
		r.WriteLine(src);
		r.Close();
	} else {
		element.download = filename;
		element.href = "data:text/plain," + encodeURI(src);
		return element;
	}
};

Lottery.add_keyevent = function (event) {
	if (event.keyCode == 13) {
		document.getElementById('btn-add').click();
	}
};

Lottery.on_load();
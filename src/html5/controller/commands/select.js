var Command = {};
(function() {
	/**
		还没修改成双向绑定
	*/
	this.before = function(data, dom, controller) {
		var numAttr = dom.latte("select");
		if(numAttr) {
			data.set(numAttr+ "-click", function(e, view) {
				console.log(numAttr, view.text())
				data.set(numAttr, view.text());
				data.set(numAttr + "-show", false);
			});
			data.set(numAttr+"-open", function() {
				data.set(numAttr + "-show", !data.get(numAttr + "-show"))
			});
		}
	}
}).call(module.exports);
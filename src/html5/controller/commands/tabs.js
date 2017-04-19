var Command = {};
(function() {
	/**
		还没修改成双向绑定
	*/
	this.before = function(data, dom, controller) {
		var tabsAttr = dom.latte("tabs");
		if(tabsAttr) {
			var v ;
			data.set(tabsAttr+ "-click", function(e, view) {
				data.set(tabsAttr, view.latte("tab"));
				if(v) { v.classed("is-active", 0);}
				v = view;
				v.classed("is-active", 1);
			});
		}
	}
}).call(module.exports);
(function() {
	/**
		还没修改成双向绑定
	*/
	var View = require("../../view/view.js");
	this.before = function(data, dom, controller) {
		var checkboxAttr = dom.latte("checkbox");
		if(checkboxAttr) {

			var d = function(e, view) {
				
				var old = view.classed("is-checked");
				if(old) {					
					var index = View.indexOf(dom.selectViews, view);
					if(index == -1) {
						throw new Error("must have bug");
					}
					dom.selectViews.splice(index, 1);
				}else{
					dom.selectViews.push(view);
				}
				view.classed("is-checked", !old);
				data.set(checkboxAttr, dom.selectViews.map(function(o) {
					return o.attr("value");
				}));
				console.log(data.get(checkboxAttr));
			};
			dom.selectViews = [];
			data.set(checkboxAttr + "-click", d);
			var views = [];
			if(!views.length) {
				var value = data.get(checkboxAttr) ;
				if(!value) {
					value = dom.attr("select");
					if(value) {
						value = value.split(" ");
					}
				}
				if(value) {
					for(var i = 0, len = dom.children.length; i< len;i++) {
						var v = dom.getChildren(i).getChildren(0);
						if(values.indexOf(v.attr("value")) != -1) {
							views.push(v);
						}
					}
				}
				
			}
			if(!views.length) {
				var value = dom.attr("selectIndexs");
				if(value) {
					var indexs = value.split(" ");
					indexs.map(function(i) {
						views.push(dom.getChildren(i).getChildren(0));
					});
				}
			}
			if(views.length) {
				for(var i = 0, len = views.length; i < len; i++) {
					d(null, dom.getChildren(i).getChildren(0));
				}
			}
			
		}
	}
}).call(module.exports);
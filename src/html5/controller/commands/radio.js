(function() {
	/**
		还没修改成双向绑定
	*/
	this.before = function(data, dom, controller) {
		var radioAttr = dom.latte("radio");
		if(radioAttr) {
			var d = function(e, view) {
				var old = dom.selectView;
				if(old ) {
					old.classed("is-checked", false);
				}
				
				var old = view.classed("is-checked");
				if(old) {					
					data.set(radioAttr, "");
				}else{
					data.set(radioAttr, view.attr("value"));
				}
				view.classed("is-checked", !old);
				dom.selectView = view;
			};
			data.set(radioAttr + "-click", d);
			var view ;
			if(!view) {
				var value = data.get(radioAttr) || dom.attr("select");
				if(value) {
					for(var i = 0, len = dom.children.length; i< len;i++) {
						var v = dom.getChildren(i).getChildren(0);
						if(v.attr("value") == value) {
							view = v;
							break;
						}
					}
				}
				
			}
			if(!view ) {
				var value = dom.attr("selectIndex");
				if(value) {
					view = dom.getChildren(value).getChildren(0);
				}
			}
			if(!view) {
				view =  dom.getChildren(index).getChildren(0);
			}
			d(null, view);
		}
	}
}).call(module.exports);
(function() {
	this.after = function(data, dom, controller) {
		var showValue = dom.latte("dialog");
		if(showValue) {
			var doChange = function(v) {
				console.log(data, v);
				if(v) {
					dom.style("display", "");
					dom.classed("in", 1);
				}else{
					dom.classed("in", 0);
					dom.style("display", "none");
				}
			};
			controller.bind("data", showValue, function(value, oldValue) {
				doChange(value);
			});
			doChange(data.get(showValue));
		}
	}
}).call(module.exports);
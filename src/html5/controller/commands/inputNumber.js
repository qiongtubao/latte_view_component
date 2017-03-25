var Command = {};
(function() {
	this.before = function(data, dom, controller) {
		var numAttr = dom.latte("inputNumber");
		if(numAttr) {
			var max = dom.attr("max") == null ?   99999999 : dom.attr("max") - 0;
			var min = dom.attr("min") == null ?  -99999999 : dom.attr("min") - 0;
			var value = data.get(numAttr);
			if(value == null) { data.set(numAttr, 0); }
			data.set(numAttr + "-plus", function() {
				var v = data.get(numAttr) + 1;
				console.log(v, max)
				if(v <= max) {
					data.set(numAttr, v);
				} 
			});
			data.set(numAttr + "-minus", function() {
				var v = data.get(numAttr) - 1;
				console.log(v)
				if(v >= min) {
					data.set(numAttr, v);
				} 
			});
		}
	}
}).call(module.exports);
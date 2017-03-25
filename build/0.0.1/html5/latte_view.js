
(function(define) {'use strict'
define("latte_view/controller/commands/inputNumber.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
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
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("latte_view/controller/commands/select.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
var Command = {};
(function() {
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
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("latte_view/view/tags/inputNumber.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
(function() {
	var Lade = require("../../lib/lade/index.js");
	this.init = function(lade) {
		var attribute = lade.attr();
		var object = Lade.create({
			tag: "latte",
			glasss: ["latte-input-number"],
			latte: {
				"inputNumber": lade.text
			},
			attribute: attribute,
			childrens:[{
				tag: "latte",
				glasss: ["latte-input-number-decrease"],
				childrens: [{
					tag: "label",
					glasss: ["latte-icon-minus"],	
					latte: {
						click: lade.text +"-minus"
					}
					
				}]
			},{
				tag:"latte",
				glasss: ["latte-input-number-increase"],
				childrens: [{
					tag: "label",
					glasss: ["latte-icon-plus"],	
					latte: {
						click: lade.text + "-plus"
					}
				}]
			},{
				tag: "input",
				glasss:["latte-input-inner"],
				latte: {
					duplex: lade.text
				}
			}]
		});
		return object;
		
	}
}).call(module.exports);
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("latte_view/view/tags/select.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
(function() {
	var Lade = require("../../lib/lade/index.js");
	this.init = function(lade) {
		var attribute = lade.attr();
		var lists = lade.childrens.map(function(c) {
			return {
				tag: "latte",
				glasss: ["latte-select-dropdown-item", "li"],
				latte: {
					click: lade.text + "-click"
				},
				childrens:[c]
			}
		});
		var object = Lade.create({
			tag: "latte",
			glasss: ["latte-select"],
			latte: {
				"select": lade.text
			},
			attribute: attribute,
			childrens:[{
				tag: "latte",
				glasss: ["latte-input"],
				childrens: [{
					tag: "latte",
					glasss:["latte-input-icon", "latte-icon-caret-top"],
					latte: {
						click: lade.text+"-open"
					}
					
				},{
					tag: "input",
					glasss: ["latte-input-inner"],
					latte: {
						duplex: lade.text
					},
					childrens: [{
						tag: "latte",
						attribute: {
							pseudo: "-webkit-input-placeholder"
						},
						
						glasss:[""],
						text: "请选择"
					}]
				}]
			}, {
				tag: "latte",
				glasss: ["latte-select-dropdown-wrap","latte-scrollbar-wrap"],
				latte: {
					show: lade.text + "-show"
				},
				style: {
					zIndex: 1
				},
				childrens: [{
					tag: "latte",
					glasss: ["latte-scrollbar-view", "latte-select-dropdown-list"],
					childrens: lists
				}]
			}]
		});
		return object;
		
	}
}).call(module.exports);
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
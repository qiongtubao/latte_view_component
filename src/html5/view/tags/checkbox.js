(function() {
	var Lade = require("../../lib/lade/index.js");
	this.init = function(lade) {
		var attribute = lade.attr();
		
		lade.latte("checkbox", lade.text);
		for(var i = 0 , len = lade.childrens.length; i < len; i++) {
			var c = lade.childrens[0];
			lade.removeChild(c);
			lade.classed("latte-checkbox" , 1);
			lade.classed("checkbox", 1);
			c.classed("latte-checkbox-label",1);
			var nc = Lade.create({
				tag: "latte",
				
				childrens:[{
					tag: "latte",
					glasss: ["latte-checkbox-input"],
					latte: {
						click: lade.text + "-click"
					},
					attribute: {
						key: c.text,
						value: c.attr("value") || c.text
					},
					childrens: [{
						tag: "latte",
						glasss: ["latte-checkbox-inner"]
					}]
				}, c]
			});
			lade.appendChild(nc);
		}
		lade.text = "";
		return lade;
	}
}).call(module.exports);
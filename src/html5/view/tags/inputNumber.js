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
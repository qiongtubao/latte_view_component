(function() {
	var Lade = require("../../lib/lade/index.js");
	this.init = function(o) {
		return Lade.create({
			tag: "latte",
			glasss:["latte-dialog", "ease-fade"],
			latte: {
				dialog: "latte-dialog" 
			}
		})
	}
}).call(module.exports);
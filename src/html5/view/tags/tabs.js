(function() {
	var Lade = require("../../lib/lade/index.js");
	var toHead = function(c, text) {
		console.log(c.childrens.length);
		var cs = [];
		for(var i = 0, len = c.childrens.length; i < len; i++) {
			var child = c.childrens[0];
			child.latte("click",text + "-click");
			child.classed("tabs-item", 1);
			c.removeChild(child);
			cs.push(child);
		}
		return Lade.create({
			tag: "latte",
			glasss: ["tabs-header"],
			childrens: [{
				tag: "latte",
				glasss: ["tabs-nav-wrap"],
				childrens: [{
					tag: "latte",
					glasss: ["tabs-nav-scroll"],
					childrens: [{
						tag: "latte",
						glasss: ["tabs-nav"],
						childrens: cs
					}]
				}]
			}]			
		});
	}
	var toBody = function(c, text) {
		var cs = [];
		for(var i = 0, len = c.childrens.length; i < len; i++) {
			var child = c.childrens[0];
			console.log("{{"+text+"}} == \"" + child.latte("tab") + "\"")
			child.latte("show", "{{"+text+"}} == \"" + child.latte("tab") + "\""); 
			c.removeChild(child);
			cs.push(child);
		}
		return Lade.create({
			tag: "latte",
			glasss: c.glasss,
			childrens: cs
		});
	}
	this.init = function(lade) {
		var attribute = lade.attr();
		var childrens = [];
		lade.childrens.forEach(function(c) {
			if(c.tag == "head") {
				childrens.push(toHead(c, lade.text));
			}else if(c.tag == "body"){
				childrens.push(toBody(c, lade.text));
			}

		});
		var object = Lade.create({
			tag: "latte",
			glasss: ["latte-tabs"],
			latte: {
				"tabs": lade.text
			},
			attribute: attribute,
			childrens: childrens
		});
		return object;
		
	}
}).call(module.exports);
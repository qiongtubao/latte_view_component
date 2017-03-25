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
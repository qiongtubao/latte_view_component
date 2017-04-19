(function() {
	var Lade = require("../../lib/lade/index.js");
	this.init = function(lade) {
		var value = lade.text;
		var bodys = [];
		var body = lade.childrens[0];
		if(body) {
			bodys.push(body);
		}
		lade.removeChild(body);
		console.log(body);
		return Lade.create({
			tag: "latte",
			glasss:["latte-window-wrapper"],
			latte: {
				data: value,
			
			},
			childrens:[{
				tag: "latte",
				glasss:["latte-window"],
				childrens:[{
					tag:"latte",
					glasss:["latte-window-header"],
					childrens:[{
						tag: "latte",
						glasss:["latte-window-title"],
						latte: {
							text: "{{title}}"
						}
					},{
						tag: "latte",
						glasss: ["latte-window-close", "latte-icon-close"],
						latte: {
							click: "close"
						}
					}]
				},{
					tag: "latte",
					glasss:["latte-window-context"],
					childrens: bodys
				},{
					tag: "latte",
					glasss:["latte-window-btns"],
					childrens:[{
						tag: "button",
						glasss:["latte-window-button", "latte-window-button-primary"],
						childrens:[{
							tag: "label",
							glasss: [],
							latte: {
								click: "no"
							},
							text: "取消"
						}]
					},{
						tag: "button",
						glasss:["latte-window-button", "latte-window-button-primary"],
						childrens: [{
							tag: "label",
							glasss: [],
							latte: {
								click: "yes"
							},
							text:"确定"
						}]
					}]
				}]
			}]
		})
	}
}).call(module.exports);




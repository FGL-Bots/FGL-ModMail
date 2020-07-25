fs = require("fs");
module.exports = function({ bot, knex, config, commands }) {
  commands.addGlobalCommand('swb', [], (msg, args) => {
    role_list = msg.member.roles;
    member = msg.member;
    if(member.permission.has("administrator") == 1) {
	var contents = fs.readFileSync('src/swb.txt');
	if(contents == '0' || contents == '0\n') {
		fs.writeFileSync('src/swb.txt', '1');
		msg.channel.createMessage('Mod Mail has been disabled. No more threads can be created!');
	}
	else {
		fs.writeFileSync('src/swb.txt', '0');
		msg.channel.createMessage('Mod Mail has been enabled. Threads can now be created!');
	}
    }
  else {
   	msg.channel.createMessage("Only Administrators can enable or disable Mod Mail commands serverwide. If you want to contact Staff, pease DM <@735510887196262420>.");
   }

});

}

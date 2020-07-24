module.exports = function({ bot, knex, config, commands }) {
  commands.addGlobalCommand('help', [], (msg, args) => {
    role_list = msg.member.roles;
    member = msg.member;
    if(member.permission.has("administrator") == 1 || role_list.includes('734869160449933317')) {
    	msg.channel.createMessage("__**FGL Mod Mail Help**__\n\n__*Global Commands*__\n\n**>newthread (user id)** - Opens a modmail thread with the user\n**>logs (user id)** - List all previous modmail logs by said user\n**>block (user id) (optional: time)** - Block the user from modmail. If time is specified, it will automatically unblock after set amount of time\n**>unblock (user id)** - Unblocks the user from Modmail\n**>is_blocked (user id)** - Checks if the specified user is blocked\n\n__*Inbox Commands*__\n\n**>n** - Creates an internal note that won't be relayed to the user\n**>close** - Closes the modmail thread\n**>move (category)** - Moves a modmail thread to a different category\n**>logs <user>** - View logs for said user\n**>anonreply** - Send an anonymous reply to the user\n**>block (time)** - Bans a user from using modmail for a specified time\n**>unblock** - Unbans a user from modmail\n**>suspend** - Suspends the thread. Thread will act as closed and won't recieve any messages\n**>unsuspend** - Unsuspends the thread\n**>alert** - Pings you when the thread gets a new reply.\n**>alert cancel** - Cancels an alert\n**>loglink -s** - Gets a link to the Modmail thread logs with only message to/from user.\n**>loglink -v** - Gets a link to the open Modmail thread logs showing extra details including channels and message ID's. Use this when reporting people.\n**>id** - Gets the users ID");
  }
  else {
   	msg.channel.createMessage("Only Senior Moderators and up can use Mod Mail commands. If you want to contact Staff, pease DM <@735510887196262420>.");
   }

});

}

module.exports.run = async (Client, message, args) => {
    if(message.member.hasPermission("ADMINISTRATOR")) {
      let messagecount = parseInt(args[0]);
      if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please indicate the number of messages you want to deleter");
      if(messagecount > 100){
        message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at a time!")
      }else if(messagecount < 2 ) {
        message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at a time!")
      } else {
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
      }
      
    } else {
      return message.reply(":x: " + "| You must be \ "ADMINISTRATOR \" to execute this command!")
    }
    }
    module.exports.help = {
        name: "clear"
    }

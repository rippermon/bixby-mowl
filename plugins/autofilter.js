const Bixby = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "."

const GN = "."

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

Bixby.addCommand({pattern: 'ZIYAN', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "πΈ πΊπππ  π·π πΈπ πΌπ’ πΎπ πππ";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

Bixby.addCommand({pattern: 'midlaj', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "i know he is my assistant";

        var i = Math.floor(2*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        Bixby.addCommand({pattern: 'ZIYAN', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "πΈ πΊπππ  π·π πΈπ πΌπ’ π²πππππππ₯°";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        Bixby.addCommand({pattern: 'midlaj', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "i know he is my assistant";
          
                var i = Math.floor(2*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    

                Bixby.addCommand({pattern: 'bixby', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {

                    var r_text = new Array ();

                    r_text[1] = "πππ ππππ πΌπ π·ππ  π²ππ πΈ π·πππ πππ";

                    var i = Math.floor(2*Math.random())

                    await message.client.sendMessage(

                        message.jid,(r_text[i]), MessageType.text);

                    }));


}

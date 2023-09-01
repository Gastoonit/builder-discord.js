const { readdirSync } = require("node:fs");

module.exports = (client) => {
  client.eventos = async () => {
    /* Eventos */
    for (const subFolder of readdirSync(`./eventos/`)) {
      for (const fileName of readdirSync(`./eventos/${subFolder}/`)) {
        let file = require(`./eventos/${subFolder}/${fileName}`);
         let eventEmiter = file.emiter;
      client[eventEmiter](file.name, file.run.bind(null, client));
     }
   }  
  }
}
const { readdirSync } = require("node:fs");

module.exports = (client) => {
  client.eventos = async () => {
    /* Eventos */
    for (const subFolder of readdirSync(`${process.cwd()}/src/eventos/`)) {
      for (const fileName of readdirSync(`${process.cwd()}/src/eventos/${subFolder}/`)) {
        let file = require(`${process.cwd()}/src/eventos/${subFolder}/${fileName}`);
         let eventEmiter = file.emiter;
      client[eventEmiter](file.name, file.run.bind(null, client));
     }
   }  
  }
}
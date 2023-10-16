"use strict";

class Mod
{
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		const config = require("../config/config.json");
		
		if (config.Change_6B13)
			database.templates.items["5c0e53c886f7747fa54205c7"]._props.Prefab.path = "FixDefaultDigitalFlora/ArmoredVests/6b13.bundles";
	}
}

module.exports = { mod: new Mod() }
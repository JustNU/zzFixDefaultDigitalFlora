"use strict";

class Mod
{
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		const config = require("../config/config.json");
		
		// vanilla stuff
		if (config.Vanilla["Change 6B13"])
			database.templates.items["5c0e53c886f7747fa54205c7"]._props.Prefab.path = "FixDefaultDigitalFlora/ArmoredVests/6b13.bundle";
		
		if (config.Vanilla["Change 6B23-1"])
			database.templates.items["5c0e5bab86f77461f55ed1f3"]._props.Prefab.path = "FixDefaultDigitalFlora/ArmoredVests/6b23.bundle";
		
		if (config.Vanilla["Change 6B43 Full"])
			database.templates.items["545cdb794bdc2d3a198b456a"]._props.Prefab.path = "FixDefaultDigitalFlora/ArmoredVests/6b43_full.bundle";
		
		// AdditionalGear - Vanilla Extended
		if (config["AdditionalGear - Vanilla Extended"]["Change 6B23-2"]) {
			if (database.templates.items["AddGearVanExt_6B23_2_Digital_Flora"])
				database.templates.items["AddGearVanExt_6B23_2_Digital_Flora"]._props.Prefab.path = "FixDefaultDigitalFlora/ArmoredVests/6b23.bundle";
		}
		
		if (config["AdditionalGear - Vanilla Extended"]["Change 6B43 Assault"]) {
			if (database.templates.items["AddGearVanExt_6B43_Assault"])
				database.templates.items["AddGearVanExt_6B43_Assault"]._props.Prefab.path = "FixDefaultDigitalFlora/ArmoredVests/6B43_assault.bundle";
		}
		
		if (config["AdditionalGear - Vanilla Extended"]["Change 6B43 Mobility"]) {
			if (database.templates.items["AddGearVanExt_6B43_Mobility"])
				database.templates.items["AddGearVanExt_6B43_Mobility"]._props.Prefab.path = "FixDefaultDigitalFlora/ArmoredVests/6B43_mobility.bundle";
		}
		
		if (config["AdditionalGear - Vanilla Extended"]["Change 6B43 Light"]) {
			if (database.templates.items["AddGearVanExt_6B43_Light"])
				database.templates.items["AddGearVanExt_6B43_Light"]._props.Prefab.path = "FixDefaultDigitalFlora/ArmoredVests/6B43_light.bundle";
		}
	}
}

module.exports = { mod: new Mod() }

// example
allert('hi');
var planet = {
	id:34,
	name: "Sigurd Skauvik",
	faction: [
		factionId: 2,
		name: "Mex"]
		notification : function() {
		codument.write("Nex alliance.. unite!");
		
		}
	}

	cities: [
		{ locationId: 15, name: "Gladius" },
		{ locationId: 16, name: "Chalybs" },
		{ locationId: 17, name: "Ensis" }
	]
};

planet.faction.notification();
document.write(planet.cities[1].name);

document.write("<br />" + planet.name);
planet.name = "Vultus";
document.write("<br />" + planet.name);
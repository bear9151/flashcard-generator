var ClozeCard = function(hole, statement) {
	this.hole = hole;
	this.statement = statement;
	this.front = statement.replace(hole, " ... ")
};

module.exports = ClozeCard;
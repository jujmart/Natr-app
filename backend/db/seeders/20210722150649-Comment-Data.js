"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
	  */
		return queryInterface.bulkInsert(
			"Comments",
			[{ userId: 1, imageId: 1, comment: "I would love to be here!" }],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
	  */
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			"Comments",
			// { comment: { [Op.in]: ["I would love to be here!"] } },
			null,
			{}
		);
	},
};

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
			[
				{ userId: 1, imageId: 1, comment: "Beautiful!" },
				{ userId: 2, imageId: 1, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 1,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 1, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 1, comment: "DUDE" },
				{ userId: 1, imageId: 2, comment: "Beautiful!" },
				{ userId: 2, imageId: 2, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 2,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 2, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 2, comment: "DUDE" },
				{ userId: 1, imageId: 3, comment: "Beautiful!" },
				{ userId: 2, imageId: 3, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 3,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 3, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 3, comment: "DUDE" },
				{ userId: 1, imageId: 4, comment: "Beautiful!" },
				{ userId: 2, imageId: 4, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 4,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 4, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 4, comment: "DUDE" },
				{ userId: 1, imageId: 5, comment: "Beautiful!" },
				{ userId: 2, imageId: 5, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 5,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 5, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 5, comment: "DUDE" },
				{ userId: 1, imageId: 6, comment: "Beautiful!" },
				{ userId: 2, imageId: 6, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 6,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 6, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 6, comment: "DUDE" },
				{ userId: 1, imageId: 7, comment: "Beautiful!" },
				{ userId: 2, imageId: 7, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 7,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 7, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 7, comment: "DUDE" },
				{ userId: 1, imageId: 8, comment: "Beautiful!" },
				{ userId: 2, imageId: 8, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 8,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 8, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 8, comment: "DUDE" },
				{ userId: 1, imageId: 9, comment: "Beautiful!" },
				{ userId: 2, imageId: 9, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 9,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 9, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 9, comment: "DUDE" },
				{ userId: 1, imageId: 10, comment: "Beautiful!" },
				{ userId: 2, imageId: 10, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 10,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 10, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 10, comment: "DUDE" },
				{ userId: 1, imageId: 11, comment: "Beautiful!" },
				{ userId: 2, imageId: 11, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 11,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 11, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 11, comment: "DUDE" },
				{ userId: 1, imageId: 12, comment: "Beautiful!" },
				{ userId: 2, imageId: 12, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 12,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 12, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 12, comment: "DUDE" },
				{ userId: 1, imageId: 13, comment: "Beautiful!" },
				{ userId: 2, imageId: 13, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 13,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 13, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 13, comment: "DUDE" },
				{ userId: 1, imageId: 14, comment: "Beautiful!" },
				{ userId: 2, imageId: 14, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 14,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 14, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 14, comment: "DUDE" },
				{ userId: 1, imageId: 15, comment: "Beautiful!" },
				{ userId: 2, imageId: 15, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 15,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 15, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 15, comment: "DUDE" },
				{ userId: 1, imageId: 16, comment: "Beautiful!" },
				{ userId: 2, imageId: 16, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 16,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 16, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 16, comment: "DUDE" },
				{ userId: 1, imageId: 17, comment: "Beautiful!" },
				{ userId: 2, imageId: 17, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 17,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 17, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 17, comment: "DUDE" },
				{ userId: 1, imageId: 18, comment: "Beautiful!" },
				{ userId: 2, imageId: 18, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 18,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 18, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 18, comment: "DUDE" },
				{ userId: 1, imageId: 19, comment: "Beautiful!" },
				{ userId: 2, imageId: 19, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 19,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 19, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 19, comment: "DUDE" },
				{ userId: 1, imageId: 20, comment: "Beautiful!" },
				{ userId: 2, imageId: 20, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 20,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 20, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 20, comment: "DUDE" },
				{ userId: 1, imageId: 21, comment: "Beautiful!" },
				{ userId: 2, imageId: 21, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 21,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 21, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 21, comment: "DUDE" },
				{ userId: 1, imageId: 22, comment: "Beautiful!" },
				{ userId: 2, imageId: 22, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 22,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 22, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 22, comment: "DUDE" },
				{ userId: 1, imageId: 23, comment: "Beautiful!" },
				{ userId: 2, imageId: 23, comment: "This is amazing" },
				{
					userId: 3,
					imageId: 23,
					comment:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 23, comment: "I've seen better hahaha" },
				{ userId: 2, imageId: 23, comment: "DUDE" },
			],
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
			// {
			// 	comment: {
			// 		[Op.in]: [
			// 			"Beautiful!",
			// 			"This is amazing",
			// 			"Need to have my camera at all times just in case I stumble across something like this",
			// 			"I've seen better hahaha",
			// 			"DUDE",
			// 		],
			// 	},
			// },
			null,
			{}
		);
	},
};

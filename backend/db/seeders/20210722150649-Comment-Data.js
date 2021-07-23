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
				{ userId: 1, imageId: 1, content: "Beautiful!" },
				{ userId: 2, imageId: 1, content: "This is amazing" },
				{
					userId: 3,
					imageId: 1,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 1, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 1, content: "DUDE" },
				{ userId: 1, imageId: 2, content: "Beautiful!" },
				{ userId: 2, imageId: 2, content: "This is amazing" },
				{
					userId: 3,
					imageId: 2,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 2, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 2, content: "DUDE" },
				{ userId: 1, imageId: 3, content: "Beautiful!" },
				{ userId: 2, imageId: 3, content: "This is amazing" },
				{
					userId: 3,
					imageId: 3,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 3, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 3, content: "DUDE" },
				{ userId: 1, imageId: 4, content: "Beautiful!" },
				{ userId: 2, imageId: 4, content: "This is amazing" },
				{
					userId: 3,
					imageId: 4,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 4, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 4, content: "DUDE" },
				{ userId: 1, imageId: 5, content: "Beautiful!" },
				{ userId: 2, imageId: 5, content: "This is amazing" },
				{
					userId: 3,
					imageId: 5,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 5, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 5, content: "DUDE" },
				{ userId: 1, imageId: 6, content: "Beautiful!" },
				{ userId: 2, imageId: 6, content: "This is amazing" },
				{
					userId: 3,
					imageId: 6,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 6, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 6, content: "DUDE" },
				{ userId: 1, imageId: 7, content: "Beautiful!" },
				{ userId: 2, imageId: 7, content: "This is amazing" },
				{
					userId: 3,
					imageId: 7,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 7, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 7, content: "DUDE" },
				{ userId: 1, imageId: 8, content: "Beautiful!" },
				{ userId: 2, imageId: 8, content: "This is amazing" },
				{
					userId: 3,
					imageId: 8,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 8, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 8, content: "DUDE" },
				{ userId: 1, imageId: 9, content: "Beautiful!" },
				{ userId: 2, imageId: 9, content: "This is amazing" },
				{
					userId: 3,
					imageId: 9,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 9, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 9, content: "DUDE" },
				{ userId: 1, imageId: 10, content: "Beautiful!" },
				{ userId: 2, imageId: 10, content: "This is amazing" },
				{
					userId: 3,
					imageId: 10,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 10, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 10, content: "DUDE" },
				{ userId: 1, imageId: 11, content: "Beautiful!" },
				{ userId: 2, imageId: 11, content: "This is amazing" },
				{
					userId: 3,
					imageId: 11,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 11, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 11, content: "DUDE" },
				{ userId: 1, imageId: 12, content: "Beautiful!" },
				{ userId: 2, imageId: 12, content: "This is amazing" },
				{
					userId: 3,
					imageId: 12,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 12, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 12, content: "DUDE" },
				{ userId: 1, imageId: 13, content: "Beautiful!" },
				{ userId: 2, imageId: 13, content: "This is amazing" },
				{
					userId: 3,
					imageId: 13,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 13, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 13, content: "DUDE" },
				{ userId: 1, imageId: 14, content: "Beautiful!" },
				{ userId: 2, imageId: 14, content: "This is amazing" },
				{
					userId: 3,
					imageId: 14,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 14, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 14, content: "DUDE" },
				{ userId: 1, imageId: 15, content: "Beautiful!" },
				{ userId: 2, imageId: 15, content: "This is amazing" },
				{
					userId: 3,
					imageId: 15,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 15, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 15, content: "DUDE" },
				{ userId: 1, imageId: 16, content: "Beautiful!" },
				{ userId: 2, imageId: 16, content: "This is amazing" },
				{
					userId: 3,
					imageId: 16,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 16, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 16, content: "DUDE" },
				{ userId: 1, imageId: 17, content: "Beautiful!" },
				{ userId: 2, imageId: 17, content: "This is amazing" },
				{
					userId: 3,
					imageId: 17,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 17, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 17, content: "DUDE" },
				{ userId: 1, imageId: 18, content: "Beautiful!" },
				{ userId: 2, imageId: 18, content: "This is amazing" },
				{
					userId: 3,
					imageId: 18,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 18, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 18, content: "DUDE" },
				{ userId: 1, imageId: 19, content: "Beautiful!" },
				{ userId: 2, imageId: 19, content: "This is amazing" },
				{
					userId: 3,
					imageId: 19,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 19, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 19, content: "DUDE" },
				{ userId: 1, imageId: 20, content: "Beautiful!" },
				{ userId: 2, imageId: 20, content: "This is amazing" },
				{
					userId: 3,
					imageId: 20,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 20, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 20, content: "DUDE" },
				{ userId: 1, imageId: 21, content: "Beautiful!" },
				{ userId: 2, imageId: 21, content: "This is amazing" },
				{
					userId: 3,
					imageId: 21,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 21, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 21, content: "DUDE" },
				{ userId: 1, imageId: 22, content: "Beautiful!" },
				{ userId: 2, imageId: 22, content: "This is amazing" },
				{
					userId: 3,
					imageId: 22,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 22, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 22, content: "DUDE" },
				{ userId: 1, imageId: 23, content: "Beautiful!" },
				{ userId: 2, imageId: 23, content: "This is amazing" },
				{
					userId: 3,
					imageId: 23,
					content:
						"Need to have my camera at all times just in case I stumble across something like this",
				},
				{ userId: 3, imageId: 23, content: "I've seen better hahaha" },
				{ userId: 2, imageId: 23, content: "DUDE" },
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
			// 	content: {
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

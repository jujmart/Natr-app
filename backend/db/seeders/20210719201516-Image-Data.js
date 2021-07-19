"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
	  */
		return queryInterface.bulkInsert(
			"Images",
			[
				{
					userId: 2,
					imageUrl:
						"https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg",
					title: "Red Leaves, Purple-Fog Lake",
					content:
						"Nice contrast in colors of leaves and fog on the lake",
				},
				{
					userId: 3,
					imageUrl:
						"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					title: "River flowing to Mountain",
					content:
						"Sun rising on mountains in background while the river flows in the foreground",
				},
				{
					userId: 2,
					imageUrl:
						"https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg",
					title: "River flowing in dense rainforest",
					content:
						"The river flows through the thick vegetation and logs that have fallen into its path",
				},
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
		return queryInterface.bulkDelete("Images", null, {});
	},
};

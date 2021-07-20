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
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo1.jpeg",
					title: "Red Leaves, Purple-Fog Lake",
					content:
						"Nice contrast in colors of leaves and fog on the lake",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo2.jpeg",
					title: "River flowing to Mountain",
					content:
						"Sun rising on mountains in background while the river flows in the foreground",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo3.jpeg",
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

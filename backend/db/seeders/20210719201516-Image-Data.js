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
				{
					userId: 1,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo4.jpeg",
					title: "Sunshine through a rock",
					content:
						"Rock shows just a glimpse of the sun at sunset through a natural window",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo5.jpeg",
					title: "Waterfall",
					content:
						"Waterfall flowing next to sakura tree, green leaves reflect off water to give a cool green glow",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo6.jpeg",
					title: "Lone Tree",
					content: "A single tree in a field of grass at sunrise",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo7.jpeg",
					title: "Rock Formation",
					content:
						"Rocks stacked with a body of water in the background",
				},
				{
					userId: 1,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo8.jpeg",
					title: "Swimming Tiger",
					content: "A majestic tiger swimming in a jungle",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo9.jpeg",
					title: "Tree Lane",
					content:
						"A row of perfectly positioned purple trees that seems to stretch to the end of the world",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo10.jpeg",
					title: "Foggy Mountain",
					content:
						"A dense fog rolls over a mountain and the trees on top of it",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo11.jpeg",
					title: "Cave",
					content:
						"Cave shows the tenacity of nature - to grow greenery on the ceiling of a cave is impressive",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo12.jpeg",
					title: "Changing Leaves",
					content:
						"This shows that change can happen slowly and then all at once",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo13.jpeg",
					title: "Kangaroo Jack",
					content:
						"Joey is feeling nice and cozy inside of his mothers pouch",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo14.jpeg",
					title: "Northern Lights",
					content:
						"Aurora Borealis as can be seen at certain latitudes nearer the poles",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo15.jpeg",
					title: "Purple Sky",
					content:
						"Purple/pink sky in the background and tree in the foreground",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo16.jpeg",
					title: "Stork enjoying the scenery",
					content:
						"Stork enjoing a wade in the lake and a sunset and possibly some friends in the background",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo17.jpeg",
					title: "Ice Mountain",
					content: "Icy water and even icier mountain",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo18.jpeg",
					title: "Rock Bands",
					content:
						"Geological bands of sedimentary rock showing how it was formed over time",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo19.jpeg",
					title: "Australian Beauties",
					content: "Frogs and bugs living in harmony in Australia",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo20.jpeg",
					title: "Almost Translucent Glaciers",
					content:
						"Glacier ice that takes in the sunlight from the back and lets it pass right through",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo21.jpeg",
					title: "Mossy Green",
					content: "Endangered species of moss",
				},
				{
					userId: 3,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo22.jpeg",
					title: "Chasm",
					content:
						"Be careful or you could fall off the edge of the world",
				},
				{
					userId: 2,
					imageUrl:
						"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo23.jpeg",
					title: "Inside of Snail Shell",
					content:
						"Snail shells are one of the wonders of the world - they can show how mathematical principles play out in nature",
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
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			"Images",
			// {
			// 	imageUrl: {
			// 		[Op.in]: [
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo1.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo2.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo3.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo4.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo5.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo6.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo7.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo8.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo9.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo10.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo11.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo12.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo13.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo14.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo15.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo16.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo17.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo18.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo19.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo20.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo21.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo22.jpeg",
			// 			"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Homepage-Photos/seeder-photo23.jpeg",
			// 		],
			// 	},
			// },
			null,
			{}
		);
	},
};

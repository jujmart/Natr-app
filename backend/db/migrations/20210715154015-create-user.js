"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				type: Sequelize.STRING(30),
				allowNull: false,
				unique: true,
			},
			email: {
				type: Sequelize.STRING(256),
				allowNull: false,
				unique: true,
			},
			hashedPassword: {
				type: Sequelize.STRING.BINARY,
				allowNull: false,
			},
			profilePhotoUrl: {
				type: Sequelize.STRING(500),
				defaultValue:
					"https://natr-app.s3.us-east-2.amazonaws.com/AWS-Bucket/Profile-Pics/profile-photo-default.png",
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Users");
	},
};

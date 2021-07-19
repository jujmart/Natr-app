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
					"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwinaero.com%2Fremove-user-account-picture-from-sign-in-screen-in-windows-10%2F&psig=AOvVaw1_GNkRWA_OV0hl0BgrZogM&ust=1626810391875000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCttY7z7_ECFQAAAAAdAAAAABAN",
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

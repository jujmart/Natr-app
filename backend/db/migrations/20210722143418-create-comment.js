"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface
			.createTable("Comments", {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				userId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Users" },
				},
				imageId: {
					allowNull: false,
					type: Sequelize.INTEGER,
					references: { model: "Images" },
				},
				content: {
					allowNull: false,
					type: Sequelize.TEXT,
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
			})
			.then(() => queryInterface.addIndex("Comments", ["imageId"]));
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Comments");
	},
};

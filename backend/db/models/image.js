"use strict";
module.exports = (sequelize, DataTypes) => {
	const Image = sequelize.define(
		"Image",
		{
			userId: { type: DataTypes.INTEGER, allowNull: false },
			imageUrl: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: { len: [0, 500] },
			},
			title: DataTypes.STRING,
			content: DataTypes.TEXT,
		},
		{}
	);
	Image.associate = function (models) {
		// associations can be defined here
		Image.belongsTo(models.User, { foreignKey: "userId" });
		Image.hasMany(models.Comment, {
			foreignKey: "imageId",
			onDelete: "CASCADE",
			hooks: true,
		});
	};
	return Image;
};

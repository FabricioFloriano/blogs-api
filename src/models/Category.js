const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });

  // User.associate = (models) => {
  //   User.hasMany(models.blogPost,
  //     { foreignKey: 'userId', as: 'blog_posts' });
  // };

  return Category;
};

module.exports = CategoryModel;
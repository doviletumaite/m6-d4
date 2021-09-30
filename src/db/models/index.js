import product from "./products.js";
import review from "./reviews.js";
import user from "./users.js";

product.hasMany(review)
review.belongsTo(product)

user.hasMany(product)
product.belongsTo(user)

export default { review, product, user }
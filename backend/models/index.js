const mongoose = require('mongoose');
const Voucher = require('./voucher.model');
const Admin = require('./admin.model');
const Address = require('./address.model');
const Affiliation = require('./affiliate.model');
const Cart = require('./cart.model');
const Category = require('./category.model');
const Color = require('./color.model');
const Comment = require('./comment.model');
const Feedback = require('./feedback.model');
const Image = require('./image.model');
const Iventory = require('./iventory.model');
const Notification = require('./notification.model');
const Order = require('./order.model');
const OrderDetail = require('./orderDetail.model');
const Product = require('./product.model');
const User = require('./user.model');
const Size = require('./size.model');
const Transaction = require('./transaction.model');


mongoose.Promise = global.Promise;

const db = {};
// thêm thuộc tính cho db 

db.Voucher = Voucher;
db.Size = Size;
db.Admin = Admin;
db.Address = Address;
db.Affiliation = Affiliation;
db.Cart = Cart;
db.Category = Category;
db.Color = Color;
db.Comment = Comment;
db.Feedback = Feedback;
db.Image = Image;
db.Iventory = Iventory;
db.Notification = Notification;
db.Order = Order;
db.OrderDetail = OrderDetail;
db.Product = Product;
db.User = User;
db.Transaction = Transaction;



db.connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Connect to serrver"))
        .catch(error => console.log(error.message))
}

module.exports = db;

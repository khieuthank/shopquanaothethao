
const addressRouter = require('./address.routes');
const adminRouter = require('./admin.routes');
const affiliationRouter = require('./affiliation.routes');
const cartRouter = require('./cart.routes');
const categoryRouter = require('./category.routes');
const colorRouter = require('./color.routes');
const commentRouter = require('./comment.routes');
const feedbackRouter = require('./feedback.routes');
const imageRouter = require('./image.routes');
const iventoryRouter = require('./iventory.routes');
const notificationRouter = require('./notification.routes');
const orderRouter = require('./order.routes');
const orderDetailRouter =   require('./orderDetial.routes');
const pruductRouter = require('./product.routes');
const sizeRouter = require('./size.routes');
const transactionRouter = require('./transaction.routes');
const userRouter = require('./user.routes');
const voucherRouter = require('./voucher.routes');

// Export các router
module.exports = {
    addressRouter,
    adminRouter,
    affiliationRouter,
    cartRouter,
    categoryRouter,
    colorRouter,
    commentRouter,
    feedbackRouter,
    imageRouter,
    iventoryRouter,
    notificationRouter,
    orderRouter,
    orderDetailRouter,
    pruductRouter,
    sizeRouter,
    transactionRouter,
    userRouter,
    voucherRouter
};

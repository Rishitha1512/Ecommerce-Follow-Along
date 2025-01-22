const mongoose = require('mongoose');
const CartModel = require('../models/cart.model');
const UserModel = require('../models/user.model');

async function AddToCartController(req,res){
    const {productId, quantity} = req.body;
    const userId = req.UserId;
    try{
        if (!mongoose.Types.ObjectId.isValid(productId)){
            return res.status(400).send({message: 'Send Valid Product ID'})
        }
        if (!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send({message: 'Send Valid User ID'})
        }

        const checkUserPresent = await UserModel.findOne({_id: userId});
        if (!checkUserPresent){
            return res.status(401).send({message: 'Un-authorized please signup'});
        }

        const checkIfProductPresent = await CartModel.findOne({  productId: productId});
        if (checkIfProductPresent){
            return res
                .status(400)
                .send({message: 'Product Already present in cart'});
        }
        await CartModel.create({
            productId,
            quantity,
            userId,
        });

        return res
            .status(201)
            .send({message: 'Product is successfully created', success: true});

        }catch (er) {
            return res.status(500).send({ message: er.message, success: false});

        }
}

async function GetProductsForUser(req,res) {
    const userId = req.UserId;
    try{
        if (!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(401).send({message: 'Un-authorized please signup'});
        }
        const checkUserPresent = await UserModel.findOne({ _id: userId});
        if (!checkUserPresent){
            return res.status(401).send({message: 'Un-authorizes please sign up'});
        }
        const data = await CartModel.find({ userId }).populate('productId');
        return res.status(200).send({
            message: 'Data successfully fetched',
            success: true,
            cartData: data,
        });

        }catch(er) {
            return res.status(500).send({message: er.message, success: false});
        }
}
module.exports = {AddToCartController, GetProductsForUser};
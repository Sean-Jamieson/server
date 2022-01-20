import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    itemName: String,
    price: Number,
    quantity: Number,
    description: String,
    selectedFile: String,
});

const ItemMessage = mongoose.model('itemMessage', itemSchema);

export default ItemMessage;
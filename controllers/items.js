
import mongoose from 'mongoose';

import ItemMessage from '../models/itemMessage.js';


export const getItems = async (req, res) => {
    try{
        const itemMessages = await ItemMessage.find();

        res.status(200).json(itemMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createItem = async (req, res) =>  {
    const item = req.body;

    const newItem = new ItemMessage(item);

    try {
        await newItem.save();

        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export const updateItem = async (req, res) => {
    const {id: _id} = req.params;
    const item = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No item with that id');

    const updatedItem = await ItemMessage.findByIdAndUpdate(_id, {...item, _id}, { new: true}); 

    res.json(updatedItem);
}

export const deleteItem = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No item with that id');

    await ItemMessage.findByIdAndRemove(id);

    res.json({ message: 'Item deleted successfully'});
}


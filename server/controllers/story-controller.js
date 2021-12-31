import express from 'express';
import mongoose from 'mongoose';

import Story from '../models/story.js';

const router = express.Router();

export const getStory = async (req, res) => { 
    try {
        const story = await Story.find();
                
        res.status(200).json(story);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export default router;
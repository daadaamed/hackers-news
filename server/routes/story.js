import express from 'express';

import { getStory} from '../controllers/story-controller.js';

const router = express.Router();

router.get('/', getStory);

export default router;
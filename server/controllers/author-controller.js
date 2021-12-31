import express from 'express';
import mongoose from 'mongoose';
import Story from '../models/story.js';

var request = require('request');
var topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

const router = express.Router();

export const getStory = async (req, res) => { 
    try {
        const story = await Story.find();
                
        res.status(200).json(story);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

var isJSONResponse = function(headers) {
  return headers['content-type'].includes('json');
};

var getJSONFromHackerNews = function (url, callback) {
  request.get(url, function(err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error('Response did not contain JSON data.'), null);
    } else {
      data = JSON.parse(body);
      callback(null, data);
    }
  });
};

getJSONFromHackerNews(topStoriesURL, function(err, data) {
  console.log(err, 'err, expect to be null');
  console.log(data, 'data, expect to be ids for top 500 stories');
});


export default router;
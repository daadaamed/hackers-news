import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    title: String,
    id: Number,
    by: String,
    score: Number,
    time: TimeRanges,

})

var Story = mongoose.model('Story', storySchema);

export default Story;
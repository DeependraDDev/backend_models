import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String
        , required: true
    },
    content: {
        type: String
        , required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId
        , ref: "User"
        , required: true
    }
}, {
    timestamps: true
    , versionKey: false
});

const Post = mongoose.model("Post", postSchema);

export default Post;
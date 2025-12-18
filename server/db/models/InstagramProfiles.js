import mongoose from "mongoose";

const InstagramProfileSchema = new mongoose.Schema({
    username: { type: String, required: true },
    fullName: { type: String, required: true },
    url: { type: String, required: true },
    bio: { type: String, required: true },
    externalUrls: { type: Array, required: true },
    followers: { type: Number, required: true },
    verified: { type: Boolean, required: true },
    profilePicUrl: { type: String, default: "" },
    postsCount: { type: Number, required: true },
    latestPosts: { type: Array, required: true },
})

const InstagramProfile = mongoose.model("InstagramProfile", InstagramProfileSchema);

export default InstagramProfile
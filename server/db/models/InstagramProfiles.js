import mongoose from "mongoose";

const InstagramProfileSchema = new mongoose.Schema({
    username: { type: String, default: "" },
    fullName: { type: String, default: "" },
    url: { type: String, default: "" },
    bio: { type: String, default: "" },
    externalUrls: { type: Array, default: [] },
    followers: { type: Number, default: 0 },
    verified: { type: Boolean, default: false },
    profilePicUrl: { type: String, default: "" },
    postsCount: { type: Number, default: 0 },
    latestPosts: { type: Array, default: [] },
})

const InstagramProfile = mongoose.model("InstagramProfile", InstagramProfileSchema);

export default InstagramProfile
const Post = require('./post');

const PostSchema = new Schema({
  postText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  reactions: [ReactionSchema],
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
}
);

PostSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
}
);

PostSchema.virtual('getReactions').get(function() {
  return this.reactions.length;
}
);

const Post = model('Post', PostSchema);

module.exports = Post;

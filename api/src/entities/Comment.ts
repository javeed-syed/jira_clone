import mongoose, { Document, Schema } from 'mongoose';

export interface BaseComment {
  body: string;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IComment extends Document, BaseComment {
  body: string;
  user: mongoose.Types.ObjectId;
  issue: mongoose.Types.ObjectId;
}

const CommentSchema: Schema = new Schema(
  {
    body: {
      type: String,
      required: true,
      maxlength: 50000,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    issue: {
      type: mongoose.Types.ObjectId,
      ref: 'Issue',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;

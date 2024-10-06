import mongoose, { Document, Schema } from 'mongoose';
import striptags from 'striptags';
import { IssueType, IssueStatus, IssuePriority } from 'constants/issues';

export interface BaseIssue {
  title: string;
  type: IssueType;
  status: IssueStatus;
  priority: IssuePriority;
  listPosition: number;
  description?: string;
  descriptionText?: string;
  estimate?: number;
  timeSpent?: number;
  timeRemaining?: number;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IIssue extends Document, BaseIssue {
  reporterId: mongoose.Types.ObjectId;
  project: mongoose.Types.ObjectId;
  comments: mongoose.Types.ObjectId[];
  userIds: mongoose.Types.ObjectId[];
  authorId: mongoose.Types.ObjectId;
}

const IssueSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 200,
    },
    type: {
      type: String,
      enum: Object.values(IssueType),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(IssueStatus),
      required: true,
    },
    priority: {
      type: String,
      enum: Object.values(IssuePriority),
      required: true,
    },
    listPosition: {
      type: Number,
      required: true,
    },
    description: String,
    descriptionText: String,
    estimate: Number,
    timeSpent: Number,
    timeRemaining: Number,
    reporterId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    project: {
      type: mongoose.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    userIds: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

// Mongoose middleware to processDescription
IssueSchema.pre<IIssue>('save', function processDescription(next) {
  if (this.description) {
    this.descriptionText = striptags(this.description);
  }
  next();
});

// Mongoose middleware to delete issue-related comments when issues are deleted.
IssueSchema.pre('deleteMany', async function deleteComments(next) {
  const conditions = this.getFilter();
  try {
    // eslint-disable-next-line no-underscore-dangle
    await mongoose.model('Comment').deleteMany({ issue: { $in: conditions._id } });
    next();
  } catch (error) {
    console.error('Error deleting related issues:', error);
    next(error);
  }
});

const Issue = mongoose.model<IIssue>('Issue', IssueSchema);

export default Issue;

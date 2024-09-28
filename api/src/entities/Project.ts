import mongoose, { Document, Schema } from 'mongoose';
import { ProjectCategory } from 'constants/projects';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IProject extends Document {
  name: string;
  url?: string;
  description?: string;
  category: ProjectCategory;
  issues: mongoose.Types.ObjectId[];
  users: mongoose.Types.ObjectId[];
}

const ProjectSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
      unique: true,
    },
    url: String,
    description: String,
    category: {
      type: String,
      enum: Object.values(ProjectCategory),
      required: true,
    },
    issues: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Issue',
      },
    ],
    users: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  },
);

// Mongoose middleware to delete project-related issues when projects are deleted.
ProjectSchema.pre('deleteMany', async function deleteRelatedIssues(next) {
  const conditions = this.getFilter();
  try {
    // eslint-disable-next-line no-underscore-dangle
    await mongoose.model('Issue').deleteMany({ project: { $in: conditions._id } });
    next();
  } catch (error) {
    console.error('Error deleting related issues:', error);
    // next(error);
  }
});

const Project = mongoose.model<IProject>('Project', ProjectSchema);

export default Project;

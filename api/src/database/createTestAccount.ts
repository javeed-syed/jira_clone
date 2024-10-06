/* eslint-disable no-underscore-dangle */

import { TestData } from 'constants/data';
import {
  User,
  Project,
  Issue,
  Comment,
  IUser,
  IProject,
  IIssue,
  IComment,
  BaseUser,
  BaseIssue,
  BaseComment,
} from '../entities';

const seedUsers = async (): Promise<IUser[]> => {
  const users = TestData.users.map((userData: BaseUser) => new User(userData));
  const savedUsers = await User.insertMany(users);
  return savedUsers;
};

const seedProject = async (users: IUser[]): Promise<IProject> => {
  const projectData = {
    ...TestData.project,
    users: users.map((user: IUser) => user._id),
  };
  const project = new Project(projectData);
  const savedProject = await project.save();
  return savedProject;
};

const seedIssues = async (project: IProject, users: IUser[]): Promise<IIssue[]> => {
  const issues = TestData.issues.map((issueData: BaseIssue, index: number) => {
    const reporterId = users[0]._id;
    const assignees = index === 2 ? [users[0]._id, users[1]._id] : [users[0]._id];

    return new Issue({
      ...issueData,
      reporter: reporterId,
      userIds: assignees,
      project: project._id, // Link the project by its ObjectId
    });
  });

  const savedIssues = await Issue.insertMany(issues);
  return savedIssues;
};

// Seed Comments
const seedComments = async (issues: IIssue[], users: IUser[]): Promise<IComment[]> => {
  const comments = TestData.comments.map((commentData: BaseComment) => {
    return new Comment({
      ...commentData,
      issue: issues[0]._id,
      user: users[0]._id,
    });
  });

  const savedComments = await Comment.insertMany(comments);
  return savedComments;
};

const createTestAccount = async (): Promise<IUser | null> => {
  try {
    const users = await seedUsers();
    const project = await seedProject(users);
    const issues = await seedIssues(project, users);
    await seedComments(issues, users);
    console.log('Database seeded successfully with test data.');
    return users[0];
  } catch (error) {
    console.error('Error seeding the database:', error);
    return null;
  }
};

export default createTestAccount;

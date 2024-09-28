/* eslint-disable no-underscore-dangle */

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
import { GuestAccountData } from '../constants/data';
import resetDatabase from './resetDatabase';

const getRandomIndex = (arr: any[]): number => Math.floor(Math.random() * arr.length);

const seedUsers = async (): Promise<IUser[]> => {
  const users = GuestAccountData.users.map((userData: BaseUser) => new User(userData));
  return User.insertMany(users);
};

const seedProject = async (users: IUser[]): Promise<IProject> => {
  const projectData = {
    ...GuestAccountData.project,
    users: users.map(user => user._id),
  };
  const project = new Project(projectData);
  return project.save();
};

const seedIssues = async (project: IProject, users: IUser[]): Promise<IIssue[]> => {
  const issuesData = GuestAccountData.issues.map((issueData: BaseIssue) => {
    const randomReporter = users[getRandomIndex(users)]._id;
    const randomAssignees = users
      .map(user => user._id)
      .sort(() => Math.random() - 0.5)
      .slice(0, getRandomIndex(users) + 1);

    // Link the project by its ObjectId
    return new Issue({
      ...issueData,
      reporterId: randomReporter,
      userIds: randomAssignees,
      project: project._id,
    });
  });

  return Issue.insertMany(issuesData);
};

// Seed Comments
const seedComments = async (issues: IIssue[], users: IUser[]): Promise<IComment[]> => {
  const commentsData = GuestAccountData.comments.map((commentData: BaseComment) => {
    const randomIssue = issues[getRandomIndex(issues)]._id;
    const randomUser = users[getRandomIndex(users)]._id;

    return new Comment({
      ...commentData,
      issue: randomIssue,
      user: randomUser,
    });
  });

  return Comment.insertMany(commentsData);
};

// Main seeding function
const createGuestAccount = async (): Promise<IUser | null> => {
  try {
    await resetDatabase();
    const users = await seedUsers();
    const project = await seedProject(users);
    const issues = await seedIssues(project, users);
    await seedComments(issues, users);
    console.log('Database seeded successfully with guest data.');
    return users[0];
  } catch (error) {
    console.error('Error seeding the database:', error);
    return null;
  }
};

export default createGuestAccount;

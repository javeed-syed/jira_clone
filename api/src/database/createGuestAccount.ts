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
} from '../entities';
import { GuestAccountData } from '../constants/data';

const getRandomIndex = (arr: any[]): number => Math.floor(Math.random() * arr.length);

const seedUsers = async (projectId: string): Promise<IUser[]> => {
  const users = GuestAccountData.users.map(userData => new User({
    projects: [projectId],
    ...userData
  }
  ));
  return User.insertMany(users);
};

const seedProject = async (): Promise<IProject> => {
  const project = new Project(GuestAccountData.project);
  return project.save();
};

const seedIssues = async (projectId: string, users: IUser[]): Promise<IIssue[]> => {
  const issuesData = GuestAccountData.issues.map((issueData) => {
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
      project: projectId,
    });
  });

  return Issue.insertMany(issuesData);
};

// Seed Comments
const seedComments = async (issues: IIssue[], users: IUser[]): Promise<IComment[]> => {
  const commentsData = GuestAccountData.comments.map((commentData) => {
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
    const guestEmail = GuestAccountData.users[0].email;

    const existing = await User.findOne({ email: guestEmail });
    if (existing) {
      console.log('✅ Guest user already exists:', existing._id);
      return null;
    }

    const project = await seedProject();
    const users = await seedUsers(project._id);
    const issues = await seedIssues(project._id, users);
    await seedComments(issues, users);
    console.log('Database seeded successfully with guest data.');
    return users[0];
  } catch (error) {
    console.error('Error seeding the database:', error);
    return null;
  }
};

export default createGuestAccount;

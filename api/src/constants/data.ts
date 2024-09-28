import { IssueType, IssueStatus, IssuePriority } from './issues';
import { ProjectCategory } from './projects';

export const GuestAccountData = {
  users: [
    {
      email: 'rick@jira.guest',
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
    },
    {
      email: 'yoda@jira.guest',
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
    },
    {
      email: 'gaben@jira.guest',
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
    },
  ],
  project: {
    name: 'singularity 1.0',
    url: 'https://www.atlassian.com/software/jira',
    description:
      'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
    category: 'SOFTWARE',
  },
  issues: [
    {
      title: 'This is an issue of type: Task.',
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGH,
      listPosition: 1,
      description:
        '<p>Your teams can collaborate in Jira applications by breaking down pieces of work into issues. Issues can represent tasks, software bugs, feature requests or any other type of project work.</p><p><br></p><h3>Jira Software&nbsp;(software projects) issue types:</h3><p><br></p><h1><strong>Bug </strong><span style="background-color: initial;">🐞</span></h1><p>A bug is a problem which impairs or prevents the functions of a product.</p><p><br></p><h1><strong>Story </strong><span style="color: rgb(51, 51, 51);">📗</span></h1><p>A user story is the smallest unit of work that needs to be done.</p><p><br></p><h1><strong>Task </strong><span style="color: rgb(51, 51, 51);">🗳</span></h1><p>A task represents work that needs to be done.</p>',
      estimate: 8,
      timeSpent: 4,
    },
    {
      title: "Click on an issue to see what's behind it.",
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.LOW,
      listPosition: 2,
      description:
        '<h2>Key terms to know</h2><p><br></p><h3>Issues</h3><p>A Jira \'issue\' refers to a single work item of any type or size that is tracked from creation to completion. For example, an issue could be a feature being developed by a software team, a to-do item for a marketing team, or a contract that needs to be written by a legal team.</p><p><br></p><h3>Projects</h3><p>A project is, quite simply, a collection of issues that are held in common by purpose or context. Issues grouped into projects can be configured in a variety of ways, ranging from visibility restrictions to available workflows.</p><p><br></p><h3>Workflows</h3><p>Workflows represent the sequential path an issue takes from creation to completion. A basic workflow might look something like this:</p><p><br></p><p><img src="https://wac-cdn.atlassian.com/dam/jcr:6203a73b-f2a1-4d91-9587-bc4b7d822d6b/workflow_timeline_desktop-temporary.svg?cdnVersion=736" alt="Jira workflow diagram"></p><p><br></p><p>In this case, Open, Done, and the labels in between represent the status an issue can take, while the arrows represent potential transitions from one status to another.</p><p><br></p><h3>Agile</h3><p>Agile is not a Jira Software-specific term. It\'s a work philosophy that originated in the software development field and has since expanded to a variety of other industries.</p>',
      estimate: 5,
      timeSpent: 2,
    },
    {
      title: 'Try dragging issues to different columns to transition their status.',
      type: IssueType.STORY,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.MEDIUM,
      listPosition: 3,
      description:
        "<p>An issue's status indicates its current place in the project's workflow. Here's a list of the statuses that come with Jira products, depending on what projects you've created on your site.</p><p><br></p><h3>Jira software issue statuses:</h3><p><br></p><h2><strong style=\"background-color: rgb(187, 187, 187);\"> Backlog </strong></h2><p>The issue is waiting to be picked up in a future sprint.</p>",
      estimate: 15,
      timeSpent: 12,
    },
    {
      title: 'You can use rich text with images in issue descriptions.',
      type: IssueType.STORY,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.LOWEST,
      listPosition: 4,
      description:
        '<h1><span style="color: rgb(51, 51, 51);">🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥭 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🥬 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🥯 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🍤 🍙 🍚 🍘 🍥 🥮 🥠 🍢 🍡 🍧 🍨 🍦 🥧 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🧂 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽 🥣 🥡 🥢</span></h1>',
      estimate: 4,
      timeSpent: 4,
    },
    {
      title: 'Each issue can be assigned priority from lowest to highest.',
      type: IssueType.TASK,
      status: IssueStatus.SELECTED,
      priority: IssuePriority.HIGHEST,
      listPosition: 5,
      description:
        '<p>An issue\'s priority indicates its relative importance. The default priorities are listed below. Both the priorities and their meanings can be customized by your administrator to suit your organization.</p><p><br></p><h3>Jira software issue priorities:</h3><p><br></p><h3><strong style="background-color: rgb(230, 0, 0); color: rgb(255, 255, 255);"> Highest </strong><span style="color: rgb(51, 51, 51);">⬆️</span></h3><p>This problem will block progress.</p>',
      estimate: 4,
      timeSpent: 1,
    },
    {
      title: 'Each issue has a single reporter but can have multiple assignees.',
      type: IssueType.STORY,
      status: IssueStatus.SELECTED,
      priority: IssuePriority.HIGH,
      listPosition: 6,
      description:
        '<h2>Try assigning <u style="background-color: rgb(204, 232, 204);">Pickle Rick</u> to this issue. <span style="color: rgb(51, 51, 51);">🥒🥒🥒</span></h2>',
      estimate: 6,
      timeSpent: 3,
    },
    {
      title:
        'You can track how many hours were spent working on an issue, and how many hours remain.',
      type: IssueType.TASK,
      status: IssueStatus.INPROGRESS,
      priority: IssuePriority.LOWEST,
      listPosition: 7,
      description:
        "<p>Before you start work on an issue, you can set a time or other type of estimate to calculate how much work you believe it'll take to resolve it. Once you've started to work on a specific issue, log time to keep a record of it.</p>",
      estimate: 12,
      timeSpent: 11,
    },
    {
      title: 'Try leaving a comment on this issue.',
      type: IssueType.TASK,
      status: IssueStatus.DONE,
      priority: IssuePriority.MEDIUM,
      listPosition: 8,
      description:
        '<p>Adding comments to an issue is a useful way to record additional detail about an issue, and collaborate with team members. Comments are shown in the <strong>Comments</strong> section when you <a href="https://confluence.atlassian.com/jira064/what-is-an-issue-720416138.html" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 82, 204);">view an issue</a>.</p>',
      estimate: 10,
      timeSpent: 2,
    },
  ],
  comments: [
    {
      body: 'An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.',
    },
    {
      body: 'Autumn moonlight-\na worm digs silently\ninto the chestnut.',
    },
    {
      body: 'In the twilight rain\nthese brilliant-hued hibiscus -\nA lovely sunset.',
    },
    {
      body: 'A summer river being crossed\nhow pleasing\nwith sandals in my hands!',
    },
    {
      body: "Light of the moon\nMoves west, flowers' shadows\nCreep eastward.",
    },
    {
      body: 'In the moonlight,\nThe color and scent of the wisteria\nSeems far away.',
    },
    {
      body: 'O snail\nClimb Mount Fuji,\nBut slowly, slowly!',
    },
    {
      body: 'Everything I touch\nwith tenderness, alas,\npricks like a bramble.',
    },
  ],
};

export const TestData = {
  users: [
    {
      email: 'gaben@jira.test',
      name: 'Gaben',
      avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
    },
    {
      email: 'yoda@jira.test',
      name: 'Yoda',
      avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
    },
  ],
  project: {
    name: 'Project name',
    url: 'https://www.testurl.com',
    description: 'Project description',
    category: ProjectCategory.SOFTWARE,
    users: [
      {
        email: 'gaben@jira.test',
        name: 'Gaben',
        avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
      },
      {
        email: 'yoda@jira.test',
        name: 'Yoda',
        avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
      },
    ],
  },
  issues: [
    {
      title: 'This is an issue of type: Task.',
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGHEST,
      listPosition: 1,
      reporterId: 'userId1',
      project: {
        name: 'Project name',
        url: 'https://www.testurl.com',
        description: 'Project description',
        category: ProjectCategory.SOFTWARE,
        users: [
          {
            email: 'gaben@jira.test',
            name: 'Gaben',
            avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
          },
          {
            email: 'yoda@jira.test',
            name: 'Yoda',
            avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
          },
        ],
      },
    },
    {
      title: "Click on an issue to see what's behind it.",
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.MEDIUM,
      listPosition: 2,
      estimate: 5,
      description: 'Issue description 2',
      reporterId: 'userId1',
      users: [
        {
          email: 'gaben@jira.test',
          name: 'Gaben',
          avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
        },
      ],
      project: {
        name: 'Project name',
        url: 'https://www.testurl.com',
        description: 'Project description',
        category: ProjectCategory.SOFTWARE,
        users: [
          {
            email: 'gaben@jira.test',
            name: 'Gaben',
            avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
          },
          {
            email: 'yoda@jira.test',
            name: 'Yoda',
            avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
          },
        ],
      },
    },
    {
      title: 'Try dragging issues to different columns.',
      type: IssueType.STORY,
      status: IssueStatus.SELECTED,
      priority: IssuePriority.HIGH,
      listPosition: 3,
      estimate: 10,
      description: 'Issue description 3',
      reporterId: 'userId1',
      users: [
        {
          email: 'gaben@jira.test',
          name: 'Gaben',
          avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
        },
        {
          email: 'yoda@jira.test',
          name: 'Yoda',
          avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
        },
      ],
      project: {
        name: 'Project name',
        url: 'https://www.testurl.com',
        description: 'Project description',
        category: ProjectCategory.SOFTWARE,
        users: [
          {
            email: 'gaben@jira.test',
            name: 'Gaben',
            avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
          },
          {
            email: 'yoda@jira.test',
            name: 'Yoda',
            avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
          },
        ],
      },
    },
  ],
  comments: [
    {
      body: 'Comment body',
      issueId: 'issueId1',
      userId: 'userId1',
    },
  ],
};

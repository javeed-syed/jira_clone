/* eslint-disable @typescript-eslint/no-misused-promises */

import { catchErrors } from 'errors';
import { signToken } from 'utils/authToken';
import resetTestDatabase from 'database/resetDatabase';
import createTestAccount from 'database/createTestAccount';

export const resetDatabase = catchErrors(async (_req, res) => {
  await resetTestDatabase();
  res.respond(true);
});

export const createAccount = catchErrors(async (_req, res) => {
  const user = await createTestAccount();
  if (user) {
    res.respond({
      // eslint-disable-next-line no-underscore-dangle
      authToken: signToken({ sub: user._id }),
    });
  } else {
    res.respond({
      error: 'Failed to create test account.',
    });
  }
});

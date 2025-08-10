/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { catchErrors } from 'errors';
import { signToken } from 'utils/authToken';
import createAccount from 'database/createGuestAccount';

export const createGuestAccount = catchErrors(async (_req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(403).json({ error: 'Disabled in production' });
  }
  const user = await createAccount();
  if (user) {
    res.respond({
      authToken: signToken({ sub: user._id }),
    });
  } else {
    res.respond({
      error: 'Failed to create guest account.',
    });
  }
});
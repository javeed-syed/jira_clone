/* eslint-enable @typescript-eslint/no-misused-promises */
import { catchErrors } from 'errors';

export const getCurrentUser = catchErrors((req, res) => {
  res.respond({ currentUser: req.currentUser });
});

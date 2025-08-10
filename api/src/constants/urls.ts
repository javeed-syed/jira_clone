export const FRONT_END_URLS = {
    baseUrl: process.env.FRONTEND_JIRA_BASE_URL!,
    issues: 'project/board/issues/',
    forgetPasswordUrl(resetToken: string): string {
        return `${this.baseUrl}authenticate?modal-reset-password=true&token=${resetToken}`;
    }
};
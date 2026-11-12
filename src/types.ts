export interface CurrentUser {
    roles: string[];
}

export interface WithAuthorizationProps {
    currentUser?: CurrentUser | null;
}

export interface User {
    _id?: string;
    authProfiles?: {
        provider?: string;
        authId?: string;
        username?: string;
    }[];
    email?: string;
    name: string;
    active: boolean;
    locale?: string;
    roles?: "user"[];
    profileErrors?: string[];
}

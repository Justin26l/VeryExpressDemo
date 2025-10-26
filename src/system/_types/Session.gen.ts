export interface Session {
    _id?: string;
    sessionCode?: string;
    provider: string;
    userId: string;
    /**
     * expired time in unix timestamp format (ms)
     */
    expired: number;
}

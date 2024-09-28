declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_URL: string;
    JWT_SECRET: string;
  }
}

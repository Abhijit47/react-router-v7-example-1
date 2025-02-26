// Create a type for the roles

export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SPOONACULAR_API_URL: string;
      SPOONACULAR_API_KEY: string;
      RECIPE_BASE_URL: string;
      BLOG_BASE_URL: string;
      COUNTRIES_BASE_URL: string;
    }
  }

  interface CustomJwtSessionClaims {
    metadata: {
      role: Roles;
      plan: Plans;
      expireIn?: number;
      isSubscribed?: boolean;
    };
  }
}

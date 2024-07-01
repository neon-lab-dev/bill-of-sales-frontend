const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/api/v1";

export const API_URL = {
  allForms: URL + "/forms",
} as const;

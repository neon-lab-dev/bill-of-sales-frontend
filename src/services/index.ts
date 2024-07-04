const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/api/v1";

export const API_URL = {
  allStates: URL + "/forms/states",
  allFormNames: URL + "/forms/formName",
  allForms: URL + "/forms",
  formsByState: URL + "/forms/state", // + stateName

  postComment: URL + "/postComment",
} as const;

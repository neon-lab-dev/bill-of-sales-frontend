const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/api/v1";

export const API_URL = {
  allStates: URL + "/forms/states",
  allFormNames: URL + "/forms/formName",
  allForms: URL + "/forms",
  formsByState: URL + "/forms/state", // + stateName
  uploadForm: URL + "/uploadForm",
  addState: URL + "/state",

  postComment: URL + "/postComment",
  comments: URL + "/comment", // + postId
  getAllComments: URL + "/getAllComments",

  login: URL + "/login",
  me: URL + "/me",
} as const;

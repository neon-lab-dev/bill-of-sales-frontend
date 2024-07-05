import { fetchData } from "@/helpers/fetchData";
import { API_URL } from ".";
import { IForm, IFormName, IState } from "@/types/form";
import axios from "axios";

export const getAllStates = async () => {
  const data = await fetchData<IState>(API_URL.allStates);
  if (!data) return [];
  return data?.states;
};

export const getAllForms = async () => {
  const data = await fetchData<{
    forms: IForm[];
  }>(API_URL.allForms);
  if (!data) return [];
  return data?.forms;
};

export const getFormsByState = async (stateName: string) => {
  const data = await fetchData<{
    result: IForm[];
  }>(API_URL.formsByState + `/${stateName}`);
  if (!data) return [];
  return data?.result;
};

export const getFormById = async (formId: string) => {
  const data = await fetchData<{
    form: IForm;
  }>(API_URL.allForms + `/${formId}`);
  return data?.form;
};

export const searchByFormName = async (formName: string) => {
  const data = await fetchData<{
    forms: IForm[];
  }>(`${API_URL.allForms}?keyword=${formName}`);
  return data?.forms;
};

export const handleGetAllFormsService = async (
  title: string
): Promise<IForm[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL.allForms}?keyword=${title}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.forms ?? []);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to get forms");
      });
  });
};

export const handleDeleteFormService = async (
  formId: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL.allForms}/${formId}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.message ?? "Form deleted");
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to delete form");
      });
  });
};

export const handleUploadFormService = async (
  form: FormData
): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.uploadForm, form, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.message ?? "Form uploaded");
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to upload form");
      });
  });
};

export const handleAddStateService = async (
  state: FormData
): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.addState, state, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.message ?? "Form added for this state!");
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to add state");
      });
  });
};

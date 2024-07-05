import { fetchData } from "@/helpers/fetchData";
import { API_URL } from ".";
import { IForm, IFormName, IState } from "@/types/form";

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

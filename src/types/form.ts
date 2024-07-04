export interface IForm {
  _id: string;
  formName: string;
  description: string;
  thumbnail: [
    {
      url: string;
    }
  ];
  metaDescription: string;
  forms: {
    _id: string;
    stateName: string;
    forms: {
      fileId: string;
      url: string;
      _id: string;
    }[];
    __v: number;
  }[];
}

export interface IState {
  states: string[];
}

export interface IFormName {
  formName: string;
  _id: string;
}

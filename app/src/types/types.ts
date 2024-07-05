export interface Etiquette {
  _id: string
  nom: string
  ddm: string
  origin: string
  nomScientifique: string
  description: string
  precautions: string[];
  isComplete: boolean;
  lot: string;
  create_at: number;
}



export interface ServerResponse<T> {
  status: "success" | "fail"
  error?: string | any
  message?: string,
  data: {[key: string]: T}
}

export interface ErrorResponse {
  status: string
  error: string | any
  message: string,
}
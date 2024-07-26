export interface Etiquette {
    id: string
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



  export interface User {
    id: string,
    email: string,
    password: string,
    last_login_at: number
    token?: string 
  }
  
  
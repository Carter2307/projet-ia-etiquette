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

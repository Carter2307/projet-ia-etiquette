import type { Etiquette } from "types";


 declare global { namespace Express {
    interface Request {
      etiquette?: Etiquette;
    }
  }

 }
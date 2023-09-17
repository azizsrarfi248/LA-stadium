import { z } from "zod";

// Phone number regex
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

//Trainning presign Form schema
const trainningPreSignRequestSchema = z.object({
  parentLastName: z
    .string({
      required_error: "Le champ Nom du parent est obligatoire.",
    })
    .min(2, "Nom du parent doit comporter au moins 2 caractères.")
    .max(20, "Nom du parent ne doit pas dépasser 20 caractères."),
  parentFirstName: z
    .string({
      required_error: "Le champ Prenom du parent est obligatoire.",
    })
    .min(2, "Prenom du parent doit comporter au moins 2 caractères.")
    .max(20, "Prenom du parent ne doit pas dépasser 20 caractères."),
  phone: z.string().regex(phoneRegex, "Numero telephone invalide."),
  category: z
    .string({
      required_error: "categorie est obligatoire.",
    })
    .min(1, "Choisir une categorie.")
    .max(1, "Choisir une categorie."),
  playerLastName: z
    .string({
      required_error: "Le champ Nom du joueur est obligatoire.",
    })
    .min(2, "Nom du joueur doit comporter au moins 2 caractères.")
    .max(20, "Nom du joueur ne doit pas dépasser 20 caractères."),
  playerFirstName: z
    .string({
      required_error: "Le champ Prenom du joueur est obligatoire.",
    })
    .min(2, "Prenom du joueur doit comporter au moins 2 caractères.")
    .max(20, "Prenom du joueur ne doit pas dépasser 20 caractères."),
});
export default trainningPreSignRequestSchema;

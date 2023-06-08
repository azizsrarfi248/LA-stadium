const { z } = require("zod");

// Phone number regex
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// Touranment Form schema
export const tournamentRequestSchema = z.object({
  teamName: z
    .string({
      required_error: "Le champ du nom de l'équipe est obligatoire.",
    })
    .min(2, "Le nom de l'équipe doit comporter au moins 2 caractères.")
    .max(20, "Le nom de l'équipe ne doit pas dépasser 20 caractères."),
  captinName: z
    .string({
      required_error: "Le champ du nom du capitaine est obligatoire.",
    })
    .min(2, "Le nom du capitaine doit comporter au moins 2 caractères.")
    .max(20, "Le nom du capitaine ne doit pas dépasser 20 caractères."),
  phone: z.string().regex(phoneRegex, "Numero telephone invalide."),
  player0: z
    .string({
      required_error: "Le champ joueur 0 est obligatoire.",
    })
    .min(2, "Le joueur 0 doit comporter au moins 2 caractères.")
    .max(20, "Le joueur 0 ne doit pas dépasser 20 caractères."),
  player1: z
    .string({
      required_error: "Le champ joueur 1 est obligatoire.",
    })
    .min(2, "Le joueur 1 doit comporter au moins 2 caractères.")
    .max(20, "Le joueur 1 ne doit pas dépasser 20 caractères."),
  player2: z
    .string({
      required_error: "Le champ joueur 2 est obligatoire.",
    })
    .min(2, "Le joueur 2 doit comporter au moins 2 caractères.")
    .max(20, "Le joueur 2 ne doit pas dépasser 20 caractères."),
  player3: z
    .string({
      required_error: "Le champ joueur 3 est obligatoire.",
    })
    .min(2, "Le joueur 3 doit comporter au moins 2 caractères.")
    .max(20, "Le joueur 3 ne doit pas dépasser 20 caractères."),
  player4: z
    .string({
      required_error: "Le champ joueur 4 est obligatoire.",
    })
    .min(2, "Le joueur 4 doit comporter au moins 2 caractères.")
    .max(20, "Le joueur 4 ne doit pas dépasser 20 caractères."),
  player5: z
    .string({
      required_error: "Le champ joueur 5 est obligatoire.",
    })
    .min(2, "Le joueur 5 doit comporter au moins 2 caractères.")
    .max(20, "Le joueur 5 ne doit pas dépasser 20 caractères."),
});

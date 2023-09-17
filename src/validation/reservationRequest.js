import { number, z } from "zod";

// Phone number regex
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

//Trainning presign Form schema
const reservationRequestSchema = z.object({
  phone: z.string().regex(phoneRegex, "Numero telephone invalide."),
  reservationDate: z.date({
    required_error: "Le champ Date de reservation est obligatoire.",
  }),
});
export default reservationRequestSchema;

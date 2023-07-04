import * as yup from "yup";

export const testValidationSchema = yup.object().shape({
  // PERSON
  name: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ-ă-ț ]+$/, "Numele trebuie să conțină doar litere")
    .trim()
    .required("Numele este obligatoriu"),

  // SOLUTION 2.2 : Add validation for county field
  county: yup.string().trim().required("Judetul este obligatoriu"),

  isHome: yup.boolean().required(),

  // SOLUTION 3.2 : Add validation for city field
  // -------------
  city: yup.string().trim().required("Orasul este obligatoriu"),
  // -------------

  // SOLUTION 6.2 : Add validation for zipCode field
  // -------------
  zipCode: yup.string().trim().required("cod postal este obligatoriu"),
  // -------------

  // Insert code over this comment.
});

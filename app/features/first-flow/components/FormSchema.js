import * as yup from "yup";

export const testValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ-ă-ț ]+$/, "Numele trebuie să conțină doar litere")
    .trim()
    .required("Numele este obligatoriu"),

  // STEP 2.2 : Add validation for county field
  // county: yup.string().trim().required("Judetul este obligatoriu"),

  isHome: yup.boolean().required(),

  // STEP 3.2 : Add validation for city field
  // -------------

  // -------------

  // STEP 6.2 : Add validation for zipCode field
  // -------------

  // -------------
});

import { useCallback } from "react";

export const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
      } catch (err) {
        const errors = err;
        return {
          values: {},
          errors: errors.inner.reduce((allErrors, currentError) => {
            let errorsResult = {
              ...allErrors,
            };

            if (currentError.path) {
              errorsResult = {
                ...allErrors,
                [currentError.path]: {
                  type: currentError.type ?? "validation",
                  message: currentError.message,
                },
              };
            }

            return errorsResult;
          }, {}),
        };
      }
    },
    [validationSchema]
  );

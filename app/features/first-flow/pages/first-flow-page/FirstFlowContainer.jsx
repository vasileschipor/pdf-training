import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { modifyPdf } from "../../../../common/utils/modifyPdf";
import { displayPDF, downloadPDF } from "../../../../common/utils/handle-pdf";
import { useYupValidationResolver } from "../../../../common/hooks/useYupValidationResolver";
import { testValidationSchema } from "../../components/FormSchema";
import { FirstFlowView } from "./FirstFlowView";

export const FirstFlowContainer = () => {
  // ALL LOGIC SHOULD BE IN THE CONTAINER
  // Always use this hook for validation
  const resolver = useYupValidationResolver(testValidationSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver,
    shouldFocusError: true,
  });

  useEffect(() => {
    const renderEmptyPDF = async () => {
      const modifiedPDF = await modifyPdf({});

      displayPDF(modifiedPDF);
    };
    renderEmptyPDF();
  }, []);

  const handleFormSubmit = async (data) => {
    const modifiedPDF = await modifyPdf(data);

    // STEP 8: on Save button you should download the pdf instead of displaying it
    displayPDF(modifiedPDF);
    // downloadPDF(modifiedPDF);
  };

  return (
    <FirstFlowView
      onSubmit={handleSubmit(handleFormSubmit)}
      register={register}
      errors={errors}
    />
  );
};

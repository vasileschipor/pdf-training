import { rgb } from "pdf-lib";
import { PDF_URLS } from "../constants/pdf-urls";
import { BASE_TEXT_STYLES } from "../constants/text-styles";
import { loadPDF } from "./handle-pdf";

// SOLUTION 5.1 : Add coords import
import { FIRST_FLOW_FIELDS_OPTIONS } from "../../features/first-flow/constants/field-options";

// total page width: 595 / height 842
// one pdf line has aprox 15px height

export async function modifyPdf(data) {
  const pdfDoc = await loadPDF(PDF_URLS.firstPdf);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // SOLUTION 1: Draw name text over fields

  // SOLUTION 2.3 Draw county text over fields at these coords:
  // x: 450,
  // y: 655,

  // Insert code between lines
  //  ------------------------------

  //  ------------------------------

  // SOLUTION 3.3 Draw city text over fields. (You need to find the coords yourself.)

  // Insert code between lines
  //  ------------------------------

  //  ------------------------------

  // SOLUTION 5.2: Comment all the above drawText function calls
  // SOLUTION 5.3: Uncomment the code below

  Object.keys(data).forEach((key) => {
    drawText({
      page: firstPage,
      options: FIRST_FLOW_FIELDS_OPTIONS[key],
      value: data[key],
    });
  });
  // SOLUTION 5.4: City field is not working. Fix it.

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

// SOLUTION 4: Uncomment the drawText function and replace all "firstPage.drawText" with "drawText" function
const drawText = ({ page, options, value }) => {
  // draw X over checkbox if value is boolean
  if (typeof value === "boolean") {
    page.drawText(value ? "X" : "", {
      ...BASE_TEXT_STYLES,
      ...options,
    });
    return;
  }
  // draw text over fields
  page.drawText(value, {
    ...BASE_TEXT_STYLES,
    ...options,
  });
};

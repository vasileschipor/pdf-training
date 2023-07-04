import { rgb } from "pdf-lib";
import { PDF_URLS } from "../constants/pdf-urls";
import { BASE_TEXT_STYLES } from "../constants/text-styles";
import { loadPDF } from "./handle-pdf";

// STEP 5.1 : Add coords import
// import { FIRST_FLOW_FIELDS_OPTIONS } from "../../features/first-flow/constants/field-options";

// total page width: 595 / height 842
// one pdf line has aprox 15px height

// STEP 5.2: Comment all drawText function calls from this function
export async function modifyPdf(data) {
  const pdfDoc = await loadPDF(PDF_URLS.firstPdf);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // STEP 1: Draw name text over fields

  // firstPage.drawText(data.name, {
  //   x: 230,
  //   y: 670,
  //   size: 16,
  //   color: rgb(0.95, 0.1, 0.1),
  // }

  // STEP 2.3 Draw county text over fields at these coords:
  // x: 450,
  // y: 655,

  // Insert code between lines
  //  ------------------------------

  //  ------------------------------

  // STEP 3.3 Draw city text over fields. (You need to find the coords yourself.)

  // Insert code between lines
  //  ------------------------------

  //  ------------------------------

  // STEP 5.3: Uncomment the code below

  // Object.keys(data).forEach((key) => {
  //   drawText({
  //     page: firstPage,
  //     options: FIRST_FLOW_FIELDS_OPTIONS[key],
  //     value: data[key],
  //   });
  // });
  // STEP 5.4: City field is not working. Fix it. (If you can't find the coords, search for HINT)

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

// STEP 4: Uncomment the drawText function and replace all "firstPage.drawText" with "drawText" function
// const drawText = ({ page, options, value }) => {
//   // draw X over checkbox if value is boolean
//   if (typeof value === "boolean") {
//     page.drawText(value ? "X" : "", {
//       ...BASE_TEXT_STYLES,
//       ...options,
//     });
//     return;
//   }
//   // draw text over fields
//   page.drawText(value, {
//     ...BASE_TEXT_STYLES,
//     ...options,
//   });
// };

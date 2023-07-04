import { PDFDocument } from "pdf-lib";

export const displayPDF = (bytes) => {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const iframe = document.getElementById("pdf-iframe");
  iframe.src = url;
};

export const downloadPDF = (bytes) => {
  const blob = new Blob([bytes], { type: "application/pdf" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "output.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const loadPDF = async (url) => {
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  return pdfDoc;
};

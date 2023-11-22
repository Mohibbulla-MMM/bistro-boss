import { Margin, usePDF } from "react-to-pdf";
// import  { Resolution, Margin, Options ,usePDF } from "react-to-pdf";
import Card from "./Card";
// import { Card } from "./Card";
// import { Button } from "./Button";
// import { Container } from "./Container";
 
const PdfPage = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM },
  });
  console.log(toPDF);
  return (
    <div>
      <section>
        <button onClick={toPDF} className="btn mb-10  rounded-none btn-secondary ">Download PDF</button>
        <div ref={targetRef} className="bg-red-500 p-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            beatae magnam quibusdam veritatis iusto amet alias, impedit illum
            animi doloremque, asperiores sed inventore facilis, soluta deleniti
            quod sint dolorem totam!
          </p>
          <div>
          {Array(5)
          .fill(0)
          .map((_, index) => (
            <Card
              imageId={30 + index}
              key={index}
              title={`Multipage support, card #${index + 1}`}
            />
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PdfPage;

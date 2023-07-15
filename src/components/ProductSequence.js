import { ScrollContainer, SequenceSection } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

function ProductSequence() {
  const currentURL = window.location.href; // returns the absolute URL of a page

  const pathname = window.location.pathname; //returns the current url minus the domain name
  return (
    <>
      <SequenceSection
        end="300%"
        imagesPath="/img1"
        imagesCount={74}
        imagesType="jpg"
      />

      <SequenceSection
        end="300%"
        imagesPath="/img2"
        imagesCount={101}
        imagesType="jpg"
      />
    </>
  );
}

export default ProductSequence;

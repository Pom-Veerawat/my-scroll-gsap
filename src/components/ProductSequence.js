import { ScrollContainer, SequenceSection } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

function ProductSequence() {
  const currentURL = window.location.href; // returns the absolute URL of a page

  const pathname = window.location.pathname; //returns the current url minus the domain name
  return (
    <ScrollContainer>
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Demo</h1>
      </section>
      <SequenceSection
        end="300%"
        imagesPath="/img1"
        imagesCount={74}
        imagesType="jpg"
      />
      
      <div
        style={{
          width: "200px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SequenceSection
          end="300%"
          imagesPath="/img2"
          imagesCount={101}
          imagesType="jpg"
        />
      </div>
     
    </ScrollContainer>
  );
}

export default ProductSequence;

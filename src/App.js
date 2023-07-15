import logo from "./logo.svg";
import "./App.css";
import ProductSequence from "./components/ProductSequence";
import ScrollContent from "./components/ScrollContent";
import TimeLine from "./components/TimeLine";
import { ScrollContainer, SequenceSection } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import HorizontalSequenceItem from "./components/HorizontalSequenceItem";
import ImagePara from "./components/ImagePara";
function App() {
  return (
    <div className="App">
      <ScrollContainer>
        
        <TimeLine />
        <HorizontalSequenceItem />
        <section
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Scroll down to see magic</h1>
        </section>
        <ProductSequence />
        <section
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Hot Product</h1>
          
        </section>
        <ImagePara/>
        <section
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Click here to buy product</h1>
        </section>
      </ScrollContainer>

      {/*   <ScrollContent /> */}
    </div>
  );
}

export default App;

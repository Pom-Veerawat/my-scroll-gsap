import { ScrollContainer , HorizontalSection } from 'react-nice-scroll';
import "react-nice-scroll/dist/styles.css";
function HorizontalSequenceItem()
{

    return (
        <>
          <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>New Product!</h1>
          </section>
          <HorizontalSection>
            <div className="ns-horizontal-section__item" style={{width:'1600px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui ligula, commodo quis quam in, accumsan
              finibus dolor. Nunc ac finibus purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna. Duis eu
              imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh, lobortis eget turpis eget, iaculis condimentum
              lacus.
            </div>
            <div className="ns-horizontal-section__item" style={{width:'1600px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui ligula, commodo quis quam in, accumsan
              finibus dolor. Nunc ac finibus purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna. Duis eu
              imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh, lobortis eget turpis eget, iaculis condimentum
              lacus.
            </div>
            <div className="ns-horizontal-section__item" style={{width:'1600px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui ligula, commodo quis quam in, accumsan
              finibus dolor. Nunc ac finibus purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna. Duis eu
              imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh, lobortis eget turpis eget, iaculis condimentum
              lacus.
            </div>
          </HorizontalSection>
          <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Keep scrolling!!</h1>
          </section>
        </>
      );
}
export default HorizontalSequenceItem;
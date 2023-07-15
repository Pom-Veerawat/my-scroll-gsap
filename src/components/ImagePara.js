import { ScrollContainer , HorizontalSection, ParallaxImage } from 'react-nice-scroll';
import "react-nice-scroll/dist/styles.css";
function ImagePara()
{
    return (
        <>
          <section
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1>Hello World!</h1>
          </section>
          <ParallaxImage src="./cover.jpg" />
          
          <section
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1>Hello World!!</h1>
          </section>
          <ParallaxImage src="./cover2.jpg" />
        </>
      );
}
export default ImagePara;
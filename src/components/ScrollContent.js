import { useLayoutEffect ,useRef} from "react";
import { gsap } from "gsap";
function ScrollContent() {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 300,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div>
     
      <div className="boxes-container" ref={main}>
        <div className="box">box</div>
        <div className="box">box</div>
        <div className="box">box</div>
      </div>
      
    </div>
  );
}

export default ScrollContent;

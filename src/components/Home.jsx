


import { useState, useEffect } from "react";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css"; 

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full Stack Developer", "Software Engineer",];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner bg-gradient-to-r from-purple-700 to-blue-700 text-white py-20 h-screen flex items-center" id="home">
      <div className="container mx-auto px-4">
        <div className="flex  items-center">
          <div className="text-left md:w-2/3">
            <span className="tagline">
              Welcome to my Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Hi! I'm Aayush Pratap Bansal{" "}
              <span className="txt-rotate">
                <span className="text-purple-900">{text}</span>
              </span>
            </h1>
             <p className=" text-gray-300 text-2xl md:text-3xl font-semibold">
                       Through my education at <span className="text-purple-900"> Delhi Technological University (COE) , New Delhi </span>and hands-on 
                    experience, I create functional and visually appealing digital experiences.
           </p>


          </div>

            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>

        </div>
      </div>
    </section>
  );
};
export default Home;

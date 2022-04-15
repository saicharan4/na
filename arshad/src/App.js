import { useState } from "react";
import "./App.css";

function App() {
  const [flag, setFlag] = useState(1);
const [flag1, setFlag1] = useState(false);
const [button, setButton] = useState(false);

const change=()=>{
setFlag1(true)

}


  return (
    <>
      <>
        <div className="bigContainer">
          | Q&A | Upload Files / Folders | Doc Analytics | Doc Classification
          <div className="docTitle">
            <div className="title2">Doc Analytics</div>

            <hr />
            <div className="flex">
              <div
                onClick={() => {
                  setFlag(1);
                }}
                className={flag == 1 ? "docClicked" : "doc"}
              >
                Doc Classification
              </div>

              <div
                onClick={() => {
                  setFlag(2);
                }}
                className={flag == 2 ? "knowClicked" : "know"}
              >
                Know Your Doc
              </div>
            </div>

            <div className={flag == 2 ? "hidden" : " "}></div>

            <div className={flag == 1 ? "hidden" : " "}>
              <div onChange={() => change()} className="flexbox">
                <div>
                  <select id="select" name=" " className="dropdownDesign">
                    <option value="doc" disabled selected hidden>
                      <p>Select Doc Type</p>
                    </option>
                    <option value="Form10k">
                      From - 10k Exploratory Data Analysis
                    </option>
                    <option value="LPA">LPA</option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={() => setButton(true)}
                    className={flag1 ? "btn-get " : "btn-getD"}
                  >
                    GET EDA
                  </button>
                </div>
              </div>

              <div className={flag==2 && button ? "imagesOn" : "imagesOf"}>
                <div className="flex1">
                  <div>
                  <img className="imageStyle" src="/images/img.png"></img>
                </div>
                <div>
                  <img className="imageStyle" src="images/img1.png"></img>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default App;

import ReactDom from 'react-dom/client';
import Education from "./Education";
import Field from "./Field";
import Option from "./Option";
import Refer from "./Refer";
import Sub from "./Sub";
import Zoho from "./Zoho";
import React, { useState } from "react";


function App() {
  const [page, setPage] = useState(1);
  return (
    <>
   
      <div>
        {/* {
            page == 1 ? <Zoho/>: page == 2 ? <Education /> : <Field />
           } */}
        {
          page == 1 ? <Zoho /> : page == 2 ? <Education /> : page == 3 ? <Field /> : page == 4 ? <Option /> : page == 5 ? <Refer /> : <Sub />
        }
        <center>
          <button style={{
            float: "center",
            color: "deepskyblue",
            backgroundColor: "white",
            margin: "1rem",
            padding: "1rem",
          }}
            onClick={() => {
              const nextPage = page - 1;
              setPage(nextPage);
            }}>
            Back
          </button>
          <button
            style={{
              float: "center",
              color: "deepskyblue",
              backgroundColor: "white",
              margin: "1rem",
              padding: "1rem",

            }}
            onClick={() => {
              const nextPage = page + 1;
              setPage(nextPage);
            }}>
            Next
          </button>
        </center>
        {/* <Zoho/>
        <Education/>
        <Field/>
        <Option/>
        <Refer/>
        <Sub/> */}
      </div>

    </>
  );
};

export default App;
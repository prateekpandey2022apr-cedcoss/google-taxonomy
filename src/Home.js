import React, { useEffect, useState } from "react";

function Home() {
  const [result, setResult] = useState([]);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");

  useEffect(() => {
    fetch("./data.txt")
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);

        const categories = {};

        const lines = data.split("\n");
        // console.log(lines);
        lines.forEach((line) => {
          const items = line.split(" > ");
          items.forEach((item, idx) => {
            // const prev;
            // debugger;
            if (!categories.hasOwnProperty(item)) {
              categories[item] = [];
            } else {
              if (!categories[item].includes(items[idx + 1])) {
                categories[item].push(items[idx + 1]);
              }
            }
          });
        });

        setResult(categories);

        console.log(categories);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="row">
        <select
          value={option1}
          onChange={(event) => {
            setOption1(event.target.value);
            setOption2("");
            setOption3("");
            setOption4("");
            setOption5("");
          }}
        >
          <option value="">Select Category</option>
          {Object.keys(result).map((key, idx) => {
            return <option value={key}>{key}</option>;
          })}
        </select>

        <br />

        {option1 && (
          <select
            value={option2}
            onChange={(event) => {
              setOption2(event.target.value);
              setOption3("");
              setOption4("");
              setOption5("");
            }}
          >
            <option value="">Select Category</option>
            {result[option1].map((key, idx) => {
              return <option value={key}>{key}</option>;
            })}
          </select>
        )}

        <br />

        {option2 && (
          <select
            value={option3}
            onChange={(event) => {
              setOption3(event.target.value);
              setOption4("");
              setOption5("");
            }}
          >
            <option value="">Select Category</option>
            {result[option2].map((key, idx) => {
              return <option value={key}>{key}</option>;
            })}
          </select>
        )}

        <br />

        {option3 && (
          <select
            value={option4}
            onChange={(event) => {
              setOption4(event.target.value);
              setOption5("");
            }}
          >
            <option value="">Select Category</option>
            {result[option3].map((key, idx) => {
              return <option value={key}>{key}</option>;
            })}
          </select>
        )}

        <br />

        {option4 && (
          <select
            value={option5}
            onChange={(event) => setOption5(event.target.value)}
          >
            <option value="">Select Category</option>
            {result[option4].map((key, idx) => {
              return <option value={key}>{key}</option>;
            })}
          </select>
        )}
      </div>
    </div>
  );
}

export default Home;

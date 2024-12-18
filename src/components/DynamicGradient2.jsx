"use client";

// This component is a general version for n colors
import { useState, useEffect } from "react";

export default function DynamicGradient2() {
  // here we make colors an array in order to handle any amount of colors
  const [colors, setColors] = useState(["#ff0000", "#ffff00"]);
  const [angle, setAngle] = useState(60);
  const [cssString, setCssString] = useState("");
  const [viewCss, setViewCss] = useState(false);
  const [showForm, setShowForm] = useState(true);

  function handleCopy() {
    navigator.clipboard.writeText(`background-image: ${cssString};`);
  }

  function handleShowForm() {
    setShowForm(!showForm);
  }

  //   i split up the use Effects here to make the code clearer
  useEffect(() => {
    const newCssString = `linear-gradient(${angle}deg, ${colors.join(", ")})`;
    setCssString(newCssString);
  }, [colors, angle]);

  useEffect(() => {
    document.querySelector("main").style.backgroundImage = cssString;
  }, [cssString]);

  function handleColorChange(index, newColor) {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  }

  function addColor() {
    setColors([...colors, "#000000"]); // add a new color (default black)
  }
  function removeColor(index) {
    setColors(colors.filter((x, i) => i != index)); //removes color[index] from the array. the filter function always passes two arguments to the callback: the element and the index, hence the need for x even though its not used
  }

  return (
    <>
      <main className="w-screen h-screen p-2">
        <section className="">
          <button
            onClick={handleShowForm}
            className="w-6 h-6   font-bold text-3xl"
          >
            {showForm ? "-" : "+"}
          </button>
          {showForm ? (
            <>
              <form className="flex flex-col w-56 rounded-md border-2 opacity-80 p-2 bg-slate-200">
                {colors.map((color, index) => (
                  <div key={index} className="flex  mb-2">
                    <label htmlFor={`color${index}`}>color {index + 1}</label>
                    <input
                      type="color"
                      id={`color${index}`}
                      name={`color${index}`}
                      value={color}
                      onChange={(e) => handleColorChange(index, e.target.value)}
                      className="ml-2"
                    />
                    {colors.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeColor(index)}
                        className="ml-2 bg-slate-400 rounded-md text-white border-2 hover:shadow-md hover:font-semibold px-2  "
                      >
                        remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addColor}
                  className="bg-blue-400 text-white  px-2 w-24 shadow-md  rounded mb-4 hover:font-semibold"
                >
                  Add Color
                </button>
                <label htmlFor="angle">Angle of Gradient</label>
                <input
                  type="number"
                  id="angle"
                  name="angle"
                  className="w-16 bg-slate-300 rounded-md py-0.5 px-1 border-2"
                  value={angle}
                  onChange={(e) => setAngle(e.target.value)}
                />
                <div className="flex flex-row gap-4 mt-4">
                  <label htmlFor="viewCss" className="">
                    view CSS
                  </label>
                  <input
                    type="checkbox"
                    id="viewCss"
                    name="viewCss"
                    checked={viewCss}
                    onChange={(e) => setViewCss(e.target.checked)}
                  />
                </div>
              </form>
              {viewCss && (
                <div className="bg-slate-300 w-80 mt-4 p-1 rounded-md  border-2 relative">
                  <button
                    onClick={handleCopy}
                    className="top-0 right-1 absolute font-semibold hover:font-bold"
                  >
                    copy
                  </button>
                  <p className="text-wrap mt-4">
                    background-image&#58; {cssString}&#59;
                  </p>
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </section>
      </main>
    </>
  );
}

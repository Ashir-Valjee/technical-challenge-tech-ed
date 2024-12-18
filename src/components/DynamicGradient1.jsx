"use client";
// import "@/app/globals.css";
import { useState, useEffect } from "react";

export default function DynamicGradient1() {
  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#ffff00");
  const [color3, setColor3] = useState("#00ff00");
  const [useThirdColor, setUseThirdColor] = useState(false);
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

  useEffect(() => {
    const newCssString = useThirdColor
      ? `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`
      : `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    setCssString(newCssString);

    document.querySelector("main").style.backgroundImage = cssString;
  }, [color1, color2, color3, useThirdColor, angle, cssString]);
  return (
    <>
      <main className=" w-screen h-screen pt-2">
        <section className="ml-2">
          <button
            onClick={handleShowForm}
            className="w-6 h-6   font-bold text-3xl"
          >
            {showForm ? "-" : "+"}{" "}
          </button>
          {showForm ? (
            <>
              <form className="flex flex-col w-44 rounded-md border-2 opacity-80 p-2 bg-slate-200">
                <label htmlFor="color1">color 1&#58;</label>
                <input
                  type="color"
                  id="color1"
                  name="color1"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                />
                <label htmlFor="color2">color 2&#58;</label>
                <input
                  type="color"
                  id="color2"
                  name="color2"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                />
                <div className="flex flex-row gap-4">
                  <label htmlFor="useThirdColor" className="">
                    use third color
                  </label>
                  <input
                    type="checkbox"
                    id="useThirdColor"
                    name="useThirdColor"
                    checked={useThirdColor}
                    onChange={(e) => setUseThirdColor(e.target.checked)}
                  />
                </div>
                {useThirdColor && (
                  <>
                    <label htmlFor="color3">color 3&#58;</label>
                    <input
                      type="color"
                      id="color3"
                      name="color3"
                      value={color3}
                      onChange={(e) => setColor3(e.target.value)}
                    />
                  </>
                )}

                <label htmlFor="angle">angle of gradient&#58;</label>
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

import "./App.css";

import { ReactNode, useState } from "react";

import Button from "./Button";

const keys: string[] = [
  "/",
  "*",
  "1",
  "2",
  "3",
  "-",
  "4",
  "5",
  "6",
  "+",
  "7",
  "8",
  "9",
  "0",
  ".",
];

function App() {
  const [result, setResult] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const getResults = () => {
    try {
      const newResult: string = eval(result);
      setResult(`${newResult}`);
    }
    catch {
      setErr("Syntax Error");
    }
  };

  return (
    <>
      <div className="err">{err}</div>
      <main>
        <h1>{result || 0}</h1>
        <div className="grid">
          <div className="button  del" onClick={() => setResult(prev => prev.slice(0, -1))}>del</div>
          {keys.map(
            (key: string): ReactNode => (
              <Button
                setResult={setResult}
                setErr={setErr}
                key={key}
                className={key === "0" ? "zero" : null}
                label={key}
              />
            )
          )}
          <div className="button eql" onClick={getResults}>
            =
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

import { Dispatch, SetStateAction } from "react";

function Button({ label, className, setResult, setErr }: { label: string, className: string | null, setResult: Dispatch<SetStateAction<string>>, setErr: Dispatch<SetStateAction<string>> }) {
    return <div onClick={() => {
        setResult(prev => prev + label)
        setErr("")
    }} className={className? className + " button" : "button"}>{label}</div>;
}

export default Button;

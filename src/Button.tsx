import { Dispatch, SetStateAction } from "react";

function Button({ label, className, setResult }: { label: string, className: string | null, setResult: Dispatch<SetStateAction<string>> }) {
    return <div onClick={() => setResult(prev => prev + label)} className={className? className + " button" : "button"}>{label}</div>;
}

export default Button;

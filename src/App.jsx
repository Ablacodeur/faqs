import Faq from "./components/Faq/Faq";
import s from "./style.module.css"
import { CCircle } from "react-bootstrap-icons";

const year = new Date().getFullYear() ;
export function App() {
  return (
    <div className={`${ s.container } d-flex flex-column`}>
      <Faq />
      <p className={`d-flex align-items-center ${s.copy } text-muted`}><CCircle  />opyright {year} by Ablacodeur </p>

    </div>
    );
}


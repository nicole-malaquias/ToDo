import * as S from "./styled"
import { useHistory } from "react-router-dom";
import {CgArrowRightR , CgArrowLeftR} from "react-icons/cg"

const Header = () => {
  
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <S.Container>
 
      <div className="sendTo" onClick={() => sendTo("/")} >
        <h2>Home</h2>
        <CgArrowLeftR size={30} color="#3FAD27" />     
      </div>

      <div className="sendTo" onClick={() => sendTo("/finish")} >
        <h2>Completed</h2>
        <CgArrowRightR  size={30} color="#3FAD27" />  
      </div>

    </S.Container>
  )
}

export default Header
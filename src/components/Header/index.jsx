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
      <S.Central>
        <div className="sendTo" onClick={() => sendTo("/")} >
          <h2>  <CgArrowLeftR size={30} color="#3FAD27" /> Home</h2>
              
        </div>

        <div className="sendTo" onClick={() => sendTo("/finish")} >
          <h2> <CgArrowRightR  size={30} color="#3FAD27" /> Completed </h2>
          
        </div>
      </S.Central>
    </S.Container>
  )
}

export default Header
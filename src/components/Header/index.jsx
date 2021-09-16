import * as S from "./styled"
import { useHistory } from "react-router-dom";

import { IoIosJournal } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

const Header = () => {
  
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <S.Container>
      <S.Central>
        <div className="sendTo" onClick={() => sendTo("/")} >
          <h2>  <IoMdHome size={30} color="#ffffff" /> Home</h2>
              
        </div>

        <div className="sendTo" onClick={() => sendTo("/finish")} >
          <h2> <IoIosJournal  size={30} color="#ffffff" /> Completed </h2>
          
        </div>
      </S.Central>
    </S.Container>
  )
}

export default Header
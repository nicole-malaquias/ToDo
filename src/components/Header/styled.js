import styled from "styled-components";

export const Container = styled.div`
    background: #043819;
    background: linear-gradient(90deg,#043819 0%, #2b802b 80%);
    background: -webkit-linear-gradient(90deg,#043819 0%, #2b802b 80%);
    background: -moz-linear-gradient(90deg,#043819 0%, #2b802b 80%);
    
    display: flex;
    flex-direction:row;
    justify-content:center;
    
    align-items:flex-end;
    height: 200px;
`

export const Central = styled.div`
    width: 100%;
    max-width: 1400px;
   
    display: flex;

    div {
        
        width: 50%;
        display: flex;
        justify-content: space-between;
        h2 {
            font-size:2rem;
            color:  var(--shapes)
        }
        :first-child {
            justify-content: flex-start;
            margin-left: 1rem;
        }
        :last-child {
            justify-content: flex-end;
            margin-right: 1rem;
        }
    }

`

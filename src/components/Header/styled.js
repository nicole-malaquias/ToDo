import styled from "styled-components";

export const Container = styled.div`
    background: #043819;
    background: linear-gradient(90deg,#043819 0%, #2b802b 80%);
    background: -webkit-linear-gradient(90deg,#043819 0%, #2b802b 80%);
    background: -moz-linear-gradient(90deg,#043819 0%, #2b802b 80%);
    
    display: flex;
    flex-direction:row;
    
    align-items:flex-end;
    height: 200px;

    div {
       
        max-width: 1120px;
        margin: 0 auto;

        padding: 2rem 1rem 8rem;

        display: flex;
        flex-direction:row;
        
        justify-content: space-between;

        h2 {
            font-size:2.3rem;
            color:  var(--shapes)
        }
    }

    .sendTo {
        :first-child{
            justify-content: flex-start;
        }

        display: flex;
        justify-content: flex-end;
        align-items:   center;

        padding:3px;
        width:50%; 
    }

`
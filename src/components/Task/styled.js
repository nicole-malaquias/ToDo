import styled from "styled-components";

export const Container = styled.li`

    display: flex;
    justify-content: center;
    margin-top: 3rem;
   
    div, .div {
        background: var(--shapes);
        display: flex;
        justify-content: center;
        align-items: center;
       
        border-radius: 5rem;
        min-width:50rem;
        gap: 14px;
        outline: 0;
        box-shadow: gray 0.1rem 0.1rem 0.1rem 0.001rem ;

        p {
        font-size: 2.5rem;
        color: var(--text);
        }

        &.completed {
        p {
            text-decoration:line-through;
            opacity: 0.6;
          }
        }

        input + p {
            margin: 0  3rem 0 3rem;
        }

        .checkbox-container {
            display: block;
            position: relative;
            padding-left: 14px;
            margin-bottom: 18px;
        
            input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;

                &:checked {
                    & ~ .checkmark {
                        background-color: var(--blue);
                    }

                    & ~ .checkmark:after {
                        display: block;
                    }
                } 
            }
    
            .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                width: 16px;
                height: 16px;
                background-color: var(--background);
                border-radius: 2px;
            
                &:after {
                content: "";
                position: absolute;
                display: none;
                left: 6px;
                top: 3px;
                width: 3px;
                height: 6px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
                }
            }
         }
        button {
            background: transparent;
            border: 0;

            svg {
            color: var(--red);
            }

            &:hover {
            svg {
                filter: brightness(0.5)
            }
            }
        }
    }
` 

export const ContainerModal = styled.div`
    border:2px solid black;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    position: fixed;
    height:100vh;
    width: 100vw;
    background: rgb(11,10,10,29%);


    .modal-content {
        position: absolute;
        left:50%;
        top:50%;

        
        height: 150px;
        width:600px;
        
        transform: translate(-50%,-50%);
        display:flex;
        align-items: center;
        justify-content:center;

        background: var(--shapes);
        border-radius: 2rem;


        button {
            height: 25px;
            width:70px;
            margin:3px ;
            border: none;
            border-radius: 5px;
        }

        button:nth-of-type(1){
            background: var(--green);
        } 
        button:nth-of-type(2){
            background: red;
        }        
    }
    
    
     
`
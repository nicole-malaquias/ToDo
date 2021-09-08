import styled from "styled-components";

export const Container = styled.li`

    display: flex;
    justify-content: center;
    margin-top: 3rem;
   
    div, .div {
        background: #ffffff;
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


    div, .modal-content {
        
        color: var(--text-title);
        
        position: fixed;
        top:5rem;
        width:25rem;
        height: 12rem;

        background: white;

        border-radius: 1rem;
        display:flex;

        button {

            width:5rem;
            height:2.5rem;
            border-radius: 0.25rem;
            border:1px solid #3D3D4D;

            color: var(--text-title);

        }
    }
    
     
`
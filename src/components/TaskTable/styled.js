import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    background: var(--shapes);
    border-radius: 1rem;

    max-width: 800px;
    margin: auto;
    margin-top: -9rem;
    padding: 70px 60px;
    filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
    
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      
      h2 {
        color: var(--text-title);
        font-size: 2.25rem;
      }

    }
` 
  

export const ContainerInput = styled.div`
        display: flex;
        gap: 0.25rem;
        align-items: center;
  
        background: #fff;
        font-size: 16px;
        
        input {
          flex: 1;
          background: var(--background);
          border: 0;
          color: var(--text);
          padding: 12px 24px;
          
          border-radius: 8px;
          border: 0;
          
          &::placeholder {
            color: var(--text-light)
          }
        }
  
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: var(--green);
          color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
  
          padding: 14px;
          transition: filter 0.2s;
  
          &:hover {
            filter: brightness(0.95);
          }
        }
      `


export const ContainerTasks = styled.div`
    margin-top: 4rem;

    ul {
      list-style: none; 
    }
    .finish {

      display: flex;
      align-items: center;
      margin-top: -4rem;
      margin-left:80%;
      
      a {
        margin-right: 1rem;
        color: var(--shapes);
        font-size: 2.0rem;
      }
      a:link, a:visited {
        text-decoration: none
      }
      a:hover {
        text-decoration: underline;
        color: #f00
      }
      a:active {
        text-decoration: none
      }
      
    }
    `
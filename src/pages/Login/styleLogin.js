import { Input } from "@nextui-org/react";
import styled from "styled-components";

export const Container= styled.div`
width: 19rem;
height: 26rem;

display: flex;
flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    
box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
border-radius: 0.5rem;



    background: var(--Grey-3);
    color: var(--Grey-0);
    
    `

export const DivButton=styled.div`
        display: flex;
    flex-direction: column;
    align-items: center;
`
export const DivVoltar=styled.div`

display: flex;
    padding-top: 40px;
`


export const Div2=styled.div`

`

export const DivInfo=styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
`



export const InputNextUi=styled(Input)`

placeholder{
    color: white;
}

`
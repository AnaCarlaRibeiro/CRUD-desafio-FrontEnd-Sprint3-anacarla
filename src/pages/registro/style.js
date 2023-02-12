import { Button} from "@nextui-org/react";
import styled from "styled-components";



export const Form=styled.form`
        display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

`
export const Header=styled.div`
    color: var(--Color-primary);

`

export const Container=styled.div`

width: 25rem;
height: 50rem;

margin: auto;


box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

background: var(--Grey-3);
color: var(--Grey-0);    
`


export const DivInput=styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    gap: 23px;
    margin: 59px;
    padding: 5px;

`
export const InputRegister=styled.input`
width: 16.487rem;
height: 2.399rem;
background: var(--Grey-2);

`

export const DivBtn=styled.div`
display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;


`
export const DivSelect=styled.div`

select{
    height: 41px;
    border-radius: 11px;
    height: 41px;
    border-radius: 11px;
    color: #808080eb;
    font-size: 14px;
    width: 266px;
    option{

    }
}
`


export const BtnNextUi=styled(Button)`
width: 2px;
`
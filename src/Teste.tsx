import styled from 'styled-components';

type BtnProps = {
    primary: boolean,
    fs?: string    
}

const Button = styled.button<BtnProps>`
    background-color: ${props => props.primary ? 'green' : 'red'};
    color: white;
    font-size: ${props => props.fs || '1rem'}
`;

const DangerBtn = styled(Button)`
    background-color: red;
    color: white;

    span {
        text-decoration: line-through;
    }
`;



function Teste() {
    return(
        <>
            <Button primary>Salve</Button>
            <Button fs="1em" primary={false}>Cancelar</Button>
            <DangerBtn primary>
                <span>Danger</span>
            </DangerBtn>
        </>

    );
}

export default Teste;
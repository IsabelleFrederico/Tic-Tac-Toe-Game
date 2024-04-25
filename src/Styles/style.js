import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgb(255, 255, 255);
`

export const Button = styled.button`
    border-radius: ${props => props.add ? "100%" : '20px'};
    border-color: rgb(67 81 90);
    background-image: linear-gradient( rgb(253 126 0),  rgb(248 179 77));
    color: rgb(39 47 52);
    font-size: ${props => props.add ? "28px" : '16px'};
    padding: ${props => props.add ? "18px 24px" : '12px'};
    margin-top: ${props => props.main ? "6%" : 'auto'};
    margin-left: ${props => props.logout ? "18px" : ''};
    cursor: pointer;
    font-weight: bold;

    @media only screen and (max-width: 505px){
        padding: ${props => props.add ? "12px 16px" : '12px'};
        font-size: ${props => props.comment ? "12px" : ''};
    }
    
`


export const ContainerButtonFloat = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 80% ;

    @media only screen and (max-width: 836px){
        right:${props => props.alert ? "30vh" : '5px'};
    }

    @media only screen and (max-width: 505px){
        bottom:${props => props.alert ? "40vh" : ''};
        right:${props => props.alert ? "5vh" : ''};
    }
`


export const Title = styled.h1`
    color: rgb(53, 53, 53);
    font-size: ${props => props.errorPage ? "28px" : '2em'};
    font-family: verdana;
    margin: ${props => props.error ? "0" : ''};        
`
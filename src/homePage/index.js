import React from 'react';
import styled, { ThemeProvider, keyframes,  css } from 'styled-components';
// Define our button, but with the use of props.theme this time
const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;
const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;
  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;
  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
// Define our `fg` and `bg` on the theme
const theme = {
  fg: "palevioletred",
  bg: "white"
};
const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
  });

function Home(){
    return ( 
      <ThemeProvider theme={theme}>  
        <div>
          <Wrapper>
          <Title>Hello hello!!</Title>
          
          
            <div>
          <Button>Default Theme</Button>
          <ThemeProvider theme={invertTheme}>
            <Button>Inverted Theme</Button>
          </ThemeProvider>
          </div>
          </Wrapper>
        </div>
        <Rotate>&lt; 💅 &gt;</Rotate>

        <Link href="#">
    <Icon viewBox="0 0 20 20">
      <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
    </Icon>
    <Label>Hovering my parent changes my style!</Label>
  </Link>
        </ThemeProvider>
     )
}
export { Home };
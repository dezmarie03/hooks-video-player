import styled from 'styled-components';

const StyledPlayer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% auto;
  transition: all 0.5s ease;
  font-size: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default StyledPlayer;

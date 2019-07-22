import styled from 'styled-components';

const StyledProgress = styled.div`
  background-color: ${props => props.theme.bgPlaylistColor};
  color: ${props => props.theme.textColor};
  font-size: 0.8em;
  padding: .25rem .5rem;
  margin-right: .5rem;
  min-width: 50px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export default StyledProgress;

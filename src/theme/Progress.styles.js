import styled from 'styled-components';

const StyledProgress = styled.div`
  background-color: ${props => props.theme.bgPlaylistColor};
  color: ${props => props.theme.textColor};
  font-size: 0.8em;
  padding: .25rem .5rem;
  border-radius: 5px;
`;

export default StyledProgress;

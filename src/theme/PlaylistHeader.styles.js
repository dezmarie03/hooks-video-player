import styled from 'styled-components';

const StyledPlaylistHeader = styled.div`
  background-color: ${props => props.theme.bgHeaderColor};
  font-size: 1.6em;
  color: ${props => props.theme.textColor};
  padding: 0 1rem;
  margin: 0 0 2rem 0;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 1.25em;
    color: ${props => props.theme.textColor};
  }
`;

export default StyledPlaylistHeader;

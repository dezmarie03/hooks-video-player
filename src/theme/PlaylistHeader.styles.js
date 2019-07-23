import styled from 'styled-components';

const StyledPlaylistHeader = styled.div`
  background-color: ${props => props.theme.bgHeaderColor};
  font-size: 1.6em;
  color: ${props => props.theme.textColor};
  padding: 0 1rem;
  margin: 0 0 1rem 0;
  min-height: 60px;
  display: grid;
  grid-template-columns: 75% auto;
  grid-gap: .5rem;

  .playlist__header-title,
  .playlist__header-progress {
    display: flex;
    align-items: center;
  }

  .playlist__header-title h4 {
    color: ${props => props.theme.textColor};
    margin: 0;
    line-height: 1.2;
  }

  .playlist__header-progress {
    justify-content: flex-end;
  }
`;

export default StyledPlaylistHeader;

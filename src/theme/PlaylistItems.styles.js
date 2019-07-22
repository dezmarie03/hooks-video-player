import styled from 'styled-components';

const StyledPlaylistItems = styled.div`
  padding: 0 .5rem;
  overflow-y: auto;
  height: 28vw;
  max-height: 500px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.bgScrollTrackColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.bgScrollThumbColor};
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.bgScrollThumbHoverColor};
  }
`;

export default StyledPlaylistItems;

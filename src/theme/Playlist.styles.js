import styled from 'styled-components';

const StyledPlaylist = styled.div`
  overflow: hidden;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgPlaylistColor};
`;

export default StyledPlaylist;

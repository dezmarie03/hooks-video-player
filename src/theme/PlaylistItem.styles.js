import styled from 'styled-components';

const StyledPlaylistItem = styled.div`
  background: none;
  border: 2px dotted ${props => (props.active ? `${props.theme.borderItemActiveColor}` : `transparent`)};
  font-size: 1.6em;
  color: ${props => props.theme.textColor};
  min-height: 50px;
  padding: 10px 20px;
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: 0.4s;

  :hover {
    border: 2px solid ${props => props.theme.borderItemHoverColor};
  }

  ::before {
    display: block;
    content: '';
    width: 10px;
    min-height: 10px;
    background-color: ${props => (props.active || props.played ? 'transparent' : `${props.theme.bgUnwatchedColor}`)}
    border-radius: 50px;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
  }

  .player__video-title,
  .player__video-title a {
    flex-grow: 10;
    padding: 0 0 0 10px;
    color: ${props => props.theme.textColor};
    text-align: left;
    text-decoration: none;
    display: block;
  }

  .player__video-num {
    flex-grow: 1;
    max-width: 30px;
    padding-right: 2rem;
    border-right: 2px solid ${props => props.theme.borderItemNumberColor};
  }

  .player__video-duration {
    min-width: 45px;
    color: white;
    font-size: 0.8em;
    padding: 0 5px;
    height: 20px;
    text-align: center;
    border-radius: 5px;
    margin: 0 0 0 5px;
  }

  .active {
    opacity: 0.1;
  }
`;

export default StyledPlaylistItem;

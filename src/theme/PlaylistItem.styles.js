import styled from 'styled-components';

const StyledPlaylistItem = styled.div`
  font-size: 1.6em;
  color: ${props => props.theme.textColor};
  margin: 0 0 .5rem 0;

  a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
    display: block;
    transition: 0.4s;
    border: 2px ${props => (props.active ? `dotted ${props.theme.borderItemActiveColor}` : `solid transparent`)};
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    transition: 0.4s;
    padding: .5rem 1rem;
  }

  a:hover {
    border: 2px solid ${props => props.theme.borderItemHoverColor};
  }

  a:focus {
    outline: none;
    border: 2px solid ${props => props.theme.borderItemHoverColor};
  }

  a:before {
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${props => (props.active || props.played ? 'transparent' : `${props.theme.bgUnwatchedColor}`)};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
  }

  .player__item-info {
    display: grid;
    grid-template-columns: 30px auto 50px;
    grid-gap: .75rem;
    min-height: 50px;
  }

  .player__video-num {
    border-right: 2px solid ${props => props.theme.borderItemNumberColor};
    padding-left: 0.5em;
  }

  .player__video-duration {
    font-size: 0.8em;
    text-align: right;
  }

  .player__video-title,
  .player__video-num,
  .player__video-duration {
    display: flex;
    align-items: center;
  }

  .active {
    opacity: 0.1;
  }
`;

export default StyledPlaylistItem;

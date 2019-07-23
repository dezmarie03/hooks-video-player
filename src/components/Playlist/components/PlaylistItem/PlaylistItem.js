import React from 'react';
import { Link } from 'react-router-dom';

import StyledPlaylistItem from '../../../../theme/PlaylistItem.styles';

const PlaylistItem = ({
  active,
  played,
  video,
}) => {
  return (
    <StyledPlaylistItem active={active} played={played}>
      <Link to={{ pathname: `/${video.id}`, autoplay: true }} tabIndex="0">
        <div className="player__item-info">
          <div className="player__video-num">
            {video.num}
          </div>
          <div className="player__video-title">
            {video.title}
          </div>
          <div className="player__video-duration">
            {video.duration}
          </div>
        </div>
      </Link>
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;

import React from 'react';

import StyledPlaylistItem from '../../../../theme/PlaylistItem.styles';

const PlaylistItem = ({
  active,
  played,
  video,
}) => {
  return (
    <StyledPlaylistItem active={active} played={played}>
      <div className="player__video-num">
        {video.num}
      </div>
      <div className="player__video-title">
        {video.title}
      </div>
      <div className="player__video-dur">
        {video.duration}
      </div>
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;

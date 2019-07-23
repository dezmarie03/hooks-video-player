import React from 'react';

import PlaylistItem from '../PlaylistItem';

import StyledPlaylistItems from '../../../../theme/PlaylistItems.styles';

const PlaylistItems = ({
  active,
  videos,
}) => {
  return (
    <StyledPlaylistItems>
      {videos.map((video) => (
        <PlaylistItem
          key={video.id}
          video={video}
          active={video.id === active.id ? true : false}
          played={video.played}
        />
      ))}
    </StyledPlaylistItems>
  );
};

export default PlaylistItems;

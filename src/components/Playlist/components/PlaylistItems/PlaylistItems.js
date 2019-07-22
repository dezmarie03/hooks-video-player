import React from 'react';

import withLink from '../PlaylistItem/PlaylistItem.withLink';
import PlaylistItem from '../PlaylistItem';

import StyledPlaylistItems from '../../../../theme/PlaylistItems.styles';

const PlaylistItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({
  active,
  videos,
}) => {
  return (
    <StyledPlaylistItems>
      {videos.map((video) => (
        <PlaylistItemWithLink
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

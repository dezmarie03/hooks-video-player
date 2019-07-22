import React from 'react';

import StyledPlaylistHeader from '../../../../theme/PlaylistHeader.styles';
import StyledProgress from '../../../../theme/Progress.styles';

const PlaylistHeader = ({
  active,
  total,
}) => {
  return (
    <StyledPlaylistHeader>
      <h4>{active.title}</h4>
      <StyledProgress>
        {active.num} / {total}
      </StyledProgress>
    </StyledPlaylistHeader>
  );
};

export default PlaylistHeader;

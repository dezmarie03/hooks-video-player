import React from 'react';

import StyledPlaylistHeader from '../../../../theme/PlaylistHeader.styles';
import StyledProgress from '../../../../theme/Progress.styles';

const PlaylistHeader = ({
  active,
  total,
}) => {
  return (
    <StyledPlaylistHeader>
      <div className="playlist__header-title">
        <h4>{active.title}</h4>
      </div>
      <div className="playlist__header-progress">
        <StyledProgress>
          {active.num} / {total}
        </StyledProgress>
      </div>
    </StyledPlaylistHeader>
  );
};

export default PlaylistHeader;

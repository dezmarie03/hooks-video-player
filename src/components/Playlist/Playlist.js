import React from 'react';

import PlaylistHeader from './components/PlaylistHeader';
import PlaylistItems from './components/PlaylistItems';
import ThemeToggle from '../ThemeToggle';

import StyledPlaylist from '../../theme/Playlist.styles';

const Playlist = ({
  active,
  darkMode,
  darkModeCallback,
  videos,
}) => {
  return (
    <StyledPlaylist>
      <ThemeToggle darkModeCallback={darkModeCallback} darkMode={darkMode} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlaylistItems videos={videos} active={active} />
    </StyledPlaylist>
  );
};

export default Playlist;

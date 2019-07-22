import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Playlist from '../Playlist';
import Video from '../Video';

import StyledPlayer from '../../theme/Player.styles';
import { theme, themeLight } from '../../theme/Theme';

const Player = ({
  match,
  history,
  location,
  data,
}) => {
  const videos = data;
  const savedState = JSON.parse(localStorage.getItem(`${data.playlistId}`));

  const [state, setState] = useState({
    videos: savedState ? savedState.videos : videos.playlist,
    activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
    darkMode: savedState ? savedState.darkMode : true,
    playlistId: savedState ? savedState.playlistId : videos.playlistId,
    autoplay: false,
  });

  useEffect(() => {
    localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }));
  },[state]);

  useEffect(() => {
    const videoId = match.params.activeVideo;

    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId,
      );
      setState((prev) => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay,
      }));
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false,
      });
    }
  },[history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos,]);

  const darkModeCallback = () => {
    setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };

  const endCallback = () => {
    const videoId = match.params.activeVideo;
    const currentVideoIndex = state.videos.findIndex(
      video => video.id === videoId,
    );

    const nextVideo =
      currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

    history.push({
      pathname: `${state.videos[nextVideo].id}`,
      autoplay: false,
    });
  };

  const progressCallback = (e) => {
    if (e.playedSeconds >= 11) {
      const videos = [...state.videos];
      const playedVideo = videos.find(
        video => video.id === state.activeVideo.id,
      );
      playedVideo.played = true;

      setState((prevState) => ({
        ...prevState,
        videos
      }));
    }
  }

  return (
    <ThemeProvider theme={state.darkMode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            darkModeCallback={darkModeCallback}
            darkMode={state.darkMode}
          />
        </StyledPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default Player;

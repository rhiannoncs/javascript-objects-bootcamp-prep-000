var playlist = {
  blondie: "Atomic"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(list, artistName) {
  delete list.artistName;
  return list
}

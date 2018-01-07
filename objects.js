var playlist = {
  blondie: "Atomic"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}

console.log(removeFromPlaylist({ Josie: 'Poopy Doopy'}, "Josie"))
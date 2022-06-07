import "./App.css";
import albums from "./data.js";

import TrackList from "./TrackList";
import AlbumCover from "./AlbumCover";
import AlbumList from "./AlbumList";

function App() {
  return (
    <div>
      <AlbumCover image={albums[0].coverImg} />
      <TrackList tracks={albums[0].tracks} />
      <h1 className="select-album-title color-white">Select an Album</h1>
      <AlbumList albums={albums} />
    </div>
  );
}

export default App;

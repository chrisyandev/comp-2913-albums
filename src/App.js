import "./App.css";
import albums from "./data.js";
import { useState } from "react";

import TrackList from "./TrackList";
import AlbumCover from "./AlbumCover";
import AlbumList from "./AlbumList";

function App() {

  const [shownIndex, setShownIndex] = useState(0);

  return (
    <div>
      <AlbumCover image={albums[shownIndex].coverImg} />
      <TrackList tracks={albums[shownIndex].tracks} />
      <h1 className="select-album-title color-white">Select an Album</h1>
      <AlbumList albums={albums} albumSetter={setShownIndex} />
    </div>
  );
}

export default App;

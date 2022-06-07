import Track from "./Track.js";

export default function TrackList({tracks}) {
    return (
        <ol className="TrackList">
            {tracks.map((track, index) => (
                <li className="color-white" key={track + index}><Track name={track} /></li>
            ))}
        </ol>
    );
}
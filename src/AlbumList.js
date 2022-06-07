import Album from "./Album";

export default function AlbumList({albums}) {
    return (
        <div className="AlbumList">
            {albums.map((album, index) => (
                <Album key={album.name + album.coverImg + index} image={album.coverImg} name={album.name} />
            ))}
        </div>
    )
}
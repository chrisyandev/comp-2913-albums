export default function Album({image, name, setAlbum}) {
    return (
        <button className="Album color-white" onClick={setAlbum}>
            <img className="Album__image" src={image} alt={name} width="50" height="50"></img>
            <span className="Album__name">{name}</span>
        </button>
    )
}
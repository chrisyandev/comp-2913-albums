export default function Album({image, name}) {
    return (
        <div className="Album color-white">
            <img className="Album__image" src={image} alt={name} width="50" height="50"></img>
            <span className="Album__name">{name}</span>
        </div>
    )
}
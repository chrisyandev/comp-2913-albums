import playButtonImage from "./assets/play-button.png";

export default function Track({name}) {
    return (
        <>
            <span className="color-white">{name}</span>
            <button>
                <img src={playButtonImage} alt="Play" width="20" height="20"></img>
            </button>
        </>
    );
}
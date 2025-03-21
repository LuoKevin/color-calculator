import ReactAudioPlayer from 'react-audio-player';

function NyanPlayer() {
    let audio = new Audio("https://ia800506.us.archive.org/14/items/nyannyannyan/NyanCatoriginal.mp3")
    const start = () => {
        audio.play()
    }

    return (<div>

        < div >
            <button onClick={start}>Nyan!~</button>
        </div >
        </div>
    );
}

export default NyanPlayer;
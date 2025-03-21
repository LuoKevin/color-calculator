import {useEffect, useRef, useState} from "react";


function AudioDBMeter(audioSrc: string) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const audioContext = new AudioContext();
    let audio = new Audio("https://ia800506.us.archive.org/14/items/nyannyannyan/NyanCatoriginal.mp3")

    const mediaSource = audioContext.createMediaElementSource(audio)
    const analyzer = audioContext.createAnalyser()


    analyzer.fftSize = 512;
    mediaSource.connect(analyzer)
    analyzer.connect(audioContext.destination)


};

export default AudioDBMeter;
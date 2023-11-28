import React from 'react';
// import useAudioRecorder from './useAudioRecorder';

const AudioRecorderComponent = () => {
    // const { isRecording, startRecording, stopRecording, audioData } = useAudioRecorder();
    const isRecording = false;
    const startRecording = () => {};
    const stopRecording = () => {};


    return (
        <div>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {/* Display the audio data or recording status */}
        </div>
    );
};

export default AudioRecorderComponent;

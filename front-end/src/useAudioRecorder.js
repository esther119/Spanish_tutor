import { useState, useEffect } from 'react';

const useAudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioData, setAudioData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Request user permission and get media stream
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(stream => {
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);

                let audioChunks = [];
                recorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                };

                recorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    setAudioData(audioBlob);
                    audioChunks = [];
                };

                recorder.onerror = event => {
                    setError(event.error);
                };
            })
            .catch(err => {
                setError(err);
                console.error("Error accessing the microphone: ", err);
            });
    }, []);

    const startRecording = () => {
        if (mediaRecorder && mediaRecorder.state === 'inactive') {
            mediaRecorder.start();
            setIsRecording(true);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    return { isRecording, startRecording, stopRecording, audioData, error };
};

export default useAudioRecorder;

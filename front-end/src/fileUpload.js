import React, { useState } from 'react';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch('/ai_response', {
            method: 'POST',
            body: formData,
            // Note: Don't set Content-Type header when using FormData
            // Fetch sets it automatically including the `boundary` parameter
        })
        .then(response => response.json())
        .then(data => {
            console.log('File uploaded successfully', data);
        })
        .catch(error => {
            console.error('Error uploading file', error);
        });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".flac" />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUpload;

import React, { useState } from 'react';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [conversation, setConversation] = useState([]);

    const sendMessage = async () => {
        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setConversation([...conversation, { role: 'user', content: message }, { role: 'bot', content: data.response }]);
            setMessage('');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div>
            <div>
                {conversation.map((msg, index) => (
                    <p key={index}><strong>{msg.role}:</strong> {msg.content}</p>
                ))}
            </div>
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;

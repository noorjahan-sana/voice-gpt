
import React, { useState } from 'react'
import UserContext from './UserContext'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { toast } from 'react-toastify';
const openAiAPI = process.env.REACT_APP_OPEN_AI_API

function UserProvider(props) {

    const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition()

    
    const [message, setMessage] = useState('')

    const [allMessages, setAllMessages] = useState([])
    const [mode, setMode] = useState('off');
    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const sendMessage = async () => {
        console.log(message);
        if(!message){
           return toast.error('Please type the message...')
        }
        SpeechRecognition.stopListening();
        setMode('off');
        let url = "https://api.openai.com/v1/chat/completions";
    
        let token = `Bearer ${openAiAPI}`;
        let model = 'gpt-3.5-turbo';
    
        let messagesToSend = [
            ...allMessages,
            {
                role: 'user',
                content: message
            }
        ];
    
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                messages: messagesToSend
            })
        });
    
        let resjson = await res.json();
        if (resjson && resjson.choices && resjson.choices.length > 0) {
            // Extract the assistant's response from the API
            let assistantResponse = resjson.choices[0].message.content;
    
            let newAllMessages = [
                ...messagesToSend,
                {
                    role: 'assistant',
                    content: assistantResponse
                }
            ];
    
            setAllMessages(newAllMessages);
            setMessage('');
        }
    };
    
    const toggleMode = () => {
        if (mode === 'off') {
            setMode('on')
            SpeechRecognition.startListening({ language: 'en-IN' })
        }
        else {
            setMode('off');
            // setMessage('')
            SpeechRecognition.stopListening()
           
        }
    }
    return (
        <UserContext.Provider value={{ message, setMessage, sendMessage, allMessages, setAllMessages, mode, toggleMode,transcript,listening }}>
            {props.children}
        </UserContext.Provider>

    )
}

export default UserProvider
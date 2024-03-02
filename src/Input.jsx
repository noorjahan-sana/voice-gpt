import React, { useContext, useEffect } from 'react'
import { FaMicrophone } from "react-icons/fa";
import UserContext from './context/UserContext';
import { FaMicrophoneSlash } from "react-icons/fa";
function Input() {
    const context = useContext(UserContext)
    const { message, setMessage, sendMessage, mode, toggleMode,transcript } = context
    //    console.log(context)
  
   
    useEffect(() => {
       setMessage(transcript)
        // console.log(message)
        
      }, [transcript]);
     
    return (
        <>
            <div className=" fixed inset-x-0 bottom-10 flex justify-center ">

                {mode === 'on' ?
                    <input
                        type="text"
                        name="searchkey"
                        id="text"
                        value={transcript}
                        onChange={e => setMessage(transcript)}
                        placeholder="Input"
                        className="w-full px-3 py-2 ml-2 border rounded-md focus:outline-none lg:w-3/5" />:
                    <input
                        type="text"
                        name="searchkey"
                        id="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Input"
                        className="w-full px-3 py-2 ml-2 border rounded-md focus:outline-none lg:w-3/5 md:block" />}

                <button onClick={toggleMode}
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-3  text-center mr-1 mb-2 ml-1"
                >{mode==='on'?<FaMicrophone size={15}/>:<FaMicrophoneSlash size={15} />}
                </button>
                <button onClick={sendMessage}
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-10 py-3 text-center mr-2 mb-2 ml-2"
                > send
                </button>
            </div>
        </>
    )
}

export default Input
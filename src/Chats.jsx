import React, { useContext } from 'react'
import { HiUserCircle } from "react-icons/hi";
import { FaRocketchat } from "react-icons/fa";
import UserContext from './context/UserContext';
function Chats() {
    const context = useContext(UserContext)
    const { allMessages } = context
    return (
        <>
            {/* <h1  class="text-white">my api = {process.env.REACT_APP_OPEN_AI_API}</h1> */}
            <div class="flex flex-col flex-auto h-80vh overflow-y-auto ">
                <div
                    class="flex flex-col flex-auto flex-shrink-0 rounded-2xl  py-4"
                >
                    <div class="flex flex-col h-full overflow-x-auto mb-4">
                        <div class="flex flex-col h-full">
                            <div class="grid grid-cols-12 gap-y-2">
                                {allMessages.map((msg, index) => (
                                    <React.Fragment key={index}>
                                        {msg.role === 'user' ? (
                                            <div class="col-start-6 col-end-13 p-3 rounded-lg">
                                                <div class="flex items-center justify-start flex-row-reverse">
                                                    <div
                                                        class="flex items-center justify-center h-10 w-10 rounded-full bg-white flex-shrink-0"
                                                    >
                                                        <HiUserCircle color='#8527d7' size={40} />
                                                    </div>
                                                    <div
                                                        class="relative mr-3 text-sm py-2 px-2 rounded-xl text-white  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
                                                    >
                                                        <div> {msg.content}</div>
                                                    </div>
                                                </div>


                                            </div>
                                        ) : (
                                            // Render div2 when msg.role is 'assistant'
                                            <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                <div class="flex flex-row items-center">
                                                    <div
                                                        class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex-shrink-0"
                                                    >
                                                        <FaRocketchat color='white' />
                                                    </div>
                                                    <div
                                                        class="relative ml-3 text-sm bg-white py-2 px-2 shadow rounded-xl"
                                                    >
                                                        <div>
                                                            {msg.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )}
                                    </React.Fragment>
                                ))}
                                {/* <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                    <div class="flex flex-row items-center">
                                        <div
                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex-shrink-0"
                                        >
                                         <FaRocketchat color='white'/>
                                        </div>
                                        <div
                                            class="relative ml-3 text-sm bg-white py-2 px-2 shadow rounded-xl"
                                        >
                                            <div>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Vel ipsa commodi illum saepe numquam maxime
                                                asperiores voluptate sit, minima perspiciatis.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Vel ipsa commodi illum saepe numquam maxime
                                                asperiores voluptate sit, minima perspiciatis.
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div class="col-start-6 col-end-13 p-3 rounded-lg">
                                    <div class="flex items-center justify-start flex-row-reverse">
                                        <div
                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-white flex-shrink-0"
                                        >
                                          <HiUserCircle color='#8527d7' size={40}/>
                                        </div>
                                        <div
                                            class="relative mr-3 text-sm py-2 px-2 rounded-xl text-white  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
                                        >
                                            <div> Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Vel ipsa commodi illum saepe numquam maxime
                                                asperiores voluptate sit, minima perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Vel ipsa commodi illum saepe numquam maxime
                                                asperiores voluptate sit, minima perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Vel ipsa commodi illum saepe numquam maxime
                                                asperiores voluptate sit, minima perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Vel ipsa commodi illum saepe numquam maxime
                                                asperiores voluptate sit, minima perspiciatis.</div>
                                        </div>
                                    </div>
                                </div> */}



                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Chats
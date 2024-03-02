import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chats from './Chats';
import Input from './Input';

function App() {

  return (
    <>

      <Chats />
      <Input />
      <ToastContainer />
    </>
  );
}

export default App;

import AppMuic from "./component";
import SongProvider from "./component/context/SongProvider";
import UserProvider from "./component/context/UserProvider";
import StatusProvider from "./component/context/StatusProvider";
import { ToastContainer, toast } from 'react-toastify';




function App() {
  return (
    <UserProvider>
      <SongProvider>
        <StatusProvider>
           <AppMuic />
           <ToastContainer 
             position="bottom-left"
             autoClose={1000}
             hideProgressBar
             closeOnClick
           />
        </StatusProvider>
      </SongProvider>
    </UserProvider>
    
  );
}

export default App;

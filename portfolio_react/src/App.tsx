// removed initial file construction

//-----------------------
//import 'Message.tsx for use in file
import Message from "./Message";
import ListGroup from "./ListGroup";

// App function displays on the main page, adding diiv elements to display
function App() {
  return (
    <div>
      <Message />
      <ListGroup />
    </div>
  );
}
//export function to be used globally
export default App;

import { MouseEvent } from "react";
//created list group function
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    // must be wrapped in a single <div> element in order to render with react, or
    // wrapped in empty brackets '<>' as a 'fragment'
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      {/* above line of code to render a message given there are no items available in the list */}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
        {/* using .map function to convert the list of 'items' to a differnt type. In this case, converting them into <li> elements */}
        {/* the map function must be wrapped in curly braces for JSX markup */}
        {/* additionally 'key' must be used to properly identify the item being rendered */}
      </ul>
    </>
  );
}
// exported function to be used globally in the application
export default ListGroup;

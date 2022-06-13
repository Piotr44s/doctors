import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/example">EXAMPLE</Link> |
      <Link to="/edit">EDIT</Link> |
      <Link to="/read">READ</Link> |

    </nav>
  );
}

export default Navigation
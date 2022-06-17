import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { TodoIndex } from "./pages/TodoIndex";
import { TodoToday } from "./pages/TodoToday";
import { TodoPost } from "./pages/TodoPost";

const NotFound = () => {
  return <h2>Not Found...</h2>;
};

const App = () => {
  return (
    <BrowserRouter>
      <h1>Todoリストアプリケーション</h1>
      <ul>
        <li>
          <Link to="/todo/index">todo 一覧（全件）</Link>
        </li>
        <li>
          <Link to="/todo/today">todo 一覧（本日）</Link>
        </li>
        <li>
          <Link to="/todo/post">todo 入力</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/todo/index" element={<TodoIndex />} />
        <Route path="/todo/today" element={<TodoToday />} />
        <Route path="/todo/post" element={<TodoPost />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

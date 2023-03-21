import { Route, Routes } from "react-router";
import ComingSoon from "./components/comingsoon/ComingSoon";
import Profile from "./pages/Profile";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/userdetails/profile/:id" element={<Profile />} />
      <Route path="/userdetails/posts/:id" element={<ComingSoon />} />
      <Route path="/userdetails/gallery/:id" element={<ComingSoon />} />
      <Route path="/userdetails/todo/:id" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;

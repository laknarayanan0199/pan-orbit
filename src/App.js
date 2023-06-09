import { Route, Routes } from "react-router";
import ComingSoon from "./components/comingsoon/index";
import Profile from "./pages/profile/index";
import Users from "./pages/users/index";

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

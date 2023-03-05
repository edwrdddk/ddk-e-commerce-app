import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import SingIn from "./routes/sing-in/sing-in";

function Shop() {
  return <h1>Shop</h1>
}

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sing-in" element={<SingIn />} />
      </Route>
    </Routes>
  )

}


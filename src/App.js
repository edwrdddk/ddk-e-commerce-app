import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase";

import Spinner from "./components/spinner/spinner";
import { checkUserSession } from "./store/user/user.action";

const Home = lazy(() => import("./routes/home/home"));
const Authentication = lazy(() => import("./routes/authentication/authentication"));
const Navigation = lazy(() => import("./routes/navigation/navigation"));
const Shop = lazy(() => import("./routes/shop/shop"));
const Checkout = lazy(() => import("./routes/checkout/checkout"));

export default function App() {
  const dispatch = useDispatch();
  //useEffect from userContext
  useEffect(() => {
    dispatch(checkUserSession());
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )

}



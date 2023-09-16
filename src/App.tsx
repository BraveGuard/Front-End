import { QueryClient, QueryClientProvider } from "react-query";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Chat } from "./Pages/Chat";
import { Landing } from "./Pages/Initial";
import { useState } from "react";
import { Home } from "./Pages/Home";
import { Tabs } from "./components/Tabs";
const queryClient = new QueryClient();

//TODO: Check if we need routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-black text-sm  h-screen bg-white  md:w-[360px]  mx-auto ">
        <div className="h-full flex flex-col bg-whites ">
          <BrowserRouter>
            <motion.div
              className="flex-1 overflow-y-scroll  py-2"
              layout
              transition={{ duration: 1, type: "spring" }}
            >
              <Routes>
                <Route path="/" Component={Landing}></Route>
                <Route path="/home" Component={Home}></Route>
                <Route path="/chat" Component={Chat}></Route>
              </Routes>
            </motion.div>
          </BrowserRouter>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

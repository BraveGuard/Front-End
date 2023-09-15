import { QueryClient, QueryClientProvider } from "react-query";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Chat } from "./Pages/Chat";
import { Landing } from "./Pages/Initial";
import { useState } from "react";
const queryClient = new QueryClient();

// //TODO: Check if we need routing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,
//   },
// ]);

function App() {
  const [isInitial, setIsInitial] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-black text-sm  h-screen w-[320px] flex flex-col px-2 py-2  mx-auto ">
        <motion.div
          className="h-full relative"
          layout
          transition={{ duration: 1, type: "spring" }}
        >
          <AnimatePresence>
            {isInitial ? (
              <motion.div
                key="landing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Landing onGoNext={() => setIsInitial(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="h-full"
              >
                <Chat />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

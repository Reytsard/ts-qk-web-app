import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Login from "./components/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
      </Route>
    )
  );
  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

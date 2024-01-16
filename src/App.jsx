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
import Dashboard, { dashboardLoader } from "./components/Dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
          loader={dashboardLoader}
        />
      </Route>
    )
  );
  /* 
  if you will use loader data,
  create the function at the compoonent as another variable outside of the function,
  then use the useLoaderData() function to invoke it */

  /* 
  for orders we can set the weight, what machines did we use, how many soaps and fabcons used.
  */
  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

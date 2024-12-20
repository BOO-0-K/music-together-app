import { Helmet } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import ConfirmModal from "./components/ConfirmModal";
import AlertModal from "./components/AlertModal";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/join",
      element: <Join />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <>
      <Helmet>
        <title>Music Together</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Wrapper>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </Wrapper>
      <ConfirmModal />
      <AlertModal />
    </>
  );
}

export default App;

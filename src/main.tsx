import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const CatalogPage = lazy(()=> import('./pages/CatalogPage.tsx'))
const ProductSection = lazy(()=> import('./pages/ProductSection.tsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path:"/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path:'/catalogPage',
    element:(
      <Suspense fallback={<div>Loading...</div>}>
         <CatalogPage/>
      </Suspense>
    )
  },
  {
       path:'/productSection',
       element:(
        <Suspense fallback={<div>Loading...</div>}>
            <ProductSection/>
        </Suspense>
       )
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

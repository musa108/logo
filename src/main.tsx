import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";
import { Checkout } from "./Lazyload/Checkout.tsx";
import { ShoppingCart } from "./Lazyload/ShoppingCart.tsx";
import { ProductSection } from "./Lazyload/ProductSection.tsx";
import { CatalogPage } from "./Lazyload/CatalogPage.tsx";
import { Home } from "./Lazyload/Home.tsx";
import { App } from "./Lazyload/App.tsx";

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
  },
  {
        path:"/Shoppingcart",
         element:(
          <Suspense fallback={<div>Loading...</div>}>
             <ShoppingCart />
          </Suspense>
         )
  },
  {
        path:"/checkout",
         element:(
          <Suspense fallback={<div>Loading...</div>}>
             <Checkout />
          </Suspense>
         )
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

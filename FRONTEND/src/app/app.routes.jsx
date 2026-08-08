import { createBrowserRouter } from "react-router"
import Register from "../features/auth/pages/Register"
import Login from "../features/auth/pages/Login"
import CreateProduct from "../features/products/pages/CreateProduct"
import DashBoard from "../features/products/pages/DashBoard"
import Protected from "../features/auth/components/Protected"
import Home from "../features/products/pages/Home"
import ProductDetail from "../features/products/pages/ProductDetail"
import SellerProductDetail from "../features/products/pages/SellerProductDetails"
import Cart from "../features/cart/pages/Cart"
import AppLayout from "./AppLayout"

export const routes = createBrowserRouter([

    {
        path: "/register",
        element: <Register />
    }
    ,
    {
        path: "/login",
        element: <Login />
    },
    {
        element:<AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/:productId",
                element: <ProductDetail />
            },
            {
                path: "/seller",
                children: [
                    {
                        path: "/seller/create-product",
                        element: <Protected role="seller">
                            <CreateProduct /> </Protected>
                    },
                    {
                        path: "/seller/dashboard",
                        element: <Protected role="seller">
                            <DashBoard /> </Protected>
                    },
                    {
                        path: "/seller/product/:productId",
                        element: <Protected role="seller">
                            <SellerProductDetail />
                        </Protected>
                    }
                ]
            }, {
                path: "/cart",
                element: <Protected ><Cart /></Protected>
            }
        ]

    }

])
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import Contact, {
    loader as contactLoader,
} from "./routes/contact";
import Root, { loader as rootLoader,action as rootAction, } from "./routes/root";
import EditContact, {
    action as editAction,
} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        action: rootAction,
    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
    },
    {
        path: "contacts/:contactId/chats",
        element: <App />,
        loader: contactLoader,
        action: editAction,
    },  {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
    },
    {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
    },

]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
// } from "react-router-dom";
// import Root from "./routes/root";
// import "./index.css";
//
//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         elements:<Root />,
//         element: <div>Hello world!</div>,
//     },
// ]);
//
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );

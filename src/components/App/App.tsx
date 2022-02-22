import React from 'react';
import './App.scss';
import {Outlet, Route, Routes} from "react-router-dom";
import {Header} from "../Header";
import {Feed} from "../../pages/Feed";
import {Wishlist} from "../../pages/Wishlist";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className={'App-main'}>
                <Routes>
                    <Route path="/" element={<Feed />}>
                        <Route path="details/:imageId" element={<div>todo <Outlet /></div>}/>
                    </Route>
                    <Route path="wishlist" element={<Wishlist />}/>
                    <Route path="*" element={<div>not found</div>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;

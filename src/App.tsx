import React, { useReducer } from 'react';
import { Layout } from "./layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";
import { Product } from './pages/Product';
import { Checkout } from './pages/Checkout';
import { Ctx } from "./context";

// utils
import { initialState, reducer } from "./globalState";

// css
import './App.scss';
import { StateInterface } from './globalTypes';


function App(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState())

    React.useEffect(() => {
        try{
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => dispatch({ type: "ADD_INITIAL_ITEMS", payload: data }))
        }catch(err){
            dispatch({ type: "ERROR" })
        }
    }, [])

    return (
        <Ctx.Provider value={state}>
            <section className="App">
                <BrowserRouter>
                    <Layout dispatch={dispatch}>
                        <Routes>
                            <Route path="/" element={
                                <Home
                                    state={state as StateInterface}
                                    dispatch={dispatch}
                                    ctx={Ctx}
                                />
                            }/>
                            <Route path="/menu" element={
                                <Menu
                                    state={state as StateInterface}
                                    dispatch={dispatch}
                                />
                            }/>
                            <Route path='/shopping-cart' element={
                                <Cart
                                    state={state as StateInterface}
                                    dispatch={dispatch}
                                />
                            }/>
                            <Route path='/products/:title' element={
                                <Product
                                    state={state as StateInterface}
                                    dispatch={dispatch}
                                />
                            }/>
                            <Route path='/checkout' element={
                                <Checkout
                                    state={state as StateInterface}
                                    dispatch={dispatch}
                                />
                            }
                            />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </section>
        </Ctx.Provider>
    );
}

export default App;
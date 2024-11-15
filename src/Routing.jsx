import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { nanoid } from '@reduxjs/toolkit'

import axios from "axios";
import Footer from "./components/Footer/Footer";
import Section from "./components/Sections/Section";
import Topbar from "./components/Topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collections from "./components/collections/Collections";
import Contacts from "./components/contacts/Contacts";
import Features from "./components/feature/Features";
import Faqs from "./components/faq/Faqs";
import Blogs from "./components/blogs/Blogs";
import blogs from "./components/datas/blogs";
import NewArrivals from "./components/collections/new-arrivals/NewArrivals";
import RootCollection from "./components/collections/RootCollection";
import ProductPage from "./components/collections/ProductPage";
import RootProducts from "./components/collections/new-arrivals/new-arrivals-product-page/new-arrivals-container/product/RootProducts";
import Cart from "./components/cart/Cart";
import LoginPage from "./components/login-signup/LoginPage";
import CartPage from "./components/cart/CartPage";
// import { postAdded } from "./redux-essentials/Slices/CartSlices";
function Routing() {
  // const count = useSelector(state=>state.posts);
  // const dispatch = useDispatch();

  // const renderedPosts = count.map(post => (
  // <article  key={post.id}>
  // <h3>{post.title}</h3>
  // <p >{post.content.substring(0, 100)}</p>
  // </article>
  // ))

  // const [title, setTitle] = useState('')
  // const [content, setContent] = useState('')

  // const onTitleChanged = e => setTitle(e.target.value)
  // const onContentChanged = e => setContent(e.target.value)

  // const onSavePostClicked = () => {
  // if (title && content) {
  // dispatch(
  // postAdded({
  // id: nanoid(),
  // title,
  // content
  // })
  // )

  // setTitle('')
  // setContent('')
  // }
  // }

  // these are the states(variables) that are used to store fetched data
  const [product, updateProducts] = useState(null);
  const [collection, updateCollection] = useState([]);
  const [page, updatePages] = useState([]);
  const [tops, updateTops] = useState([]);
  const [dresses, updateDresses] = useState([]);
  const [rompers, updateRompers] = useState([]);
  const [showCart, updateShowCart] = useState(false);

  function handleShowCart() {
    updateShowCart(!showCart);
  }

  useEffect(() => {
    axios.get("https://mr-parker.myshopify.com/products.json").then((res) => {
      updateProducts(res.data.products);
    });

    axios.get("https://mr-parker.myshopify.com/pages.json").then((res) => {
      updatePages(res.data.pages);
    });

    axios
      .get("https://mr-parker.myshopify.com/collections.json")
      .then((res) => {
        updateCollection(res.data.collections);
      });

    axios
      .get("https://mr-parker.myshopify.com/collections/tops/products.json")
      .then((res) => {
        updateTops(res.data.products);
      });

    axios
      .get("https://mr-parker.myshopify.com/collections/dresses/products.json")
      .then((res) => {
        updateDresses(res.data.products);
      });

    axios
      .get("https://mr-parker.myshopify.com/collections/rompers/products.json")
      .then((res) => {
        updateRompers(res.data.products);
      });
  }, []);

  if (!product) return null;

  return (
    <BrowserRouter>
      <div className="routing">
        <Topbar products={product} handle={handleShowCart} />
        {showCart === true && <Cart handle={handleShowCart} />}
        <Routes>
          <Route
            path="/"
            element={<Section products={product} blogs={blogs} />}
          />
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="collections" element={<RootCollection />}>
            <Route
              path=""
              element={
                <Collections
                  products={product}
                  collection={collection}
                  pages={page}
                />
              }
            />
            <Route path=":name" element={<RootProducts />}>
              <Route
                path=""
                element={
                  <NewArrivals collection={collection} products={product} />
                }
              ></Route>
              <Route
                path="products/:id"
                element={
                  <ProductPage
                    pages={page}
                    collection={collection}
                    products={product}
                    handle={handleShowCart}
                  />
                }
              />
            </Route>
          </Route>

          <Route
            path="blogs/"
            element={<Blogs pages={page} products={product} path={"blogs/"} />}
          />
          <Route
            path="contacts/"
            element={<Contacts pages={page} path={"contacts/"} />}
          />
          <Route
            path="features/"
            element={
              <Features pages={page} products={product} path="features/" />
            }
          />
          <Route path="faqs/" element={<Faqs pages={page} path="faqs/" />} />
          <Route path="account/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Routing;

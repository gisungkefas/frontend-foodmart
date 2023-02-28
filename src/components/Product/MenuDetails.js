import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Styles from "./MenuDetails.module.css";
import axios from 'axios';
import LoginNavbar from "../LoginNavbar/LoginNavbar";
import {
  CaretLeftOutlined, CaretRightOutlined
} from '@ant-design/icons';
// import { addProduct } from "../../redux/cartSlice"
// import { useDispatch } from "react-redux";
// import { toast } from 'react-toastify';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1Z3d1ZXplamVAZ21haWwuY29tIiwiZXhwIjoxNjc1MzU1NjEyLCJpYXQiOjE2NzUyNjkyMTJ9.J3vpm6yESAhspCwiIidi0eUMMbTW0SGH-y1b3WPN5ao"

export const MenuDetails = () => {
  const [pageNumber, setPageNumber] = useState(0);
  // const [product, setProduct] = useState(0);
  // const dispatch = useDispatch()
  const [totalPages, setTotalPages] = useState(0);
  const [menuItems, setMenuItems] = useState([]);
  const changePage = ({ selected }) => setPageNumber(selected)
  // let [quantity, setQuantity] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:8080/api/v1/search?pageNumber=${pageNumber}&pageSize=4`);
      const data = result.data
      setMenuItems(data.productList.content);
      setTotalPages(data.productList.totalPages)
      console.log(result.data)

    }
    fetchData();
  }, [pageNumber]);

   const handleAddToCart = async (menuItems) => {
    console.log(menuItems.id+"  this is the id")
    try {
      const response = await axios.post(`http://localhost:8080/cart/add-to-cart/${menuItems.id}`, null, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(response)
      if (response.data.success) {
        console.log(response.data+"  here PPPDD")
        // setCart([...cart, product]);
      }
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <main>
      <LoginNavbar/>
      <section className={`${Styles.menu} ${Styles.section}`}>
        
      <button className={Styles.btn3}>Go to Cart</button>
      
        <div className={Styles.title}>
          <h1 className={`${Styles.ourMenu} ${Styles.h1}`}>Browse Our Menu</h1>
          <p className={Styles.ourMenuP}>
            Use our menu to place an order online or phone our store to
          </p>
          <p className={Styles.ourMenuP}> place a pickup order. Fast and Fresh food</p>
        </div>
        <div className={`${Styles['section-center']}`}>
          {menuItems.map((item) => {

            const { id, productName, imageUrl, productPrice, description } = item;
            console.log(id)
            // setMenuItems
            return (
              <article key={id} className={`${Styles["menu-item"]}`}>
                <img src={imageUrl} alt={imageUrl} className={Styles.photo} />
                <div className={`${Styles["item-info"]}`}>
                  <div className={`${Styles["item-body"]}`}>
                    <header className={Styles.header}>
                      <h4 className={`${Styles.productName} ${Styles.h4}`}>{productName}</h4>
                      <h4 className={`${Styles.price} ${Styles.h4}`}>N{productPrice}</h4>
                    </header>
                    <p className={`${Styles["item-text"]}`}>{description}</p>
                  </div>
                  <footer className={Styles.footer}>
                    <span>
                      {/* <input className="btn-input" type="number" defaultValue={1} /> */}
                    </span>
                    <button className={Styles.btn} onClick={()=> handleAddToCart(item)}>Add to Cart</button>
                    <button className={Styles.btn2}>View</button>
                  </footer>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <div className={Styles.foo}>
        <ReactPaginate
          previousLabel={<CaretLeftOutlined />}
          nextLabel={<CaretRightOutlined />}
          pageClassName={`${Styles["page-item"]}`}
          pageLinkClassName={`${Styles["page-link"]}`}
          nextClassName={Styles.pageItem}
          nextLinkClassName={Styles.nextBtn}
          marginPagesDisplayed={3}
          pageCount={totalPages}
          onPageChange={changePage}
          breakLabel="..."
          containerClassName={Styles.paginationBtns}
          previousLinkClassName={Styles.prevBtn}
          disabledClassName={Styles.paginationDisabled}
          activeClassName={Styles.paginationActive}
        />
        
      </div>
    </main>
  );
};
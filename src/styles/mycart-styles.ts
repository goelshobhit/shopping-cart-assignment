import { createGlobalStyle } from 'styled-components';

export const MyCartStyle = createGlobalStyle`
.cart {
  height: calc(100vh - 100px);
  max-width: 40rem;
  margin: 100px auto;
  flex-direction: column;
  display: flex;
}

.cart-empty {
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #fff;
}

.cart header {
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-basis: 1rem;
  background: black;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
}

.cart footer {
  flex-basis: 5rem;
  background-color: #fff;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.shopping {
  height: 100%;
  width: 100%;
  outline: 0;
  border: 0;
  background-color: #c6346c;
  color: #fff;
  cursor: pointer;
}
.empty-cart-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1rem;
}

.close {
  color: white;
  float: right;
  font-size: 45px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}

.cart-body {
  background-color: #eeeeee;
  display: flex;
  overflow-y: auto;
  flex: 1;
}

.cart-items-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.cart-item-container {
  display: flex;
  background: #fff;
  margin: 5px 0;
}

.cart-item-content {
  padding: 10px 18px;
  display: flex;
  width: 100%;
}

.cart-item-content img {
  width: 15%;
}

.item-desc {
  flex: 2 1;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
}

.low-price-banner {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  padding: 10px;
}

.item-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.btn-group {
  display: flex;
  align-items: center;
  margin: 1.2rem;
  font-size: 1.4rem;
}

.inc-btn,
.dec-btn {
  border: none;
  background-color: #c6346c;
  border-radius: 30px;
  padding: 4px 10px;
  color: white;
  margin: 0 8px;
  cursor: pointer;
}

.total-price {
  align-self: center;
  font-size: 16px;
}

.cart-footer {
  font-weight: 500;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.cart-footer .shopping {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.8rem;
  padding: 2.2rem;
}

@media only screen and (max-width: 1023px) {
  .cart {
    max-width: 100vw;
    height: calc(100vh - 120px);
    margin: 120px auto;
  }
  .cart header {
    background-color: #fff;
    color: black;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .close {
    color: black;
  }
}

@media only screen and (max-width: 767px) {
  .cart {
    max-width: 100vw;
    height: calc(100vh - 75px);
    margin: 75px auto;
  }
}
`;
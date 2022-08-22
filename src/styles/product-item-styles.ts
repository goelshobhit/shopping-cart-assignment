import { createGlobalStyle } from 'styled-components';

export const ProductItemStyle = createGlobalStyle`
.product-item {
  padding: 2%;
  flex: 0 0 18%;
  display: flex;
  box-shadow: 4px 0 2px -2px #f9f9f9;
  flex-direction: column;
  box-shadow: 0 4px 3px -3px rgb(175, 173, 173);
}

.product-item-title {
  color: #2b2b2b;
  font-size: 1.3rem;
  font-weight: 700;
  min-height: 6rem;
  max-height: 6rem;
  overflow: hidden;
  text-overflow: clip;
  word-wrap: break-word;
}

.product-img img {
  width: 100%;
}

.product-desc {
  padding: 4px;
  font-size: 12px;
  color: #383838;
  background-color: #f0f0f0;
  max-height: 80px;
  min-height: 80px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: clip;
}

.product-purchase {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}

.product-mrp {
  align-self: center;
  font-size: 12px;
  font-weight: 700;
}
.product-btn-buynow {
  border: none;
  background-color: #c6346c;
  color: white;
  font-size: 12px;
  padding: 8px 12px;
  cursor: pointer;
}

.product-btn-small-screen {
  border: none;
  background-color: #c6346c;
  color: white;
  font-size: 1.2rem;
  padding: 8px 12px;
  cursor: pointer;
  align-self: flex-end;
  display: none;
  flex: 1;
}

.product-btn-buynow:hover,
.product-btn-buynow:active {
  background-color: #c6346c;
}

.product-btn-small-screen:hover,
.product-btn-small-screen:active {
  background-color: #c6346c;
}

@media only screen and (max-width: 1023px) {
  .product-item .product-info {
    display: flex;
    gap: 1rem;
    height: 70px;
  }

  .product-btn-small-screen {
    display: block;
  }

  .product-mrp,
  .product-btn-buynow {
    display: none;
  }
}

@media only screen and (max-width: 767px) {
  .product-img img {
    width: 120px;
  }
  .product-purchase {
    justify-content: flex-end;
  }

  .product-purchase .product-btn-small-screen {
    flex: 0 0 60%;
  }
}
`;
import { createGlobalStyle } from 'styled-components';

export const ProductListingStyle = createGlobalStyle`
.products-container {
  display: grid;
  grid-template-columns: 25rem 1fr;
}

#category-selection-dropdown {
  display: none;
}

.product-category-selection {
  background-color: #eaeaea;
}

.product-category-selection nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: center;
}

.product-category-selection nav ul li a {
  text-decoration: none;
  display: block;
  color: black;
  padding: 1rem 2rem;
  border-bottom: 2px solid #bbbbbb;
  font-size: 15px;
}

.product-category-selection nav ul li a:hover,
.product-category-selection nav ul li a.active {
  background-color: #a7a1a1;
  color: #fff;
  font-weight: bold;
}

.product-category-selection nav ul li a:hover {
  font-weight: normal;
}

.products-list .product-list-container {
  display: grid;
  gap: 0.6rem;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
}
select {
  width: 100%;
  background-color: #c6346c;
  color: #fff;
  padding: 0.5em 2em 0.5em 0.5em;
  border: 1px solid #eee;
  outline: 0;
  font: inherit;
  line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, #fff 50%),
    linear-gradient(135deg, #fff 50%, transparent 50%);
  background-position: right 15px top 1em, right 10px top 1em;
  background-size: 5px 5px, 5px 5px;
}

@media only screen and (max-width: 1023px) {
  .products-list .product-list-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 767px) {
  .products-list .product-list-container {
    grid-template-columns: 1fr;
  }
  .product-category-selection {
    display: none;
  }
  .products-container {
    grid-template-columns: 1fr;
  }
  #category-selection-dropdown {
    display: block;
    margin-top: 15px;
  }
}
`;
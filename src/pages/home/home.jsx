import { useState } from 'react';
import ProductCard from '../../components/product-card/productCard';
import products from '../../data/products';
import './home.css';

function Home({ addToCart }) {


  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const categoryList = products.map((product) => {
    return product.category;
  });

  console.log(categoryList);

  const uniqueCategories = new Set(categoryList);
  const categories = [...uniqueCategories];
  const finalCategories = ["All", ...categories];

  console.log(finalCategories);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts];

  if (sortOrder === "az") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "za") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="home">

      <aside className="filter-sidebar">
        <h3>Category</h3>

        {finalCategories.map((category) => (
          <div key={category} className="category-option">
            <input
              type="radio"
              id={category}
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />

            <label htmlFor={category}>{category}</label>
          </div>
        ))}

        <hr className="filter-divider" />

        <h3>Sort</h3>

        <div className="category-option">
          <input
            type="radio"
            id="default"
            name="sort"
            value="default"
            checked={sortOrder === "default"}
            onChange={(e) => setSortOrder(e.target.value)}
          />

          <label htmlFor="default">Default</label>
        </div>

        <div className="category-option">
          <input
            type="radio"
            id="az"
            name="sort"
            value="az"
            checked={sortOrder === "az"}
            onChange={(e) => setSortOrder(e.target.value)}
          />

          <label htmlFor="az">Alphabetically (A–Z)</label>
        </div>

        <div className="category-option">
          <input
            type="radio"
            id="za"
            name="sort"
            value="za"
            checked={sortOrder === "za"}
            onChange={(e) => setSortOrder(e.target.value)}
          />

          <label htmlFor="za">Alphabetically (Z–A)</label>
        </div>
      </aside>

      <section className='products-section'>
        <h2>Our Products</h2>
        <div className="products-container">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
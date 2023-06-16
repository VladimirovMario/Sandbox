import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable/ProductTable";

import { PRODUCTS } from "../productData/productData";

import styles from "./FilterableProductTable.module.css";

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div className={styles.centered}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

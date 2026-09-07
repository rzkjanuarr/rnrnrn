import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import {
  CartComponent,
  ProductComponent,
  LoadingComponent,
  EmptyDataComponent,
  SearchComponent,
} from '../../components';
import ProductDTO from './ProductDTO';

export default function Communication2Screen() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  console.log('total:', products);
  console.log('total product:', totalProduct);

  const fetchProducts = async () => {
    try {
      const url = await fetch('https://fakestoreapi.com/products');
      const json = await url.json();
      const res = json.map(ProductDTO.fromJson);
      console.log(res);

      setProducts(res);
      setIsLoading(false);
    } catch (error) {
      console.log('gagal ambil data:', error);
      setIsLoading(false);
    }
  };

  function useLoadDataProducts(setIsLoading, setProducts) {
    useEffect(() => {
      fetchProducts();
    }, []);
  }

  useLoadDataProducts(setIsLoading, setProducts);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (products.length === 0) {
    return <EmptyDataComponent />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchComponent />
      <CartComponent quantityProduct={totalProduct} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductComponent
            productImage={item.image}
            productCategory={item.category}
            productTitle={item.title}
            productDescription={item.description}
            productPrice={item.price}
            onClickProduct={() => setTotalProduct(totalProduct + 1)}
          />
        )}
      />
      {/* <ProductComponent /> */}
    </SafeAreaView>
  );
}

import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartComponent, ProductComponent } from '../../components';

export default function CommunicationScreen() {
  const [totalProduct, setTotalProduct] = useState(0);
  console.log('total product:', totalProduct);

  return (
    <SafeAreaView>
      <CartComponent jumlahKeranjang={totalProduct} />
      <ProductComponent onClickBos={() => setTotalProduct(totalProduct + 1)} />
    </SafeAreaView>
  );
}

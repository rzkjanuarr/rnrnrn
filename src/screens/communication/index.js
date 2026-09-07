import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartComponent, ProductComponent } from '../../components';

export default function CommunicationScreen() {
  const [totalProduct, setTotalProduct] = useState(0);
  console.log('total product:', totalProduct);

  return (
    <SafeAreaView>
      <CartComponent quantityProduct={totalProduct} />
      <ProductComponent
        onClickProduct={() => setTotalProduct(totalProduct + 1)}
      />
      <View style={{ paddingHorizontal: 24 }}>
        <Text>{totalProduct}</Text>
      </View>
    </SafeAreaView>
  );
}

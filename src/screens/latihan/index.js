import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X } from 'lucide-react-native';

// class Latihan1Screen extends Component {
//   constructor(props) {
//     super(props);
//     console.log('=> constructor!');
//     this.state = {
//       subscriber: 1000,
//     };
//   }
//
//   componentDidMount() {
//     console.log('did mount!');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 1,
//       });
//     }, 10000);
//   }
//
//   componentDidUpdate() {
//     console.log('did update!');
//   }
//
//   render() {
//     console.log('=> render!');
//     return (
//       <SafeAreaView>
//         <View>
//           <Text>{this.state.subscriber} subs!</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }
//
// export default Latihan1Screen;
//

export default function Latihan1Screen() {
  const [count, setCount] = useState(0);

  console.log('=> RENDER, count sekarang:', count);

  useEffect(() => {
    console.log('=> DID MOUNT!');

    return () => {
      console.log('=> WILL UNMOUNT (cleanup jalan!)');
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Button title="click!" onPress={() => setCount(count + 1)} />
      </View>
    </SafeAreaView>
  );
}

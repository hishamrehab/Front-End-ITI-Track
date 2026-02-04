import { Button, View,StyleSheet  } from 'react-native';
import { useState } from 'react';

const ViewComponent = () => {
      const [layout , setLayout] = useState({});
    
      const layoutHandler =  (e: { nativeEvent: { layout: any }; }) => {
      const {layout} = e.nativeEvent;
      setLayout(layout);
      }
    
  return (
  <View
     style={styles.container} 
     onLayout={layoutHandler}
     pointerEvents="none"
     accessible={true}
     accessibilityLabel="example"
     >
     <Button title='click me !'/>
   </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default ViewComponent

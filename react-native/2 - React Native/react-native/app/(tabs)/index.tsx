import { useCallback, useState  } from "react";
import {Text, View, StyleSheet , FlatList , Image , TextInput, Touchable, TouchableOpacity} from "react-native"   
 

  const data = [1, 2 , 3 , 4 , 5];
  const nums = [1 ,2 , 3, 4, 5] ;
  

export default function HomeScreen() {
  const [numberOfLines , setNumOfLines] = useState<number | undefined>(1);
  const [value , setValue] = useState<string>();
  const renderItem = useCallback(() => {
    console.log("flatlist");
    return (
      <View style={{
      backgroundColor: "gold"
    }}>
      <Text>Hi</Text>
    </View>
    )
  }
),[])

//   return (
//     <View style={{
//       paddingHorizontal: 20,
//       paddingVertical: 20,
//       marginHorizontal: 20, 
//       marginVertical: 20
//     }}>
//     <Text style={ [
//       styles.paragraph,
//       styles.container
//     ]  }>
//       Hello World
//     </Text>
//     <Text style={ [
//       styles.paragraph
//     ]} 
//     onPress={()=> alert("Hi HIhsam")}
//     ellipsizeMode="middle"
//     selectable
//   >
//     <Text
//      onPress={() =>setNumOfLines(undefined)}
//      numberOfLines={numberOfLines}
//      onLongPress={() => setNumOfLines(1)}
     
//     >
//       Hello
//     </Text>
//     <Text>

//     </Text>
  
//   </Text>
//  </View>
//   );

return (
  <View style={[styles.container]}>
    <Text 
    numOflines={numberOfLines}
     onPress={() => setNumOfLines(numberOfLines ? undefined : 1)}
    >lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
   <TouchableOpacity
    onPress={() => alert("hi")} 
    onLongPress={() => alert("bye")}
    delayLongPress={200}
    activeOpacity={0.5}
    disabled
    >
    <Text>Click me</Text>
  </TouchableOpacity>
 <TextInput
   value="ssssasdasdafgfd"
   keyboardType="numeric"
   secureTextEntry
   onChangeText={setValue} 
  style={{
    borderWidth: 1 , borderColor: 'blue' 
  }}
  // returnKeyType=""
 />

      {data.map((item , index) => {
        return (
          <View>
            <Text>{item}</Text>
          </View>
          )
      }    
    )}
  <Image 
  source={{
    uri: "https://picsum.photos/200/300"
  }} 
  // source={require("../../assets/images/download.webp")} 
   style={{
    width: 300,
    height: 500,
    resizeMode: "cover"
    // resizeMode: "contain"
    // resizeMode: "repeat"
   }}
  alt="" />
  <FlatList 
   ListHeaderComponent={<View ><Text>  list header </Text></View>}
   ListFooterComponent={<View > <Text>list footer </Text></View>}
   ListEmptyComponent={data.length && <View> <Text>this list is empty</Text></View>}
   data={nums} 
   renderItem={renderItem}
   keyExtractor={(item , index) => item.toString()}
  />

</View>
)}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
  }
})
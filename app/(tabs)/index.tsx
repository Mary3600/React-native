import { Image, Pressable, Text, View } from "react-native";

export default function index() {
  return (
    <View 
      style ={{flex: 1,backgroundColor: "green",alignItems: "center", justifyContent: "center"}}
    >
      <Image source={require("../../assets/images/Me.jpeg")}
        style={{width: 200, height: 200, borderRadius: 100, borderWidth: 10, borderColor: "white"}}
      />
      <Text style={{fontSize: 30, marginBlock: 10, color: "white"}}>Mary</Text>

      <Pressable style={{ backgroundColor:'green', borderRadius: 20,}}>

      </Pressable>

      <Text style={{fontSize: 30, marginBlock: 10, color: "white"}}>PAU</Text>

      <Text> Home Screen</Text>
    </View>
  );
}

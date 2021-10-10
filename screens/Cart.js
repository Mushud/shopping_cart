import React from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import Lottie from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cart({ navigation, route }) {
  const [cart, setCart] = React.useState([...route.params.cart]);
  const [loading, setLoading] = React.useState(false);

  let lottieRef = null;

  React.useEffect(() => {
    if (lottieRef !== null) lottieRef.play();
  });

  function getTotalPrice() {
    let price = 0.0;
    for (var i = 0; i < cart.length; i++) {
      price += cart[i].product.inventories[0].price;
    }
    return price;
  }
  return (
    <View style={{ paddingHorizontal: 20, flex: 1 }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text
        style={{ textAlign: "center", fontFamily: "fira-black", fontSize: 25 }}
      >
        <Text style={{ color: "orange" }}>My</Text> Cart
      </Text>

      {route.params.cart.length == 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Lottie
            ref={(lottie) => (lottieRef = lottie)}
            style={{ height: 200, width: 200 }}
            source={require("../assets/animation/4495-shopping-basket.json")}
          />
          <Text style={{ fontFamily: "fira-black", fontSize: 18 }}>
            Your Cart is Empty 😥
          </Text>
        </View>
      ) : (
        <View>
          <View
            style={{
              borderWidth: 2,
              borderColor: "orange",
            }}
          ></View>
          <View
            style={{
              borderWidth: 2,
              borderColor: "orange",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Text style={{ fontFamily: "fira-black", fontSize: 24 }}>
              {" "}
              Total iTems: {route.params.cart.length}
            </Text>
            <Text style={{ fontFamily: "fira-black", fontSize: 24 }}>
              {" "}
              <Text style={{ color: "orange" }}>USD </Text>
              {getTotalPrice().toFixed(2)}
            </Text>
          </View>
          <FlatList
            style={{ paddingVertical: 10 }}
            data={cart}
            renderItem={({ item, index }) => (
              <View
                style={{
                  margin: 10,
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#fafafa",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={{ uri: item.product.images[0].link }}
                  style={{ height: 100, width: 100 }}
                />
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                  <Text
                    numberOfLines={2}
                    style={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    {item.product.title}
                  </Text>
                  <Text style={{ color: "green", fontWeight: "bold" }}>
                    {item.product.inventories[0].currency}{" "}
                    {item.product.inventories[0].price}
                  </Text>
                  <Text>{item.product.author.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ paddingRight: 10, color: "green" }}>
                      {item.product.condition}
                    </Text>
                    <Text>{item.product.inventories[0].availability}</Text>
                  </View>
                </View>
              </View>
            )}
          />
          <TouchableOpacity
            disabled={loading ? true : false}
            style={{ backgroundColor: "#f07e05", padding: 15 }}
            activeOpacity={0.8}
            onPress={() => {
              setTimeout(() => {
                navigation.goBack();
              }, 5000);
              setLoading(!loading);
            }}
          >
            {!loading ? (
              <Text
                style={{
                  alignSelf: "center",
                  fontFamily: "fira-black",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Checkout
              </Text>
            ) : (
              <ActivityIndicator color="white" />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

/*
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


const Myscreen = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
            <View
                style={{
                    flex: 0.5,
                    backgroundColor: "red",

                }}>
                <View
                    style={{
                        flex: 0.5,
                        backgroundColor: "green",
                    }}
                >
                    <View
                        id="1"
                        style={{
                            flex: 0.5,
                            backgroundColor: "yellow"
                        }}>
                    </View>

                </View>


            </View>
        </SafeAreaView>


    );



};

export default Myscreen;
*/


/////////////////// 2D screen division  //////////////////////////////////

import imagePath from "@constants/imagePath";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const Myscreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView 
      
      style={{}}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
            }}
          >
            <Text style={{ fontSize: 20 }}>1</Text>
          </View>
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",

              backgroundColor: "green",
            }}
          >
            <Text style={{ fontSize: 20 }}>2</Text>
          </View>
          <View
            id="1"
            style={{
              height: 200,

              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              backgroundColor: "yellow",
            }}
          ></View>
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              backgroundColor: "yellow",
            }}
            >
              <Text style={{ fontSize: 20 }}>4</Text>
            </View>
            <View
              style={{
                height: 200,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                backgroundColor: "yellow",
              }}
            >
              <Text style={{ fontSize: 20 }}>4</Text>
            </View>
            <View
              style={{
                height: 200,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                backgroundColor: "yellow",
              }}
            >
                <Text style={{ fontSize: 20 }}>4</Text>
          </View>
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              backgroundColor: "yellow",
            }}
          >
            <Text style={{ fontSize: 20 }}>4</Text>
          </View>
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              backgroundColor: "yellow",
            }}
          >
            <Text style={{ fontSize: 20 }}>4</Text>
          </View>
          <View
style={{
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    backgroundColor: "yellow",
  }}
>
  <Text style={{ fontSize: 20 }}>4</Text>
</View>
<View
  style={{
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    backgroundColor: "yellow",
  }}
>
  <Text style={{ fontSize: 20 }}>4</Text>
</View>
<View
  style={{
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    backgroundColor: "yellow",
  }}
>
  <Text style={{ fontSize: 20 }}>4</Text>
</View>
<View
  style={{
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    backgroundColor: "yellow",
  }}
>
  <Text style={{ fontSize: 20 }}>4</Text>
</View>
<View
  style={{
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    backgroundColor: "yellow",
  }}
  >
  <Text style={{ fontSize: 20 }}>234</Text>
</View>
</View>
</ScrollView>
</SafeAreaView>
);
};
export default Myscreen;






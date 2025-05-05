///////////////////// EX3:  Screen3D //////////////////////////

import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

const Screen3D = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.5, backgroundColor: "red",
            borderColor: "yellow"
          }}>
          <View style={{
            height: 60,
            flexDirection: "row",
            backgroundColor: "green",
            justifyContent: "space-between",
            alignItems: "center",
            // padding:10,
            // width:100,
            // height:100,
            // marginHorizontal:5,
            // alignContent:"center",
            // marginTop:10,
            //  marginLeft:10,
            //  marginHorizontal:100,
            //  marginRight:300,
            //  borderRadius:10,
          }}>
            <Text style={{
              color: "blue",
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "center",
            }}>1</Text>
          </View>
          {/* <View style={{
            
            height:60,
            flexDirection:"row",
            backgroundColor:"green",
            justifyContent:"space-between",
            alignItems:"center",
            padding:10,
            width:100,
            height:100,
            marginHorizontal:5,
            alignContent:"center",
                
              }}><Text style={{
                textAlign:"center",
                 fontWeight:"bold",
                 fontSize:35 }} >2</Text>
        </View> */}
          {/* <View style={{
            flexDirection:"row",          
               justifyContent:"space-between",
           marginHorizontal:20,
            height:60,
            padding:10,
              backgroundColor:"blue",
              alignItems:"center",
                 justifyContent:"center",
              borderRadius:10,
              marginTop:10,
              marginRight:200,
                
              }}><Text style={{
                textAlign:"center",
                 fontWeight:"bold",
                 fontSize:35 }} >3</Text>
        </View> */}
        </View>
        <View style={{
          flex: 0.5,
          backgroundColor: "blue",
          borderColor: "yellow"
        }}>
          <Text style={{
            color: "green",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",


          }}>This is half screen</Text>
        </View>
        <View style={{

        }}>

        </View>
      </View>

    </SafeAreaView>
  );
};


export default Screen3D;



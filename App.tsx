/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
      {/* <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text> */}
    {/* </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor} */}
      // />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}

    //   <View>
    //     <Text>Hello Ahmad</Text>
    //   </View>
    // </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//  });

// export default App;


                    ////////*MobApp Project 10 Feb 2025 *///////




//        import Myscreen from "./src/Screen/myscreen";


        
//         import React from "react";
//         import { View } from "react-native";

//         const App =()=>{

//           return(
//             <View style={{flex:1}}>
//                 <Myscreen/>
//             </View>
//           );
//         };
// export default App;


            ////// 1st Task screen division ///////////////

 /*           import DivideScreen from "./src/Screen/DivideScreen";
            import React from "react";
            import { SafeAreaView, Text, View } from "react-native";        
            const App =()=>{
              return(
                <SafeAreaView>
                <View  style={{
                  flex:1, 
                  backgroundColor:"blue" 
                  }}                 
                  >
                    <DivideScreen/>                    
                </View>
                
                </SafeAreaView>
              );
            };   
export default App;

*/
   

        


          ///////////////////////////EX 2: 2D Screen Division ///////
          /*
          import { SafeAreaView, StyleSheet, Text, View } from "react-native";
           import React from "react";
           import Mysreen from "./src/Screen/Myscreen";

const Myscreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",

            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View style={styles.viewStyle}>
            <Text>1</Text>
          </View>
          <View
            style={{
              borderRadius: 20,
              borderWidth: 10,
              borderColor: "yellow",
              backgroundColor: "green",
              flex: 0.3,
              padding: 20,
              alignItems: "center",
            }}
          >
            <Text>2</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Myscreen;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "blue",
    flex: 0.3,
    alignItems: "center",
    padding: 20,
  },
});

*/


///////////////////////EX3 :Screen3D////////////////////////
import React from "react";
import {Text,StyleSheet, SafeAreaView, View} from "react-native";
import Screen3D from "./src/Screen/Screen3D";

const App = () =>{
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{
        flex:1,
        
      }}>
        <Screen3D/>

      </View>

    </SafeAreaView>
  );
};
export default App;


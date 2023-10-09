import React from "react";

import { View,Text,TouchableHighlight, StyleSheet,Image, Alert } from "react-native";
import RazorpayCheckout from 'react-native-razorpay';

function App(){
 
  const handlePayment =() =>{
    var options={
      name: 'Harry potter',
      descriptions:'For Test payment',
      currency:'INR',
      amount: 50000,
      key:'rzp_test_Y2a9SBMrVfLErJ',
      prefill:{
        email:'mm@gmail.com',
        contact:'8989898989',
        name:'Tester'
      },
      theme:{color: '#f37251'}
    }
    RazorpayCheckout.open(options).then((data) => {
      console.log("data", data)
      Alert.alert('Success');

    })
    .catch((error) => {
      Alert.alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  return(
    <View style={styles.container}>

 <Image style={styles.productimage} source={require('./assets/book.jpg')}/>
 
 <Text style={styles.text}>HARRY POTTER</Text>
 <Text style={{fontSize:20,color:'#000000'}}>RS. 555</Text>
 <TouchableHighlight style={styles.button} onPress={()=> handlePayment()}>
  <Text style={styles.buttontext}>Buy Now</Text>
 </TouchableHighlight>

    </View>
  );
}
const styles =StyleSheet.create({
 container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
 },
 productimage:{
  width:250,
  height:350
 },
 text:{
  fontSize:20,
  color:'#000000',
  fontWeight:'700',
  marginTop:10
 },
 button:{
  width:150,
  height:40,
  backgroundColor:'#3D145A',
  borderRadius:5
 },
 buttontext:{
  fontSize:15,
  color:'#FFFFFF',
  textAlign:'center',
  marginTop:10,
  fontWeight:'400'
 }

})

export default App;

// npm install --save react-native-razorpay

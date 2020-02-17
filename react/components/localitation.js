import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Body, Card, CardItem, Item, Input, Label, Text } from "native-base";

const url = "http://192.168.1.2:3000/server/ubication"

export default class Localitation extends Component {

  constructor(){
    super();
    this.state = {
      nombre: null
    }
  }

  getLocalitation(){
    navigator.geolocation.getCurrentPosition((posiscion) => {
      let latitud= posiscion.coords.latitude;
      let longitud = posiscion.coords.longitude;
      var fecha = new Date();
      let data =  {
        fecha: fecha,
        ubicacion: `${latitud.toString()}, ${longitud.toString()}`,
        user: 'David'
      }

      const header = {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
  
      return fetch(url,header)
      .then((response) => response.json())
      .then((responseJson) => {
        alert('Datos guardados')
      })
      .catch((error) => {
        console.log(error)
      })
    })
  }

  render(){
    return(
         <Container >
        <ImageBackground source={require('../assets/img/fondo.jpg')} style={styles.img}>
            <Title style={styles.font} >Localizacion</Title>
          <Content contentContainerStyle={styles.content}>
              
              <CardItem style={styles.card}>
                <Body >
                  <Item fixedLabel>
                    <Label style={styles.text}>Nombre:  </Label>
                    <Input  placeholder="Ingrese su Nombre" onChangeText={(text)=>{this.setState({nombre: text})}}/>
                  </Item>
          
                </Body>

              </CardItem>
          </Content>
          
              <Button rounded  style={styles.btn} onPress={this.getLocalitation}>
                        <Text style={styles.tex} >Ubicación</Text>
               </Button>
      
        </ImageBackground> 
      </Container>
    )  
  }
}


const styles = StyleSheet.create({
 img : {
      flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        
    },
     content: {
        flex: 2,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: '15%',

    },


    font : {
      color : '#727F8A',
      fontSize: 30,
      left: 5,
      
      top : 80,
    },

      card: {
      backgroundColor:'#F1F6F7',
        opacity: 0.7,
        paddingBottom: '10%',
        marginLeft: '3%',            
        marginRight: '3%', 
        borderRadius: 50,
    },

    text : {
      color : '#096A8C',
      paddingTop : '-5%',
      fontSize: 20,
     
    },

    input: {
        color: '#DEEBF0',
        fontSize: 25,
        paddingTop: '50%',
        

    },
    btn: {
      
        marginRight: '60%',
        marginLeft: '5%',
        backgroundColor: '#646668',
        left: 100,
        top: -250,
        justifyContent: 'center',
        alignItems: 'center',

    },

     tex : {
      
      fontSize: 15,
    }

});
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
const myIcon = <Icon name="star" size={20} color="#900" />;

const Membresia = ({ name, description, price, duration, initialPrice, quotes, quoteprice, nameFamilyPackage, navigation }) => {

    const handlePress = () => {
        navigation.navigate("Cronograma",{name})
    }

    return (
        <View style={styles.content}>
            <View style={styles.card}>
                <Text style={styles.titulo}> {name} </Text>
                <Text style={styles.subtitulo}> {description} </Text>
                <Text style={styles.precio}>{price} USD</Text>
                <View style={styles.detalles}>
                    <Text style={styles.detalle}>{myIcon} paquete familiar {nameFamilyPackage}</Text>
                    <Text style={styles.detalle}>{myIcon} duración: {duration}</Text>
                    <Text style={styles.detalle}>{myIcon} inicial: {initialPrice} USD</Text>
                    <Text style={styles.detalle}>{myIcon}  N° de cuotas: {quotes} USD</Text>
                    <Text style={styles.detalle}>{myIcon} inicial: {initialPrice} USD</Text>
                    <Text style={styles.detalle}>{myIcon} precio de cuota: {quoteprice} USD</Text>
                </View>
                <Text style={styles.cronograma} onPress={ () => handlePress() }>Ver Cronograma</Text>
                <View style={styles.contentButton}>
                    <Button title="Subscribirse" color="#2b6cb0"/>
                </View>
            </View>
        </View>
    )
}

export default Membresia

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: "red",
        textAlign: "center",
        fontWeight: "bold"
    },
    subtitulo: {
        fontSize: 15,
        textAlign: "center",
    },
    content: {
        marginHorizontal: 5,
        marginBottom:20
    },
    card: {
        width: 300,
        borderRadius: 10,
        borderColor: "#2b6cb0",
        borderWidth: 0.15,
        overflow: "hidden"
    },
    detalles:{
        paddingLeft:30
    },
    detalle:{
        textTransform:"capitalize"
    },
    contentButton:{
        flexDirection: 'row',
        justifyContent:"center",
        marginVertical:10
    },
    precio:{
        textAlign:"center",
        color:"#2b6cb0",
        fontSize:30,
        fontWeight:"bold"
    },
    cronograma:{
        textAlign:"center",
        textDecorationLine:"underline",
        marginVertical:8,
        color:"#2b6cb0",
        fontSize:16
    }
})


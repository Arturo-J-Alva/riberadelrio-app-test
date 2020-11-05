import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Membresia from '../components/membresia'
import data from '../data/suscription.json'

const Membresias = ({ navigation }) => {
    const suscriptions = data.objModel

    return (
        <View >
            <View style={styles.content}>
                <Text style={styles.titulo}>Ribera del Río</Text>
                <Image source={require("../images/banner.jpg")} style={styles.image} />
                <Text style={styles.elige}>Elige una de nuestras membresías:</Text>
            </View>

            <FlatList
                horizontal
                style={styles.lista}
                data={suscriptions}
                renderItem={({ item }) => <Membresia {...item.package} navigation={navigation} />}
                keyExtractor={(item, ind) => ind.toString()}
            />
        </View>
    )
}

export default Membresias

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 10
    },
    image: {
        width: "100%",
        height: 200
    },
    titulo: {
        fontSize: 30,
        textAlign: "center",
        color: "red",
        textDecorationLine: "underline",
        marginVertical: 10,
        fontWeight: "bold"
    },
    elige: {
        color: "red",
        fontSize: 20,
        marginVertical: 7
    },
    lista: {
        marginVertical: 25
    }
})

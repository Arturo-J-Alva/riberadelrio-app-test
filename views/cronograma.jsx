import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Pago from '../components/pago'
import data from '../data/data.json'

const Cronograma = ({ navigation, route }) => {
    console.log(data.objModel)
    console.log(navigation)
    console.log(route.params)
    return (
        <View>
            <Text style={styles.titulo}>Cronograma De Pagos</Text>
            <Text style={styles.subtitulo}> (Membresía: {route.params.name}) </Text>
            <ScrollView style={styles.content}>
                {
                    data.objModel.map((dat, ind) => <Pago key={ind} {...dat} />)
                }
            </ScrollView>
        </View>
    )
}

export default Cronograma

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: "#2b6cb0",
        textAlign: "center",
        fontWeight: "bold"
    },
    subtitulo: {
        fontSize: 18,
        textAlign: "center"
    },
    content:{
        marginBottom:95
    }
})
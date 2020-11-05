import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from "moment"
import 'moment/locale/es'

const Pago = ({ quoteDescription, quote, amortization, capitalBalance, dollarExchange, nextExpiration }) => {
    return (
        <View style={styles.content}>
            <View style={styles.pago}>
                <Text style={styles.titulo}>{quoteDescription}</Text>
                <View style={styles.detalles}>
                    <Text style={styles.detalle}>Cuota: {quote} USD</Text>
                    <Text style={styles.detalle}>Amortización: {amortization} USD</Text>
                    <Text style={styles.detalle}>Balance de capital: {capitalBalance} USD</Text>
                    <Text style={styles.detalle}>Cambio de dolar: {dollarExchange} soles</Text>
                    <Text style={styles.detalle}>Vencimiento: {moment(nextExpiration).format('DD/MM/YY')}</Text>
                </View>
            </View>

        </View>
    )
}

export default Pago

const styles = StyleSheet.create({
    content: {
        marginVertical: 7,
        paddingHorizontal: 10
    },
    pago: {
        borderBottomWidth: 3,
        borderBottomColor: "red",
        paddingHorizontal: 5,
    },
    titulo: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    detalles: {
        width: "100%"
    },
    detalle: {
        textAlign:"center"
    }
})

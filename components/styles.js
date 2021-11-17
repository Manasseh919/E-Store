import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    

    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical:5



    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18,

    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        paddingLeft: 5,
        textDecorationLine:'line-through'
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    }
})

export default styles;
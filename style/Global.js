import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },

    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: '#333',
    },

    textbold: {
        fontWeight: 'bold',
    },

    paragrapgh: {
        marginVertical: 8,
        lineHeight: 20,
    },

    headerStyle: {
        backgroundColor: 'lightgray',
    },

    headerTitle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold'
    },
    headerTitleAbout: {
        color: 'red',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
    },

    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },

    image: {
        width: 26,
        height: 26,
    },

    viewTitle: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 50,
    },

    modalView: {
        flex: 1,
    },

    modelToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
    },

    modalClose:{
        marginTop: 20,
        marginBottom: 0,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 0,
        fontSize: 18,
        borderRadius: 10,
    },

    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}
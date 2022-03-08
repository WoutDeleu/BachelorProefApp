import {StyleSheet} from "react-native";
export default StyleSheet.create({
    container: {
    flex: 1,
    },
    // ListItem
    listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 25,
    },
    listItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    removeBtn: {
        backgroundColor: "transparent",
    },
    removeBtnText: {
        color: "red",
    },
    hr: {
        height: 1,
        backgroundColor: "gray",
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#ee6e73",
        position: "absolute",
        bottom: 10,
        right: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
    fabText: {
        fontSize: 30,
        color: "#fff",
    }
});
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

function GoalItem({ id, text, onDeleteItem, onEditItem }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.item}>
            <Pressable style={styles.itemLeft} onPress={() => setModalVisible(true)}>
                <View style={styles.itemLeft}>
                    <Image
                        source={require("../assets/images/figma_elements-removebg-preview.png")}
                        style={styles.image}
                    />
                    <Text style={styles.itemText}>{text}</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => onDeleteItem(id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>X</Text>
            </Pressable>

            <EditTaskModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                taskText={text}
                onSave={(newText) => {
                    onEditItem(id, newText);
                    setModalVisible(false);
                }}
            />
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#C1CFA1',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        maxWidth: '80%',
    },
    deleteButton: {
        backgroundColor: '#FF8787',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
});

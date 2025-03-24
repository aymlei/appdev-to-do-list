import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditTaskModal = ({ visible, onClose, taskText, onSave }) => {
    const [updatedText, setUpdatedText] = useState(taskText);

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Edit Task</Text>
                    <TextInput
                        style={styles.input}
                        value={updatedText}
                        onChangeText={setUpdatedText}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Cancel" onPress={onClose} color="#FF8080" />
                        <Button title="Save" onPress={() => onSave(updatedText)} color="#A5DD9B" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default EditTaskModal;

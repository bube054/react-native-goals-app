import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, onDeleteItem, id }) {
  const deleteGoalHandler = () => {
    onDeleteItem(id);
  };

  return (
    <View>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});

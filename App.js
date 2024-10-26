import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const startAddGoalHandler = () => {
    setShowModal(true);
  };

  const endAddGoalHandler = () => {
    setShowModal(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((previousGoals) => [
      ...previousGoals,
      { id: Math.random()?.toString(), text: enteredGoalText },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal?.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.container}>
        <Button
          onPress={startAddGoalHandler}
          title="Add New Goal"
          color="#a065ec"
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          showModal={showModal}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
  },
  goalsContainer: {
    flex: 5,
  },
});

import React, { useState } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './style';
import { Task } from '../../components/Tasks/'

export default function Home() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  return (
	<View style={styles.container}>
	{/* Tarefas de Hoje */}
		<View style={styles.tasksWrapper}>
			<Text style={styles.sectionTitle}>Tarefas de Hoje !</Text>

			<View style={styles.items}>
				{/* Aqui vão as tarefas !! */}
				{
					taskItems.map((item, index) => {
						return <Task key={index} text={item} />
					})
				}
			</View>
		</View>

	{/* Escreva uma tarefa */}
	<KeyboardAvoidingView
		style={styles.writeTaskWrapper}
		behavior={Platform.OS === "ios" ? "padding" : "height"}
	>
		<TextInput
			style={styles.input}
			placeholder={'Escreva uma tarefa !'}
			value={task}
			onChangeText={text => setTask}
		/>

		<TouchableOpacity onPress={() => handleAddTask()}>
			<View style={styles.addWrapper}>
				<Text style={styles.addText}>+</Text>
			</View>
		</TouchableOpacity>
	</KeyboardAvoidingView>
	</View>
  );
}
import { View, StyleSheet, Text, FlatList} from 'react-native';
import { Header } from '../components/Header';
import { TaskInput } from '../components/TaskInput';
import { TaskCard } from '../components/TaskCard';

interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}

const mockTasks: Task[] = [
    { id: '1', title: 'Comprar leite', isCompleted: false },
    { id: '2', title: 'Enviar email para o chefe', isCompleted: true },
    { id: '3', title: 'Lavar o carro', isCompleted: false },
];

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Header />
      
      <View style={styles.content}>
        <TaskInput />
        
        <FlatList
          data={mockTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard title={item.title} isCompleted={item.isCompleted} />
          )}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    content:{
        flex:1,
        width:'100%',
        padding:20,
    },
    list:{
        marginTop:20,
    }
});
import { View, StyleSheet, Text} from 'react-native';
import { Header } from '../components/Header';
import { TaskInput } from '../components/TaskInput';


export default function MainScreen() {
  return (
    <View style={styles.container}>
        <Header/>
      <View style={styles.content}>
        <TaskInput/>
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
});
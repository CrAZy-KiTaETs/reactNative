
import { Animated, StyleSheet, Text, View, Button } from 'react-native';
import { FlatList, SectionList } from 'react-native-web';
import {useEffect, useRef} from 'react'


const section = [
  {title: 'Fruit', items: ['Apple', 'Orange', 'Banana']},
  {title: 'Vegetables', items: ['Cucumber', 'Carrot', 'Potato']}
];


export default function App() {
  const fontSizeAnim = useRef(new Animated.Value(10)).current
  const springAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fontSizeAnim, {
          toValue: 30,
          duration: 3000,
          useNativeDriver: false
        }),
        Animated.timing(fontSizeAnim, {
          toValue: 10,
          duration: 3000,
          useNativeDriver: false
        })
      ])
    ).start()
  }, [fontSizeAnim])

  const startSpringAnimation = () => {
    springAnim.setValue(0)
    Animated.spring(springAnim, {
      toValue: 1,
      friction: 5,
      tension: 10,
      useNativeDriver: true
    }).start()
  }
  return (
   <View style={styles.container}>
     <Animated.Text style={{fontSize: fontSizeAnim}}>
      Здарова, как дела?
    </Animated.Text>
    <Button title='Click me' onPress={startSpringAnimation}/>
    <Animated.View style={{transform: [{scale: springAnim}]}}>
      <Text>Прыжок</Text>
       </Animated.View>
   </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

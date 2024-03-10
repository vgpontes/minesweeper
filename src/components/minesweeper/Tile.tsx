import { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";

export interface TileProps {
    key: string
    tileSize: number
    number: number
}

const styles = StyleSheet.create({
    square: {
      borderRadius: 5,
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      userSelect: "none"
    },
});

export function Tile(props : TileProps) {
    const [pressed, setPressed] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#8FE186');

    const handlePress = () => {
        if (!pressed) {
          // Perform your action here
          console.log('Button pressed!');
          
          // Update state to indicate button has been pressed
          setPressed(true);
          setBackgroundColor('#EFD8A3')
        }
    };
    
    return (
        <Pressable 
            key={props.key}
            onPressOut={handlePress}
            disabled={pressed}
            style={({pressed}) => [
                styles.square, 
                    {
                        height: props.tileSize - 5, 
                        width: props.tileSize - 5,
                        backgroundColor: backgroundColor
                    }]
                }>
            <Text>{props.number}</Text>
        </Pressable>
    )
}
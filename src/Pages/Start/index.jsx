import React from "react";
import { requireNativeComponent } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import{View,ScrollView, text, Image} from "react-native"

export default function Start() {
return(

    <view>
        <ScrollView showsVerticalScrollIndicator={false}>
<view>

    <image
    source={require("../.../assets/icons/logo3.png")}
    />
    <Text style={styles.description}>
            Vamos transformar sua vida {"\n"} em um jogo, buscando sempre {"\n"}{" "}
            o melhor nível.
          </Text>
</view>

        </ScrollView>

    </view>
)

}
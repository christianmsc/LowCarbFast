import React, { Component } from "react";
import api from "../services/api";

import { View, Text } from "react-native";

export default class Main extends Component {
    static navigationOptions = {
        title: "Low Carb Fast"
    };

    componentDidMount() {
        this.listarAlimentos();
    }

    listarAlimentos = async () => {
        try {
            const response = await api.get("/alimentos");
            console.log(response.data);
            // const { docs } = response.data;
            // console.log(docs);
        } catch (error) {
            console.log(error);
          }
        
    };

    render(){
        return (
            <View>
                <Text>Testando Main</Text>
            </View>
        );
    }
}
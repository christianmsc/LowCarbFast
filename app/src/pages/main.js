import React, { Component } from "react";
import api from "../services/api";

import { View, Text } from "react-native";

export default class Main extends Component {
    static navigationOptions = {
        title: "Low Carb Fast"
    };

    state = {
        alimentos: []
    };

    componentDidMount() {
        this.listarAlimentos();
    }

    listarAlimentos = async () => {
        try {
            const response = await api.get("/alimentos");
            const alimentos = response.data;
            this.setState({alimentos: alimentos});
        } catch (error) {
            console.log(error);
          }
        
    };

    render(){
        return (
            <View>
                <Text>Alimentos:</Text>
                {this.state.alimentos.map(alimento => {
                    return (
                        <Text key={alimento.id}>{alimento.nome}</Text>
                    );
                })}
            </View>
        );
    }
}
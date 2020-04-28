import React from "react";
import FactGenerator from "./FactGenerator";
import facts from '../arrays/FactsDatabase'
import { render } from "react-dom";
import { View } from "react-native";
import { FaceAnchorProp } from "expo/build/AR";

class FactMain extends React.Component {
    constructor() {
        super();
        this.state = {
            fact: facts[0].fact
        };
    }
        randomFact() {
            const randomNumber = Math.floor(Math.random() * facts.length);
            return facts[randomNumber];
        }
        shuffleFacts(array){
            return array.sort(()=>Math.random()-0,5)
        }

        handleClick = () => {
            const generateRandomFact = this.randomFact();
            this.setState({
                fact: generateRandomFact.fact
            });
            this.shuffleFacts(facts)
        };
        render() {
            return (
                <View>
                    <FactGenerator handleClick={this.handleClick}
                    {...this.state}/>
                </View>
            );
        }
    }


export default FactMain;
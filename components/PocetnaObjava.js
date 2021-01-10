import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalVariables from "../constants/GlobalVariables.js";
import {Context} from "./Context.js";
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";


class PocetnaObjava extends React.Component{

    changeDate = (date) =>{
        const stringDate = date.substring(0,10);
        const day = stringDate.substring(8);
        const month = stringDate.substring(5,7);
        const year = stringDate.substring(0,4);
        return(
            <View style={{flexDirection: "row", justifyContent:"space-between",position: "absolute",
            bottom: 0,}}>
            <Text style={{paddingTop: 0,
            fontSize: 13,
            marginLeft: "2%",
            marginRight: "75%"}}>
                {day}.{month}.{year}
            </Text>
            <Ionicons color="black" size={15} name="md-share" />
            </View>
        )
    }
    cutString = (string) => {

        if(string.length > 70 ){
            let output1 = string.substring(0,70);
            let output2 = string.substring(70);
            let output3 = output2.substring(0,output2.indexOf(" ")+1) + "...";
            const toReturn = output1 + output3 ;
            
            return(
                toReturn
            )
        }
        return string;

    }

    onPress= (image,content,title,category) =>{
            GlobalVariables.image= image;
              let result3 = content.replace(/iframe/g, "iframe allowFullScreen='true' webkitallowfullscreen='true'");
            GlobalVariables.content = result3;
            GlobalVariables.title = title;
            GlobalVariables.link = this.props.link;
            category(this.props.category);
            this.props.navigation.navigate("Posts")

    }

    

    render(){
        let image = this.props.image;
        return(
            <Context.Consumer>
            {data => {
        return(
            <TouchableOpacity style={styles.touch} onPress={() => this.onPress(image,this.props.content,this.props.title,data.handleCategory)}>
                    <Grid style={styles.objava}>
                    <Row size={3.5}>
                    <View style={styles.kontainerslike}>
                            <Image
                                source={{uri:image}}
                                style={styles.kontainerslike}
                            />
                            </View>
                            </Row>
                            <Row style={{marginTop: "2%"}} size={1}>
                                <Text style={styles.textObjave}>
                                    {this.cutString(this.props.title)}
                                </Text>
                            </Row>
                            <Row size={1}>
                                <Ionicons style={{marginLeft: "95%"}} color="black" size={15} name="md-share" />
                            </Row>
                    </Grid>
                    <View
                    style={{
                    height: 1,
                    width: "95%",
                    marginLeft:"2%",
                    backgroundColor: "#CED0CE",
                    }}
                    />
            </TouchableOpacity>
        )
    }}
            </Context.Consumer>
        )
    }
}



const styles = StyleSheet.create({
        objava: {
            width: "98%",
            marginBottom: "1%",
            alignSelf: "center",
            // flex: 2,
            // flexDirection:'row'
            

        },
        kontainerslike: {
            width: "100%",
            alignSelf: "center",
            height:180

        },
        slika: {
            alignSelf: "center",
            height: "100%",
            width: "100%"

        },
        textObjave: {
            fontStyle: "italic",
            fontSize: 17,
            marginLeft: "1%",
            
        },
        textBox:{
            width: "98%",
            marginTop: "3%",
            height: "27%"

        },
        touch:{
            marginBottom: 5,
        }


});


export default PocetnaObjava;
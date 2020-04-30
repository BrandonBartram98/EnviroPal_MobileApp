import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Modal, Alert, ScrollView} from 'react-native';
import Header from '../components/Header';
import FactMain from '../components/FactMain';
import TreeMenu from '../components/TreeMenu';

function HomePage() {
    const [modalTransport, setModalTransport] = useState(false);
    const [modalFood, setModalFood] = useState(false);
    const [modalWaste, setModalWaste] = useState(false);
    const [modalProduce, setModalProduce] = useState(false);
    const [modalElectronics, setModalElectronics] = useState(false);
    const [modalWildlife, setModalWildlife] = useState(false);
    return (
        <View style={styles.container}>
            <Header title="Home" />
            <Modal animationType='slide'
            transparent={true}
            visible={modalTransport}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>TRANSPORT</Text>
                <ScrollView>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    By taking public transport, you can significatly lower greenhouse gas emissions.
                    Heavy rail transit like subways produce on average 76% lower greenhouse gas emissions
                    per passenger mile. Light weight rail produces 62% less and taking the bus produces 33% less.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Sharing rides through public transportation can save fuel. It also decreases the need for constructing
                 more transportation infrastructure, manufacturing new vehicles, and extracting more fossil fuels, meaning
                  further energy savings and fewer environmental impacts. Congestion relief from transit also saves fuel as
                    vehicles stuck in gridlock waste fuel and generate emissions.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                In addition to its environmental benefits, transit serves several other public purposes, including 
                affordable mobility, congestion relief, and economic development.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: https://www.transit.dot.gov/regulations-and-guidance/environmental-programs/transit-environmental-sustainability/transit-role
                </Text>
                </ScrollView>
                <TouchableOpacity style={{}} onPress={() => {setModalTransport(!modalTransport);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>
            
        <Modal animationType='slide'
            transparent={true}
            visible={modalFood}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>FOOD</Text>
                <ScrollView>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Farming animals for meat and dairy requires space and huge amounts of water and feed. The livestock industry alone 
                generates nearly 15% of all man made greenhouse gas emissions. With global meat consumption soaring 500% between 1992
                 and 2016, it is clear we need to rebalance our diets by prioritising plants and moderating our intake of animal products. 
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                In the UK, we eat £4.5 billion worth of seafood each year, but high demand and poor management have led to overfishing,
                 causing numbers of firm favourites, like North Sea cod and wild Atlantic salmon, to plummet. When shopping, look out
                  for labels such as the blue MSC label or ASC, which signal that the fish comes from a well-managed source, and try
                   lesser-known species like saithe, pollock and hake.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Plastic has infiltrated our natural world and even our diets. Bring a reusable-bag when you shop, opt for packaging-free
                 fruit and vegetables where possible, and ask brands and retailers that continue to use plastic to find alternatives.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: https://www.wwf.org.uk/what-can-i-do/10-tips-help-you-eat-more-sustainably
                </Text>
                </ScrollView>
                <TouchableOpacity style={{}} onPress={() => {setModalFood(!modalFood);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal animationType='slide'
            transparent={true}
            visible={modalWaste}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>WASTE</Text>
                <ScrollView>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Don’t be intimidated by the complicated symbols and sorting rules. Navigating the recycling system is actually quite
                 simple once you do a little research. Since recycling standards vary from place to place, find out the specific rules
                  for your area. While it’s better to implement reusable packaging in your home wherever possible, recycling is the
                   next best option and it will prevent excess waste from heading for the landfill.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                One of the simplest ways to decrease the amount of waste you produce is to use reusable bags while shopping. Instead
                 of relying on your supermarket’s plastic bags, bring your own cloth ones to pack up your items and tote them
                  home. Keeping a bunch of extra bags in the trunk of your car or right by the door is an easy way to make sure you
                   don’t forget them at home.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Every day, a large amount of what you throw into the trash could be composted and returned to the earth. If you have
                 a bin and some extra space, you can easily start a compost that could feed back into your garden. Your excess food
                  won’t go to waste, your garden will be full of nutrients and you can feel better about your impact on the planet.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: https://www.huffpost.com/entry/reduce-home-waste_n_57912d0be4b0fc06ec5c4b56?guccounter=1
                </Text>
                </ScrollView>
                <TouchableOpacity style={{}} onPress={() => {setModalWaste(!modalWaste);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal animationType='slide'
            transparent={true}
            visible={modalProduce}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>PRODUCE</Text>
                <ScrollView>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                When growing your own food, your diet is more diverse and healthy, packed with vitamins, minerals and antioxidants.
                 Food in its rawest, freshest form is not only the tastiest way to enjoy it, but also the most nutritional. The majority
                  of produce sold in grocery stores go through a long process of being harvested, shipped and distributed to stores.
                   Once distributed, the produce can end up staying in storage or on the shelf for an extended period of time before
                    being purchased, losing nutritional value.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Gardening is a fun way to get outside for some fresh air and physical activity. The physical activity required in gardening
                 has proven to promote physical health. Involvement in gardening helps to improve cardiac health and immune system
                  response, decrease heart rate and stress, improve fine and gross motor skills, flexibility and body strength.
                   Getting regular exercise can relieve stress, anxiety and depression, while boosting energy.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Long-distance transportation of produce relies heavily on fossil fuels. Growing your own food would help reduce
                 the reliance on this transportation that is harming the environment. Also, by growing your own food, you are not
                  using chemicals or pesticides that can harm environment.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: https://www.unh.edu/healthyunh/blog/nutrition/2018/05/5-reasons-grow-your-own-food
                </Text>
                </ScrollView>
                <TouchableOpacity style={{}} onPress={() => {setModalProduce(!modalProduce);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal animationType='slide'
            transparent={true}
            visible={modalElectronics}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
            <Text style={{fontWeight: "bold", paddingBottom: 5}}>ELECTRONICS</Text>
            <ScrollView>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Everyone uses computers, laptops, and tablets. Once these devices are worn out, we dump them or recycle them,
                 and they always are a source of hazardous substances that harm the environment. So we need to start buying
                  eco-friendly laptops as they consume less power as well as do not release toxic components while recycling. Many companies
                   like Lenovo and Asus have taken the initiative for manufacturing eco-friendly laptops. These eco-friendly laptops use
                    biofuel and organic light-emitting diodes (OLEDs). The cells of such laptops use natural gas, methanol,
                     and other Eco-friendly liquid fuels. Basically, these laptops use eco-friendly components that make them less
                      harmful to produce and discard.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                During showers, a lot of us waste a significant amount of water. We get so engaged in our showers thinking about
                 the way our world works and philosophizing the meaning of life that we don’t notice the amount of water being wasted.
                  Water Pebble is a gadget that helps reduce water wastage. You can place a water pebble near your water tub
                   plug or the drain. There is a limit of water that you can use for your shower. If we extend that limit,
                    the water pebble will warn us by indicating red light. In this way, you can save energy consumption as well as water.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Moixa Energy Ltd and many other companies are investing in manufacturing USB Cells to replace the normal alkaline batteries.
                 Any USB charger or a computer can recharge these batteries. The USB rechargeable batteries look similar to our normal
                  daily use of alkaline batteries. But the positive end has a USB plug that can be connected to a USB charger.
                   The time taken by these batteries to charge is nearly 5 hours.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: https://www.technobyte.org/eco-friendly-green-electronic-gadgets/
                </Text>
                </ScrollView>
                <TouchableOpacity style={{}} onPress={() => {setModalElectronics(!modalElectronics);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
                
            </View>
        </Modal>

        <Modal animationType='slide'
            transparent={true}
            visible={modalWildlife}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>WILDLIFE</Text>
                <ScrollView>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Make your home wildlife-friendly by simply securing rubbish in bins with locking lids, feeding your pets
                 indoors, and locking pet doors at night to avoid attracting wild creatures into your home.
                 Clean up the space around you, because litter is not only an eyesore, but it’s also a detriment to the wellbeing of
                  wildlife. Litter can pose choking hazards and cause ecosystem pollution, while plastics and chemicals from our
                   waste can be dangerous to wildlife in various ways.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Plant native plants in your garden or on any land you own to provide food and shelter for native wildlife,
                 and to help preserve their natural habitats. Native plants can also attract native insects like bees
                  and butterflies that help pollinate your plants.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Avoid using herbicides and pesticides when planting. Although these chemicals are effective in protecting
                 your plants from pests, they are also capable of doing huge amounts of damage to the ecosystem. Not to mention
                  that these hazardous pollutants take a long time to degrade, and they build up in the soils and can be distributed throughout the food chain.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: https://www.blueplanetaquarium.com/blog/conservation/world-wildlife-day-2018/
                </Text>
                </ScrollView>
                <TouchableOpacity style={{}} onPress={() => {setModalWildlife(!modalWildlife);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <FactMain style={styles.factsSections}></FactMain>
        </View>
            <View>
            <Text style={styles.sustainableText}>How Can I Live More Sustainably?</Text>
            </View>
        <View style={{ backgroundColor: 'lightblue', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalTransport(!modalTransport);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Transport</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalFood(!modalFood);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalWaste(!modalWaste);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Waste</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalProduce(!modalProduce);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Produce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalElectronics(!modalElectronics);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalWildlife(!modalWildlife);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Wildlife</Text>
            </TouchableOpacity>
          </View>

        </View>
            </View>
    );
};

const styles = StyleSheet.create({
    sustainableText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: '5%',
        backgroundColor: 'black'
    },
    buttons: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderWidth: 0.5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        flex: 1,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

export default HomePage;
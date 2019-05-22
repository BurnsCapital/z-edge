import React from 'react';
import { connect } from 'react-redux'
import { toggleLight } from '../actions'

import { Pano, StyleSheet, Text, View, asset, LiveEnvCamera } from 'react-360';
import { Hl , Btn_floating , Card, CardContainer} from '../components';

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hover: false,
   };
     
  }
  
  componentDidMount() {
    this.setState({ hover: false });    
  }
  
  render() {
    const { viewMode, toggleTheme } = this.props;
    return <View>
            <View style={styles.panel}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}
                >
                <Clock />
                <Row>
                  <View id="left coloumn">
                   <Card >
                    <Text> Balance </Text>
                   </ Card>
                  <Row> 
                    <Card />
                    <Card />
                  </Row>
                  <Card id="accounts" />
                  </View>
                  <View id="middle">
                  </View>
                  <View id="right">
                    <Card id="MarketTicker"> 
                      <Text>Exchange Rate</Text>
                    </Card>
                    <Card id="Transactions">
                    </Card> 
                  </View>
                </Row>
            </View>
          </View>;
  }
}
/*boneyard
   <Pano>
                <LiveEnvCamera  />
              </Pano>
           <Hl size="h6"  msg={this.props.store.viewMode} />
              .h + ":" + m + ":" + s    
              
<Image source={asset('Cody.jpg')} style={styles.image}/>
*/
const mapStateToProps = state => {
  return {
    viewMode : state.viewMode
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme(){ 
            dispatch({type: 'TOGGLE_LIGHT'});
          }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Front);

const styles = StyleSheet.create({
    image : {
      flexGrow: 1,
      flexBasis: 5,
    },
    panel: {
      // Fill the entire surface
      width: 940,
      height: 350,
      backgroundColor: 'rgba(255, 255, 255, .05)',
      transform: [{translateX: 25}],
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  });
  
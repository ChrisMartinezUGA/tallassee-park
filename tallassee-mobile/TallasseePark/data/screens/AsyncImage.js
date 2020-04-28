import React from 'react';
import { View, ActivityIndicator, Image} from 'react-native';
import storage from '@react-native-firebase/storage';
export default class AsyncImage extends React.Component {
//The constructor for your component
constructor(props){
    super(props)
    this.state = {
        loading: true,
        mounted: true,
        image: "images/trail.jpg",
        url: "",
    }
}
//The code that is called when the component is first mounted. Use it to setup the component and load the image files
componentDidMount() {
    this.setState({ isMounted: true })
    this.getAndLoadHttpUrl()
}

async getAndLoadHttpUrl() {
    this.setState({ loading: true });
    if (this.state.mounted == true) {
      const ref = storage().ref(this.props.image);
      ref.getDownloadURL().then(data => {
         this.setState({ url: data })
         this.setState({ loading: false })
         //console.log("got image");
      }).catch(error => {
         this.setState({ url: "/images/trail.jpg" })
         this.setState({ loading: false })
         //console.log("image error");
     })
   }
 }

//The code that is called when the component is about to unmount. Use it to cancel any http calls otherwise you will get a memory warning from React
componentWillUnmount() {
    this.setState({ isMounted: false })
}

componentDidUpdate(prevProps) {
    if(this.props.image != prevProps.image) {
        this.getAndLoadHttpUrl();
    }
}
/*
//The code that is called when the props passed to the component change. It is typically useful when say you are implementing a search functionality and you need to refresh the image after the component is refreshed on the component.
componentWillReceiveProps(props) {
    this.props = props
    if (this.props.refresh == true) {
        //Write whatever code you want here.

    }
}
*/
//The render function to display the image
render() {
    if (this.state.mounted == true) {
        if (this.state.loading == true) {
            return (
                <View key={this.props.image} style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <ActivityIndicator size="large" color="#2d454f" />
                </View>
            )
        }
        else {
            return (
                <Image style={this.props.style} source={{uri: this.state.url}}/>
            )
        }
    }
    else {
        return null
    }
}



}
import React from 'react';
import Video from 'react-native-video';

//https://www.youtube.com/watch?v=LtbuOgoQJAg
const Fundraising = () => {
  return (
    <Video
      source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}} // Can be a URL or a local file.
      //   ref={ref => {
      //     this.player = ref;
      //   }} // Store reference
      //   onBuffer={this.onBuffer} // Callback when remote video is buffering
      //   onError={this.videoError} // Callback when video cannot be loaded
      //   style={styles.backgroundVideo}
    />
  );
};

export default Fundraising;

import React, {useRef,useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
function Video() {
    const [play, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
      if (play) {
         videoRef.current.pause();
         setPlaying(false)
        } else {
          videoRef.current.play();
          setPlaying(true)
        }
      };
    

    return ( 
      <div className = "video" >
        <video 
        className="video__player" 
        loop
        ref = {videoRef}
        onClick={onVideoPress}
        src="https://v16m.tiktokcdn.com/4b30ee3f016c211842f6b0d1cbfe96fb/5f407ef6/video/tos/useast2a/tos-useast2a-pve-0068/514f9e69b4ed419cae003d2d2d692717/?a=1233&br=4638&bt=2319&cr=0&cs=0&dr=0&ds=3&er=&l=202008200212060101901881601A000AB8&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am9ndG9lc25udjMzNDczM0ApOjtoZmU8aTw1N2U6PDRlNWdrZXAva2Zfb2xfLS1gMTZzczY0LzYzMi0zLTY0Ly9gMjM6Yw%3D%3D&vl=&vr="
        ></video>
        <VideoFooter
        channel="shonda"
        description="check it out"
        song="OMG by Usher"
        />
        <VideoSidebar
        likes={111}
        messages={222}
        shares={30}
        />
        </div>
    )
}

export default Video
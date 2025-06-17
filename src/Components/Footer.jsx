import { useEffect, useState } from "react";
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";




var previousPlaying = null
const Footer = (props) => {

  const [progress, setProgress] = useState(0)

  function playAudio(x){
    if(props.currentPlaying && props.currentPlaying!=x){
      pauseAudio(props.currentPlaying)
    }
    props.setCurrentPlaying(x)
    x.play()
  }
  
  function pauseAudio(x){
    x.pause()
    previousPlaying = props.currentPlaying
    props.setCurrentPlaying(null)
  }

  function backward(){
    if(props.currentPlayingId == 1){
      props.setCurrentPlayingId(props.songs.length)
    }
    else{
      props.setCurrentPlayingId(props.currentPlayingId-1)
    }
  }

  function forward(){
    if(props.currentPlayingId == props.songs.length){
      props.setCurrentPlayingId(1)
    }
    else{
      props.setCurrentPlayingId(props.currentPlayingId+1)
    }
  }

  useEffect(()=>{
    let interval = null
    if(props.currentPlaying){
      interval = setInterval(() => {
        setProgress((props.currentPlaying.currentTime/props.currentPlaying.duration)*100)
      }, 1);
    }
    else{
      if(previousPlaying){
        setProgress((previousPlaying.currentTime/previousPlaying.duration)*100)
      }
      else{
        setProgress(0)
      }
    }
    return ()=>{
      clearInterval(interval)
    }
  }, [props.currentPlaying])
  
  function handleChangeDuration(e){
    console.log(e)
    // e = parseFloat(e)
    if(props.currentPlaying){
      props.currentPlaying.currentTime = (e * props.currentPlaying.duration) /100
      // setProgress(props.currentPlaying.currentTime)
    }
    else{
      if(previousPlaying){
        previousPlaying.currentTime = (e*previousPlaying.duration)/100;
        // setProgress(previousPlaying.currentTime)
      }
    }
    setProgress(e)
  }
  
  function formatTime(seconds){
    if(isNaN(seconds)) return "";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins<10 ? '0' + mins : mins} : ${secs<10?'0'+secs : secs}`
  }

  return (
    <>
    <div className='bg-zinc-700 text-white flex justify-center flex-col items-center p-4' style={{position:'sticky', bottom:'0px', left:'0px'}}>
        {/* This div is for bar for the song */}
          <div>{props.currentPlayingName}</div>
          <div className="flex">
            <span className="mr-4">
              {formatTime(props.currentPlaying ? props.currentPlaying.currentTime : previousPlaying? previousPlaying.currentTime : 0)}
            </span>
            <div>
                {/* <input type="range" style={{width: '80vw'}} step={0.1} value={ props.currentPlaying? (parseInt(props.currentPlaying.currentTime/props.currentPlaying.duration)*100): 0}/> */}
                <input type="range" style={{width: '80vw'}} step={0.1} value={ progress } onChange={(e)=>handleChangeDuration(e.target.value)} className="cursor-pointer"/>
            </div>
            <span className="ml-4">
              {formatTime(props.currentPlaying ? props.currentPlaying.duration : previousPlaying? previousPlaying.duration : 0)}
            </span>
          </div>


        <div className='flex'>
            <FaStepBackward size={50} onClick={backward} className="cursor-pointer"/>
            {props.currentPlaying ? <FaCirclePause size={50} className="cursor-pointer" onClick={()=>pauseAudio(props.currentPlaying)}/> : <FaPlayCircle className="cursor-pointer" onClick={()=>playAudio(previousPlaying)} size={50}/>}
            <FaStepForward className="cursor-pointer" size={50} onClick={forward}/>
        </div>
    </div>
    </>
  )
}

export default Footer
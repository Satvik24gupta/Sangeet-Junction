import React, { useEffect, useState } from 'react'


// var currentPlaying = null
const Card = (props) => {
  const currentPlaying = props.currentPlaying
  const setCurrentPlaying = props.setCurrentPlaying
  const currentPlayingId = props.currentPlayingId
  const setCurrentPlayingId = props.setCurrentPlayingId
  const currentPlayingName = props.currentPlayingName
  const setCurrentPlayingName = props.setCurrentPlayingName


  // const audio = new Audio(`../../Audio/${props.gana.id}.mp3`)
  const [audio, setAudio] = useState(new Audio(`../../Audio/${props.gana.id}.mp3`))
  
  function playAudio(x){
    if(currentPlaying && currentPlaying!=x){
      pauseAudio(currentPlaying)
    }
    setCurrentPlaying(x)
    setCurrentPlayingId(props.gana.id)
    setCurrentPlayingName(props.gana.name)
    x.play()
  }
  
  function pauseAudio(x){
    x.pause()
    setCurrentPlaying(null)
    setCurrentPlayingId(null)
  }

  function handleClick(){
    if(audio.paused){
      playAudio(audio)
    }
    else{
      pauseAudio(audio)
    }
  }


  useEffect(()=>{
    if(currentPlayingId!=null && props.gana.id==currentPlayingId){
      console.log("first")
      let newAudio = new Audio(`../../Audio/${currentPlayingId}.mp3`)
      setAudio(newAudio)
      playAudio(newAudio)
    }
  }, [currentPlayingId])
  
  
  return (
    <>
    {/* <div className='bg-gray-500 p-4 rounded-2xl text-white' style={{height:'400px', width:'375px', cursor:'pointer'}} onClick={handleClick}> */}
    <div 
      className='bg-gray-500 p-4 rounded-2xl text-white transition-transform duration-300 hover:scale-105'
    style={{height:'400px', width:'375px', cursor:'pointer'}} onClick={handleClick}>
        {/* This div is for image and name*/}
        <div className='rounded-2xl'>
            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg" alt="" className='rounded-2xl' onClick={handleClick}/> */}
            {/* <img src={props.gana.image_url} alt="" className='rounded-2xl' onClick={handleClick}/> */}
            <img src={props.gana.image_url} alt="" className='rounded-2xl'/>

            <p className='text-center font-bold'>{props.gana.name}</p>
        </div>


        {/* This div is for details of song */}
        <div className='mt-10'>
            <ul>
                <li>Artist:- {props.gana.artist}</li>
                <li>Singer:- {props.gana.singer}</li>
                <li>Language:- {props.gana.language}</li>
            </ul>

        </div>
    </div>
    </>
  )
}

export default Card
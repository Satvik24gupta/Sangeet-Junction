import React from 'react'
import Card from './Card'

const Container = (props) => {

    const meregaane = props.apneGaane
    
  return (
    <>  
        <div className='min-h-screen w-full bg-gray-600 flex items-center flex-wrap gap-6 p-4 justify-center'>
            {
                meregaane.map((e)=> {
                    return <Card gana={e} currentPlaying = {props.currentPlaying} setCurrentPlaying = {props.setCurrentPlaying} currentPlayingId = {props.currentPlayingId} setCurrentPlayingId = {props.setCurrentPlayingId} currentPlayingName = {props.currentPlayingName} setCurrentPlayingName = {props.setCurrentPlayingName}/>
                }
            )
            }
        </div>
    </>
  )
}

export default Container
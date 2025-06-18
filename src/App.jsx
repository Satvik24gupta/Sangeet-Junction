import { useState } from "react"
import Container from "./Components/Container"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"

function App() {
  const songs = [
    {
      'id': 1,
      'name': "Man bhool mat jayio radha rani ke charan",
      'artist': 'Sanatana Sankirtan',
      'singer': 'Shivam Chaurasia, Yashi Parihar',
      'language': 'Hindi',
      'audio': '',
      'image_url': 'https://i.ytimg.com/vi/oemPY2x_UAA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClrZtPjqFIbZP4ajMM15H9vFR0og'
    },
    {
      'id': 2,
      'name': "Krishna kripa ho tabhi krishna ka naam le sakoge",
      'artist': 'Madhavas Rock Band',
      'singer': 'Gaura Vani, Nav Kishore Das',
      'language': 'Hindi',
      'audio': '',
      'image_url': 'https://i.ytimg.com/vi/wpVRXdGDWcs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHELx-5ZAtLF7O4VZa4EWvHaKlqQ'
    },
    {
      'id': 3,
      'name': "Chalo Bulawa Aya hai",
      'artist': 'Madhavas Rock Band',
      'singer': 'Neha Sobti, Nav Kishore Das',
      'language': 'Hindi',
      'audio': '',
      'image_url': 'https://i.ytimg.com/vi/0RQAuO3bhRk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzHnj_FLMGs1VI52yUmU3u_E-JHQ'
    },
    {
      'id': 4,
      'name': "Meri lagi shyam sang preet",
      'artist': 'Sanatana Sankirtan',
      'singer': 'Shivam Chaurasia, Yashi Parihar',
      'language': 'Hindi',
      'audio': '',
      'image_url': 'https://i.ytimg.com/vi/xNT6LCQxkAI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKpKteO38-ohK55iP2k6McGUYBsw'
    },
    {
      'id': 5,
      'name': "Radha rani lage-Mash Up ",
      'artist': 'Govind Krsna Das',
      'singer': 'Govind Krsna Das',
      'language': 'Hindi',
      'audio': '',
      'image_url': 'https://i.ytimg.com/vi/8eY5_NgvxiQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbSqZZrfTT66aIh1l0GGr90aGc3w'
    },
    {
      'id': 6,
      'name': " Raghupati Raghav Raja Ram",
      'artist': 'Govind Krsna Das',
      'singer': 'Govind Krsna Das',
      'language': 'Hindi',
      'audio': '',
      'image_url': 'https://i.ytimg.com/vi/fA2DkuuXwr8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATjDwGTmi7XAZ3dJRXPNjP_-Pe9Q'
    },

  ]
  const [currentPlaying, setCurrentPlaying] = useState(null)
  const [currentPlayingId, setCurrentPlayingId] = useState(null)
  const [currentPlayingName, setCurrentPlayingName] = useState('')

  return (
    <>
      <Navbar/>
      <Container apneGaane = {songs} currentPlaying = {currentPlaying} setCurrentPlaying = {setCurrentPlaying} currentPlayingId = {currentPlayingId} setCurrentPlayingId = {setCurrentPlayingId} currentPlayingName={currentPlayingName} setCurrentPlayingName={setCurrentPlayingName} />
      <Footer songs={songs} currentPlaying = {currentPlaying} setCurrentPlaying = {setCurrentPlaying} currentPlayingId = {currentPlayingId} setCurrentPlayingId = {setCurrentPlayingId} currentPlayingName = {currentPlayingName} setCurrentPlayingName={setCurrentPlayingName}/>
    </>
  )
}

export default App

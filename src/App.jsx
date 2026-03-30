import Layout from './components/Layout'
import DancingDog from './components/DancingDog'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './App.css'

function App() {
  const { isPlaying, speed, danceStyle, togglePlay, changeSpeed, changeDanceStyle } = useAnimation()

  return (
    <Layout>
      <DancingDog isPlaying={isPlaying} speed={speed} danceStyle={danceStyle} />
      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        danceStyle={danceStyle}
        onTogglePlay={togglePlay}
        onChangeSpeed={changeSpeed}
        onChangeDanceStyle={changeDanceStyle}
      />
    </Layout>
  )
}

export default App

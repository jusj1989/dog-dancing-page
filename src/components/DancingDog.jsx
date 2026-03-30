import dogSvg from '../assets/images/dog.svg'
import '../styles/animations.css'

export default function DancingDog({ isPlaying, speed, danceStyle }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  }

  const noteStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
  }

  return (
    <div className="dancing-dog-container">
      {/* Music notes floating */}
      {isPlaying && (
        <>
          <span className="music-note note-1" style={noteStyle}>♪</span>
          <span className="music-note note-2" style={noteStyle}>♫</span>
          <span className="music-note note-3" style={noteStyle}>♩</span>
          <span className="music-note note-4" style={noteStyle}>♬</span>
        </>
      )}

      {/* Stage spotlight */}
      <div className="spotlight" />

      {/* Dog with dance animation */}
      <div
        className={`dog-wrapper dance-${danceStyle}`}
        style={animationStyle}
        role="img"
        aria-label="춤추는 강아지"
      >
        <img src={dogSvg} alt="강아지" className="dog-image" />
      </div>

      {/* Shadow under dog */}
      <div
        className={`dog-shadow shadow-${danceStyle}`}
        style={animationStyle}
      />

      {/* Status indicator */}
      <div className="status-badge">
        {isPlaying ? '🎵 신나게 춤추는 중!' : '⏸ 잠깐 쉬는 중...'}
      </div>
    </div>
  )
}

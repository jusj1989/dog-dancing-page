import '../styles/controls.css'

const DANCE_STYLES = [
  { id: 'bounce', label: '바운스', emoji: '🐾' },
  { id: 'spin', label: '스핀', emoji: '🌀' },
  { id: 'shake', label: '쉐이크', emoji: '🎸' },
  { id: 'wiggle', label: '위글', emoji: '🐕' },
]

const SPEEDS = [
  { value: 0.5, label: '느리게' },
  { value: 1, label: '보통' },
  { value: 2, label: '빠르게' },
]

export default function AnimationControls({
  isPlaying,
  speed,
  danceStyle,
  onTogglePlay,
  onChangeSpeed,
  onChangeDanceStyle,
}) {
  return (
    <div className="controls-container" role="group" aria-label="애니메이션 제어">
      {/* Play/Pause */}
      <button
        className={`play-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onTogglePlay}
        aria-label={isPlaying ? '정지' : '재생'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-text">{isPlaying ? '정지' : '재생'}</span>
      </button>

      {/* Dance style selector */}
      <div className="style-group">
        <p className="group-label">댄스 스타일</p>
        <div className="style-buttons">
          {DANCE_STYLES.map(({ id, label, emoji }) => (
            <button
              key={id}
              className={`style-btn ${danceStyle === id ? 'active' : ''}`}
              onClick={() => onChangeDanceStyle(id)}
              aria-pressed={danceStyle === id}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Speed selector */}
      <div className="speed-group">
        <p className="group-label">속도</p>
        <div className="speed-buttons">
          {SPEEDS.map(({ value, label }) => (
            <button
              key={value}
              className={`speed-btn ${speed === value ? 'active' : ''}`}
              onClick={() => onChangeSpeed(value)}
              aria-pressed={speed === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

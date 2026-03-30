import '../styles/layout.css'

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <h1 className="page-title">🐶 댄싱 강아지 🐶</h1>
        <p className="page-subtitle">신나는 댄스 타임!</p>
      </header>
      <main className="page-main">{children}</main>
      <footer className="page-footer">
        <p>클릭해서 춤을 멈추거나 시작하세요 🎵</p>
      </footer>
    </div>
  )
}

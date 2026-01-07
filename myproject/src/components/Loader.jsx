import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Spinning Ring or Logo Placeholder */}
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#ff9b21]/20 border-t-[#ff9b21] rounded-full animate-spin" />
      </div>

      {/* Progress Text */}
      <p
        style={{
          fontSize: 16,
          color: '#ff9b21',
          fontWeight: 800,
          marginTop: 20,
          fontFamily: 'sans-serif',
          letterSpacing: '1px'
        }}
      >
        {progress.toFixed(0)}%
      </p>

      {/* Optional: Progress Bar */}
      <div style={{
        width: '100px',
        height: '4px',
        background: 'rgba(255, 155, 33, 0.2)',
        borderRadius: '2px',
        marginTop: '10px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#ff9b21',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </Html>
  );
};

export default CanvasLoader;
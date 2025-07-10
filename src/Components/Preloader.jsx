import React from 'react';

const Preloader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background:'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      animation: 'fadeOut 0.6s ease-in-out forwards',
      animationDelay: '3.5s'
    }}>
      <div style={{
        position: 'relative',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <img
          src="/images/logo.jpg"
          alt="MAR Group Logo"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'contain',
            animation: 'logoFadeIn 1s ease-out forwards'
          }}
          onError={(e) => console.error("Preloader logo failed to load:", e)}
        />
        <div style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          border: '4px solid transparent',
          borderTop: '4px solid #ef4444',
          borderRight: '4px solid #dc2626',
          borderRadius: '50%',
          animation: 'spin 1.5s linear infinite'
        }}></div>
      </div>
      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '1.5rem'
      }}>
        <span style={{
          width: '12px',
          height: '12px',
          background: '#ef4444',
          borderRadius: '50%',
          animation: 'pulseDot 1.2s ease-in-out infinite',
          animationDelay: '0s'
        }}></span>
        <span style={{
          width: '12px',
          height: '12px',
          background: '#dc2626',
          borderRadius: '50%',
          animation: 'pulseDot 1.2s ease-in-out infinite',
          animationDelay: '0.2s'
        }}></span>
        <span style={{
          width: '12px',
          height: '12px',
          background: '#b91c1c',
          borderRadius: '50%',
          animation: 'pulseDot 1.2s ease-in-out infinite',
          animationDelay: '0.4s'
        }}></span>
      </div>
      <style>
        {`
          @keyframes logoFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes pulseDot {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.5);
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              visibility: hidden;
            }
          }

          @media (min-width: 640px) {
            div[style*="width: 120px"] {
              width: 160px;
              height: 160px;
            }
            img[alt="MAR Group Logo"] {
              width: 160px;
              height: 160px;
            }
            div[style*="border: 4px"] {
              width: 160px;
              height: 160px;
            }
            span {
              width: 14px;
              height: 14px;
            }
          }

          @media (min-width: 1024px) {
            div[style*="width: 120px"] {
              width: 180px;
              height: 180px;
            }
            img[alt="MAR Group Logo"] {
              width: 180px;
              height: 180px;
            }
            div[style*="border: 4px"] {
              width: 180px;
              height: 180px;
            }
            span {
              width: 16px;
              height: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
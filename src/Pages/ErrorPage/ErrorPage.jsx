import React from 'react';
import './errorpage.css';

const ErrorPage = () => (
  <div
    className="min-h-screen flex items-center justify-center p-8"
    style={{ background: '#fafafa', color: '#111', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
  >
    <div className="w-full max-w-[480px] animate-ep-in">

      <div
        className="inline-flex items-center gap-1.5 mb-8 tracking-widest"
        style={{ fontFamily: 'ui-monospace, monospace', fontSize: '11px', color: '#aaa' }}
      >
        <span className="w-[5px] h-[5px] rounded-full bg-red-500" />
        ERROR · PAGE_NOT_FOUND
      </div>

      <div
        className="leading-none mb-6 select-none"
        style={{
          fontFamily: 'ui-monospace, monospace',
          fontSize: '72px',
          fontWeight: 500,
          color: '#f0f0f0',
          letterSpacing: '-2px',
          WebkitTextStroke: '1px #d4d4d4',
        }}
      >
        404
      </div>

      <div className="w-8 h-0.5 bg-red-500 rounded mb-6" />

      <h1
        className="font-semibold mb-2"
        style={{ fontSize: '20px', color: '#111', letterSpacing: '-0.3px' }}
      >
        Page not found
      </h1>

      <p className="text-sm leading-relaxed mb-10" style={{ color: '#888' }}>
        The resource you requested doesn't exist or has been moved.<br />
        Double-check the URL or return to the homepage.
      </p>

      <div className="flex gap-2.5">
        <button
          onClick={() => window.location.href = '/'}
          className="text-[13px] font-medium px-[18px] py-[9px] rounded-md cursor-pointer transition-all duration-150 active:scale-[0.98]"
          style={{ background: '#111', color: '#fff', border: 'none', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
          onMouseEnter={e => e.target.style.background = '#333'}
          onMouseLeave={e => e.target.style.background = '#111'}
        >
          Go home
        </button>
        <button
          onClick={() => window.history.back()}
          className="text-[13px] font-medium px-[18px] py-[9px] rounded-md cursor-pointer transition-all duration-150 active:scale-[0.98]"
          style={{ background: 'transparent', color: '#888', border: '1px solid #e0e0e0', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
          onMouseEnter={e => { e.target.style.borderColor = '#bbb'; e.target.style.color = '#111'; }}
          onMouseLeave={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.color = '#888'; }}
        >
          Go back
        </button>
      </div>

      

    </div>
  </div>
);

export default ErrorPage;
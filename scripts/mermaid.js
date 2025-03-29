document.addEventListener('DOMContentLoaded', () => {
  // Dynamically load Mermaid.js from CDN
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
  script.onload = () => {
    // Initialize Mermaid after loading
    // @ts-ignore - mermaid is loaded dynamically
    window.mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose'
    });
  };
  document.head.appendChild(script);
});
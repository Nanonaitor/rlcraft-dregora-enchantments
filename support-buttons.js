(()=>{
  const syncYouTubeButton=()=>{
    const link=document.querySelector('.support .button:not(.secondary)');
    if(!link)return;
    link.classList.add('image-link','youtube-image-link');
    link.classList.remove('youtube-button');
    link.setAttribute('aria-label','Watch me on YouTube');
    link.innerHTML='<img src="assets/watch-me-youtube.png" alt="Watch me on YouTube">';
  };
  syncYouTubeButton();
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>queueMicrotask(syncYouTubeButton)));
})();

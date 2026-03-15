/* ══════════════════════════════════════════════════════
   ImitGame - script.js (sans spectre — version propre)
   ══════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────
// 1. AVATARS
// ─────────────────────────────────────────────────────
const AVATARS = [
  '🎭','😂','🤣','😜','🤩','😎','🥳','🤪',
  '👽','🤖','🦁','🐯','🦊','🐸','🐺','🦄',
  '🎤','🎬','🎯','🔥','💫','👑','🚀','⭐',
];

// ─────────────────────────────────────────────────────
// 2. VIDÉOS
// ─────────────────────────────────────────────────────
const VIDEOS = [
  { id:"v1",  title:"Vidéo #1",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773500445/video1_dhq5jq.mp4" },
  { id:"v2",  title:"Vidéo #2",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573536/snaptik_6981886674225696005_v3_vsa06j.mp4" },
  { id:"v3",  title:"Vidéo #3",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573537/snaptik_7610358320926362902_v3_online-video-cutter.com_wt1wyt.mp4" },
  { id:"v4",  title:"Vidéo #4",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573537/snaptik_6979098905552227589_v3_wh8thg.mp4" },
  { id:"v5",  title:"Vidéo #5",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573538/snaptik_7555549657045323030_v3_hufhaw.mp4" },
  { id:"v6",  title:"Vidéo #6",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573537/snaptik_7589941175365143830_v3_rc3umd.mp4" },
  { id:"v7",  title:"Vidéo #7",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573538/snaptik_7613720022799682838_v3_f7ezn4.mp4" },
  { id:"v8",  title:"Vidéo #8",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573538/snaptik_7362615700067863841_v3_online-video-cutter.com_smzqeb.mp4" },
  { id:"v9",  title:"Vidéo #9",  url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573539/snaptik_7000364379174604037_v3_y0eqgt.mp4" },
  { id:"v10", title:"Vidéo #10", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573539/snaptik_7431511656850525472_v3_egoufv.mp4" },
  { id:"v11", title:"Vidéo #11", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573539/snaptik_7307128894518218017_v3_ibblhm.mp4" },
  { id:"v12", title:"Vidéo #12", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573539/snaptik_7561878215891914006_v3_mcw79s.mp4" },
  { id:"v13", title:"Vidéo #13", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573539/snaptik_7013522610797530373_v3_nlfcvb.mp4" },
  { id:"v14", title:"Vidéo #14", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573540/snaptik_7167749864019823878_v3_zh3fwr.mp4" },
  { id:"v15", title:"Vidéo #15", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573540/snaptik_7593428765615590678_v3_gfo2tw.mp4" },
  { id:"v16", title:"Vidéo #16", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573541/snaptik_7461643692302961942_v3_jlxdhr.mp4" },
  { id:"v17", title:"Vidéo #17", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573540/snaptik_7514249758324788503_v3_xddgzs.mp4" },
  { id:"v18", title:"Vidéo #18", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573541/snaptik_7536649502363602198_v3_jtkzo2.mp4" },
  { id:"v19", title:"Vidéo #19", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573541/snaptik_7137731518629268742_v3_hvhgo3.mp4" },
  { id:"v20", title:"Vidéo #20", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573541/snaptik_7196344632354016517_v3_i423ez.mp4" },
  { id:"v21", title:"Vidéo #21", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573543/snaptik_7615208140157570326_v3_h67kbh.mp4" },
  { id:"v22", title:"Vidéo #22", url:"https://res.cloudinary.com/dbkza0sdj/video/upload/v1773573543/snaptik_7598188289492782358_v3_online-video-cutter.com_vetxnh.mp4" },
];

const thumbCache    = {};
const durationCache = {};

// ─────────────────────────────────────────────────────
// 3. ÉTAT
// ─────────────────────────────────────────────────────
let state = {
  pseudo: "", avatar: "🎭", score: 0,
  currentVideo: null,
  mediaRecorder: null, audioChunks: [], audioBlob: null, audioURL: null,
  isRecording: false, isPaused: false,
  isRandom: false,
  selectedAvatar: '🎭',
};

let currentFilter = 'tous';
let randomDiff    = 'tous';

// ─────────────────────────────────────────────────────
// 4. NAVIGATION
// ─────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  stopEverything();
  updateHomeProfile();
  refreshLeaderboard();
  showScreen('screen-home');
}

function goPrep() {
  stopEverything();
  resetGamePhases();
  document.getElementById('display-pseudo').textContent = state.pseudo;
  document.getElementById('display-avatar').textContent = state.avatar;
  document.getElementById('display-score').textContent  = state.score;
  document.getElementById('random-count').textContent   = VIDEOS.length;
  buildVideoGrid();
  showScreen('screen-prep');
}

function goProfile() {
  document.getElementById('pseudo-input').value = state.pseudo;
  state.selectedAvatar = state.avatar;
  document.getElementById('avatar-current').textContent = state.avatar;
  buildAvatarGrid();
  updateProfileStats();
  showScreen('screen-profile');
}

function goVote()    { showScreen('screen-vote'); }
function goToLobby() { alert("Le mode multijoueur arrive bientôt ! 🚀"); }

// ─────────────────────────────────────────────────────
// 5. PROFIL
// ─────────────────────────────────────────────────────
function buildAvatarGrid() {
  const grid = document.getElementById('avatar-grid');
  grid.innerHTML = '';
  AVATARS.forEach(emoji => {
    const btn = document.createElement('button');
    btn.className = 'avatar-btn' + (emoji === state.selectedAvatar ? ' active' : '');
    btn.textContent = emoji;
    btn.onclick = () => {
      state.selectedAvatar = emoji;
      document.getElementById('avatar-current').textContent = emoji;
      document.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
    grid.appendChild(btn);
  });
}

function saveProfile() {
  const input = document.getElementById('pseudo-input').value.trim();
  if (!input) { document.getElementById('pseudo-input').style.borderColor = '#e74c3c'; return; }
  state.pseudo = input;
  state.avatar = state.selectedAvatar;
  saveToStorage();
  goHome();
}

function updateHomeProfile() {
  document.getElementById('home-avatar').textContent        = state.avatar || '🎭';
  document.getElementById('home-profile-name').textContent  = state.pseudo || 'Choisir un profil';
  document.getElementById('home-profile-score').textContent = state.pseudo ? `⭐ ${state.score} pts` : '';
}

function updateProfileStats() {
  const el = document.getElementById('profile-stats');
  const lb = JSON.parse(localStorage.getItem('imitgame_lb') || '[]');
  const rank = lb.findIndex(r => r.name === state.pseudo);
  el.innerHTML = state.pseudo ? `
    <div class="stat-row"><span>🎮 Score total</span><strong>${state.score} pts</strong></div>
    ${rank >= 0 ? `<div class="stat-row"><span>🏆 Classement</span><strong>#${rank + 1}</strong></div>` : ''}
  ` : '';
}

function startSolo() {
  if (!state.pseudo) goProfile(); else goPrep();
}

// ─────────────────────────────────────────────────────
// 6. MODES & FILTRES
// ─────────────────────────────────────────────────────
function setMode(mode) {
  document.getElementById('tab-choose').classList.toggle('active', mode === 'choose');
  document.getElementById('tab-random').classList.toggle('active', mode === 'random');
  document.getElementById('mode-choose').classList.toggle('hidden', mode !== 'choose');
  document.getElementById('mode-random').classList.toggle('hidden', mode !== 'random');
}

function getDifficulty(seconds) {
  if (!seconds || isNaN(seconds)) return 'moyen';
  if (seconds <= 10) return 'facile';
  if (seconds <= 20) return 'moyen';
  return 'hard';
}

function getDiffLabel(diff) {
  return diff === 'facile' ? '⭐ Facile' : diff === 'moyen' ? '⭐⭐ Moyen' : '⭐⭐⭐ Hard';
}

function filterVideos(diff, btn) {
  currentFilter = diff;
  document.querySelectorAll('#mode-choose .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  buildVideoGrid();
}

function setRandomDiff(diff, btn) {
  randomDiff = diff;
  document.querySelectorAll('.random-filters .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ─────────────────────────────────────────────────────
// 7. MINIATURES via CANVAS
// ─────────────────────────────────────────────────────
function generateThumbnail(video) {
  return new Promise(resolve => {
    if (thumbCache[video.id]) { resolve(thumbCache[video.id]); return; }
    const vid = document.createElement('video');
    vid.crossOrigin = 'anonymous';
    vid.muted = true; vid.preload = 'metadata'; vid.src = video.url;
    vid.addEventListener('loadedmetadata', () => {
      durationCache[video.id] = vid.duration;
      vid.currentTime = Math.min(vid.duration * 0.1, 2);
    });
    vid.addEventListener('seeked', () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 200; canvas.height = 356;
        const ctx = canvas.getContext('2d');
        const vr = vid.videoWidth / vid.videoHeight, cr = canvas.width / canvas.height;
        let sx=0,sy=0,sw=vid.videoWidth,sh=vid.videoHeight;
        if (vr > cr) { sw = vid.videoHeight * cr; sx = (vid.videoWidth - sw) / 2; }
        else         { sh = vid.videoWidth / cr;  sy = (vid.videoHeight - sh) / 2; }
        ctx.drawImage(vid, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/jpeg', 0.8);
        thumbCache[video.id] = dataURL;
        resolve(dataURL);
      } catch(e) { resolve(null); }
    });
    vid.addEventListener('error', () => resolve(null));
    setTimeout(() => resolve(null), 5000);
  });
}

// ─────────────────────────────────────────────────────
// 8. GRILLE VIDÉOS
// ─────────────────────────────────────────────────────
function buildVideoGrid() {
  const grid = document.getElementById('video-grid');
  let pool = currentFilter === 'tous'
    ? VIDEOS
    : VIDEOS.filter(v => getDifficulty(durationCache[v.id]) === currentFilter);

  if (pool.length === 0) {
    grid.innerHTML = '<p class="empty-lb" style="grid-column:1/-1;padding:20px">Aucune vidéo — les durées se chargent, réessaie dans quelques secondes.</p>';
    return;
  }

  grid.innerHTML = '';
  pool.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    const dur = durationCache[video.id], diff = getDifficulty(dur), durTxt = dur ? formatTime(dur) : '…';
    card.innerHTML = `
      <div class="video-thumb-wrap">
        <div class="video-thumb-loading" id="tl-${video.id}"><div class="thumb-spinner"></div></div>
        <img id="ti-${video.id}" class="video-thumb-img" style="display:none" alt="${video.title}" />
        <div class="video-thumb-fallback" id="tf-${video.id}" style="display:none">🎬</div>
        <div class="video-thumb-overlay"><span class="play-icon">▶</span></div>
        <span class="video-diff-badge diff-${diff}" id="td-${video.id}">${getDiffLabel(diff)}</span>
      </div>
      <div class="video-info">
        <div class="video-title">${video.title}</div>
        <div class="video-meta" id="tm-${video.id}">Durée : ${durTxt}</div>
      </div>`;
    card.addEventListener('click', () => selectVideo(video, false));
    grid.appendChild(card);

    generateThumbnail(video).then(dataURL => {
      document.getElementById(`tl-${video.id}`)?.remove();
      const img = document.getElementById(`ti-${video.id}`);
      const fb  = document.getElementById(`tf-${video.id}`);
      if (dataURL) { img.src = dataURL; img.style.display = 'block'; }
      else if (fb)   { fb.style.display = 'flex'; }
      const d = durationCache[video.id], diff2 = getDifficulty(d);
      const el = document.getElementById(`td-${video.id}`);
      if (el) { el.textContent = getDiffLabel(diff2); el.className = `video-diff-badge diff-${diff2}`; }
      const me = document.getElementById(`tm-${video.id}`);
      if (me && d) me.textContent = `Durée : ${formatTime(d)}`;
    });
  });
}

// ─────────────────────────────────────────────────────
// 9. MODE ALÉATOIRE
// ─────────────────────────────────────────────────────
function launchRandom() {
  let pool = randomDiff === 'tous' ? VIDEOS : VIDEOS.filter(v => getDifficulty(durationCache[v.id]) === randomDiff);
  if (!pool.length) pool = VIDEOS;
  const icon = document.getElementById('random-icon');
  const emojis = ['🎲','🎭','😂','🔥','🎤','😜','🦁','⭐'];
  let i = 0; icon.classList.add('spinning');
  const spin = setInterval(() => { icon.textContent = emojis[i++ % emojis.length]; }, 100);
  setTimeout(() => {
    clearInterval(spin); icon.classList.remove('spinning');
    selectVideo(pool[Math.floor(Math.random() * pool.length)], true);
  }, 800);
}

function launchRandomFromResult() {
  goPrep(); setTimeout(() => { setMode('random'); launchRandom(); }, 150);
}

function selectVideo(video, isRandom) {
  state.currentVideo = video; state.isRandom = isRandom;
  loadGameScreen();
}

// ─────────────────────────────────────────────────────
// 10. ÉCRAN DE JEU
// ─────────────────────────────────────────────────────
function loadGameScreen() {
  const videoEl = document.getElementById('main-video');
  document.getElementById('game-pseudo').textContent = state.pseudo;
  document.getElementById('game-avatar').textContent = state.avatar;
  document.getElementById('game-score').textContent  = state.score;
  document.getElementById('random-badge').classList.toggle('hidden', !state.isRandom);

  // ✅ Vidéo AVEC son pour la preview
  videoEl.src   = state.currentVideo.url;
  videoEl.muted = false;  // son activé dès le départ
  videoEl.volume = 1.0;
  videoEl.load();

  updateProgressBar();
  resetGamePhases();
  showPhase('phase-preview');
  showScreen('screen-game');
  videoEl.addEventListener('timeupdate', onTimeUpdate);
  videoEl.addEventListener('ended', onVideoEnded);
}

// ─────────────────────────────────────────────────────
// 11. PHASES
// ─────────────────────────────────────────────────────
function resetGamePhases() {
  document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
}

function showPhase(id) {
  resetGamePhases();
  document.getElementById(id).classList.add('active');
  // ✅ Remet le son quand on revient en preview
  if (id === 'phase-preview') {
    const v = document.getElementById('main-video');
    v.muted  = false;
    v.volume = 1.0;
  }
}

// ─────────────────────────────────────────────────────
// 12. CONTRÔLES VIDÉO
// ─────────────────────────────────────────────────────
function togglePlayPause() {
  const v   = document.getElementById('main-video');
  const btn = document.getElementById('btn-playpause');
  if (v.paused) { v.play(); btn.textContent = '⏸'; }
  else          { v.pause(); btn.textContent = '▶'; }
}

function restartVideo() {
  const v = document.getElementById('main-video');
  v.currentTime = 0; v.play();
  document.getElementById('btn-playpause').textContent = '⏸';
}

function seekVideo(e) {
  const v   = document.getElementById('main-video');
  const bar = document.getElementById('progress-bar-bg');
  const ratio = Math.max(0, Math.min(1, (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth));
  if (v.duration) v.currentTime = ratio * v.duration;
}

function onTimeUpdate()  { updateProgressBar(); updateTimeDisplay(); }
function onVideoEnded()  { const b = document.getElementById('btn-playpause'); if (b) b.textContent = '▶'; }

function updateProgressBar() {
  const v = document.getElementById('main-video');
  const f = document.getElementById('progress-bar-fill');
  if (!f || !v.duration) return;
  f.style.width = (v.currentTime / v.duration * 100) + '%';
}

function updateTimeDisplay() {
  const v  = document.getElementById('main-video');
  const el = document.getElementById('time-display');
  if (!el) return;
  el.textContent = `${formatTime(v.currentTime)} / ${formatTime(v.duration || 0)}`;
}

function formatTime(s) {
  if (!s || isNaN(s)) return '0:00';
  return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
}

// ─────────────────────────────────────────────────────
// 13. IMITATION
// ─────────────────────────────────────────────────────
function readyToImitate() {
  const v = document.getElementById('main-video');
  v.pause(); v.currentTime = 0;
  v.muted = true;   // coupe le son : c'est le joueur qui imite
  document.getElementById('btn-playpause').textContent = '▶';
  showPhase('phase-ready');
}

// ─────────────────────────────────────────────────────
// 14. ENREGISTREMENT
// ─────────────────────────────────────────────────────
async function startRecording() {
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false }); }
  catch(e) { document.getElementById('modal-micro').classList.remove('hidden'); return; }

  state.audioChunks = []; state.isRecording = true; state.isPaused = false;
  state.mediaRecorder = new MediaRecorder(stream);

  state.mediaRecorder.addEventListener('dataavailable', e => { if (e.data.size > 0) state.audioChunks.push(e.data); });
  state.mediaRecorder.addEventListener('stop', () => {
    stream.getTracks().forEach(t => t.stop());
    state.isRecording = false;
    if (!state.audioChunks.length) return;
    state.audioBlob = new Blob(state.audioChunks, { type: 'audio/webm' });
    state.audioURL  = URL.createObjectURL(state.audioBlob);
    showPhase('phase-playback');
  });

  await countdown(3);

  const v = document.getElementById('main-video');
  v.currentTime = 0; v.muted = true;
  showPhase('phase-recording');
  resetPauseBtn();
  v.play();
  state.mediaRecorder.start();
  v.onended = () => finishRecording();
}

function stopRecordingEarly() { document.getElementById('main-video').pause(); finishRecording(); }
function finishRecording() {
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') state.mediaRecorder.stop();
}

function pauseResumeRecording() {
  const v   = document.getElementById('main-video');
  const btn = document.getElementById('btn-pause-rec');
  if (!state.isPaused) {
    v.pause();
    if (state.mediaRecorder?.state === 'recording') state.mediaRecorder.pause();
    state.isPaused = true;
    btn.textContent = '▶ Reprendre'; btn.style.background = 'var(--green)'; btn.style.color = '#fff';
  } else {
    v.play();
    if (state.mediaRecorder?.state === 'paused') state.mediaRecorder.resume();
    state.isPaused = false;
    resetPauseBtn();
  }
}

function resetPauseBtn() {
  const btn = document.getElementById('btn-pause-rec');
  if (!btn) return;
  btn.textContent = '⏸ Pause'; btn.style.background = ''; btn.style.color = '';
}

function stopAndRetryRecording() {
  const v = document.getElementById('main-video');
  v.pause(); v.currentTime = 0;
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
    state.mediaRecorder.onstop = null; state.audioChunks = []; state.mediaRecorder.stop();
  }
  state.audioChunks = []; state.audioBlob = null; state.audioURL = null;
  state.isRecording = false; state.isPaused = false;
  v.muted = true; resetPauseBtn();
  showPhase('phase-ready');
}

function retryFromPlayback() {
  state.audioChunks = []; state.audioBlob = null; state.audioURL = null;
  const v = document.getElementById('main-video');
  v.pause(); v.currentTime = 0; v.muted = true;
  showPhase('phase-ready');
}

// ─────────────────────────────────────────────────────
// 15. COMPTE À REBOURS
// ─────────────────────────────────────────────────────
function countdown(seconds) {
  return new Promise(resolve => {
    let n = seconds;
    let overlay = document.getElementById('countdown-overlay');
    if (!overlay) {
      overlay = document.createElement('div'); overlay.id = 'countdown-overlay';
      Object.assign(overlay.style, {
        position:'absolute',top:'0',left:'0',width:'100%',height:'100%',zIndex:'50',
        background:'rgba(0,0,0,0.78)',display:'flex',alignItems:'center',justifyContent:'center',
        fontFamily:"'Bangers',cursive",fontSize:'clamp(100px,25vw,180px)',
        color:'#FFE135',textShadow:'6px 6px 0 #FF6B35,0 0 50px rgba(255,225,53,0.7)',
        lineHeight:'1',textAlign:'center',
      });
      document.querySelector('.video-wrapper').appendChild(overlay);
    }
    overlay.textContent = n; overlay.style.display = 'flex'; triggerPop(overlay);
    const iv = setInterval(() => {
      n--;
      if (n <= 0) { clearInterval(iv); overlay.style.display = 'none'; resolve(); }
      else        { overlay.textContent = n; triggerPop(overlay); }
    }, 1000);
  });
}

function triggerPop(el) {
  el.style.animation = 'none'; void el.offsetWidth;
  el.style.animation = 'countpop 0.45s cubic-bezier(0.175,0.885,0.32,1.275) both';
}

// ─────────────────────────────────────────────────────
// 16. LECTURE RÉSULTAT
// ─────────────────────────────────────────────────────
function playResult() {
  if (!state.audioURL) return;
  const v = document.getElementById('main-video');
  const a = new Audio(state.audioURL);
  v.muted = true; v.currentTime = 0; v.play(); a.play();
  v.onended = () => a.pause();
}

function playResultAgain() { showScreen('screen-game'); setTimeout(() => playResult(), 200); }

// ─────────────────────────────────────────────────────
// 17. TÉLÉCHARGEMENT
// ─────────────────────────────────────────────────────
function downloadAudio() {
  if (!state.audioBlob) return;
  const a = document.createElement('a');
  a.href = state.audioURL;
  a.download = `ImitGame_${state.currentVideo?.id || 'video'}_${state.pseudo || 'joueur'}.webm`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

// ─────────────────────────────────────────────────────
// 18. VOTE
// ─────────────────────────────────────────────────────
const VOTE_POINTS   = { 3:30, 1:10, 0:0 };
const VOTE_MESSAGES = {
  3: { emoji:"🏆", title:"EXCELLENT !",      pts:"+30 points !" },
  1: { emoji:"😄", title:"Pas mal !",         pts:"+10 points !" },
  0: { emoji:"😅", title:"On fait mieux...",  pts:"+0 points !"  },
};

function castVote(level) {
  state.score += VOTE_POINTS[level]; savePerformance(); saveToStorage();
  const msg = VOTE_MESSAGES[level];
  document.getElementById('result-emoji').textContent       = msg.emoji;
  document.getElementById('result-title').textContent       = msg.title;
  document.getElementById('result-pts').textContent         = msg.pts;
  document.getElementById('result-total-score').textContent = state.score;
  showScreen('screen-result');
}

// ─────────────────────────────────────────────────────
// 19. CLASSEMENT
// ─────────────────────────────────────────────────────
function refreshLeaderboard() {
  const lb   = JSON.parse(localStorage.getItem('imitgame_lb') || '[]');
  const list = document.getElementById('leaderboard-list');
  const medals = ['🥇','🥈','🥉'];
  list.innerHTML = lb.length === 0
    ? '<p class="empty-lb">Sois le premier à jouer !</p>'
    : lb.map((row, i) => `
        <div class="lb-row">
          <span class="lb-rank">${medals[i] || (i+1)}</span>
          <span class="lb-avatar">${row.avatar || '🎭'}</span>
          <span class="lb-name">${escapeHtml(row.name)}</span>
          <span class="lb-pts">${row.score} pts</span>
        </div>`).join('');
}

function confirmResetLeaderboard() { document.getElementById('modal-reset').classList.remove('hidden'); }
function resetLeaderboard() {
  localStorage.removeItem('imitgame_lb'); state.score = 0; saveToStorage();
  closeModal('modal-reset'); refreshLeaderboard(); updateHomeProfile();
}

// ─────────────────────────────────────────────────────
// 20. STOCKAGE
// ─────────────────────────────────────────────────────
function saveToStorage() {
  localStorage.setItem('imitgame_pseudo', state.pseudo);
  localStorage.setItem('imitgame_avatar', state.avatar);
  localStorage.setItem('imitgame_score',  state.score);
}
function loadFromStorage() {
  state.pseudo = localStorage.getItem('imitgame_pseudo') || '';
  state.avatar = localStorage.getItem('imitgame_avatar') || '🎭';
  state.score  = parseInt(localStorage.getItem('imitgame_score') || '0');
}
function savePerformance() {
  let lb = JSON.parse(localStorage.getItem('imitgame_lb') || '[]');
  const idx = lb.findIndex(r => r.name === state.pseudo);
  const entry = { name: state.pseudo, avatar: state.avatar, score: state.score };
  if (idx >= 0) lb[idx] = entry; else lb.push(entry);
  lb.sort((a, b) => b.score - a.score);
  localStorage.setItem('imitgame_lb', JSON.stringify(lb.slice(0, 10)));
}

// ─────────────────────────────────────────────────────
// 21. UTILITAIRES
// ─────────────────────────────────────────────────────
function stopEverything() {
  const v = document.getElementById('main-video');
  if (v) {
    v.pause(); v.currentTime = 0; v.onended = null;
    v.removeEventListener('timeupdate', onTimeUpdate);
    v.removeEventListener('ended', onVideoEnded);
  }
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
    state.mediaRecorder.onstop = null; state.mediaRecorder.stop();
  }
  state.isRecording = false; state.isPaused = false;
}

function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ─────────────────────────────────────────────────────
// 22. INIT
// ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  updateHomeProfile();
  refreshLeaderboard();

  const style = document.createElement('style');
  style.textContent = `@keyframes countpop{from{transform:scale(0.4);opacity:0}to{transform:scale(1);opacity:1}}`;
  document.head.appendChild(style);

  const pi = document.getElementById('pseudo-input');
  pi.addEventListener('keydown', e => { if (e.key === 'Enter') saveProfile(); });
  pi.addEventListener('input',   () => { pi.style.borderColor = ''; });

  // Pré-charge les durées en arrière-plan
  VIDEOS.forEach(video => {
    if (!durationCache[video.id]) {
      const v = document.createElement('video');
      v.preload = 'metadata'; v.muted = true; v.src = video.url;
      v.addEventListener('loadedmetadata', () => { durationCache[video.id] = v.duration; });
    }
  });

  showScreen('screen-home');
});

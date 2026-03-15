/* ══════════════════════════════════════════════════════
   ImitGame - script.js (avec multijoueur Supabase)
   ══════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────
// 1. SUPABASE
// ─────────────────────────────────────────────────────
const SUPABASE_URL = 'https://uhsnnoclavjvdmpatkji.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoc25ub2NsYXZqdmRtcGF0a2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1ODk3MzUsImV4cCI6MjA4OTE2NTczNX0.0JD5GCzYuPj2AoYBWya-jvpg426aFs0XXYB9tj0K0eM';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ─────────────────────────────────────────────────────
// 2. AVATARS
// ─────────────────────────────────────────────────────
const AVATARS = [
  '🎭','😂','🤣','😜','🤩','😎','🥳','🤪',
  '👽','🤖','🦁','🐯','🦊','🐸','🐺','🦄',
  '🎤','🎬','🎯','🔥','💫','👑','🚀','⭐',
];

// ─────────────────────────────────────────────────────
// 3. VIDÉOS
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
// 4. ÉTAT
// ─────────────────────────────────────────────────────
let state = {
  // Profil
  pseudo: "", avatar: "🎭", score: 0, selectedAvatar: '🎭',
  // Solo
  currentVideo: null, isRandom: false,
  // Audio
  mediaRecorder: null, audioChunks: [], audioBlob: null, audioURL: null,
  isRecording: false, isPaused: false,
  // Multijoueur
  isMulti: false,
  salonId: null, salonCode: null,
  playerId: null, isHost: false,
  players: [], currentTurnIndex: 0,
  multiVideoId: null,
  realtimeChannel: null,
  // Vote multi
  currentVoteTarget: null, hasVoted: false,
};

let currentFilter = 'tous';
let randomDiff    = 'tous';
let lobbyFilter   = 'tous';

// ─────────────────────────────────────────────────────
// 5. NAVIGATION
// ─────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  stopEverything();
  unsubscribeRealtime();
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

// ─────────────────────────────────────────────────────
// 6. PROFIL
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
  state.pseudo = input; state.avatar = state.selectedAvatar;
  saveToStorage(); goHome();
}

function updateHomeProfile() {
  document.getElementById('home-avatar').textContent        = state.avatar || '🎭';
  document.getElementById('home-profile-name').textContent  = state.pseudo || 'Choisir un profil';
  document.getElementById('home-profile-score').textContent = state.pseudo ? `⭐ ${state.score} pts` : '';
}

function updateProfileStats() {
  const el   = document.getElementById('profile-stats');
  const lb   = JSON.parse(localStorage.getItem('imitgame_lb') || '[]');
  const rank = lb.findIndex(r => r.name === state.pseudo);
  el.innerHTML = state.pseudo ? `
    <div class="stat-row"><span>🎮 Score total</span><strong>${state.score} pts</strong></div>
    ${rank >= 0 ? `<div class="stat-row"><span>🏆 Classement</span><strong>#${rank+1}</strong></div>` : ''}
  ` : '';
}

function startSolo() { if (!state.pseudo) goProfile(); else goPrep(); }

// ─────────────────────────────────────────────────────
// 7. MODES & FILTRES SOLO
// ─────────────────────────────────────────────────────
function setMode(mode) {
  document.getElementById('tab-choose').classList.toggle('active', mode === 'choose');
  document.getElementById('tab-random').classList.toggle('active', mode === 'random');
  document.getElementById('mode-choose').classList.toggle('hidden', mode !== 'choose');
  document.getElementById('mode-random').classList.toggle('hidden', mode !== 'random');
}

function getDifficulty(s) {
  if (!s || isNaN(s)) return 'moyen';
  if (s <= 10) return 'facile';
  if (s <= 20) return 'moyen';
  return 'hard';
}
function getDiffLabel(d) { return d==='facile'?'⭐ Facile':d==='moyen'?'⭐⭐ Moyen':'⭐⭐⭐ Hard'; }

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
// 8. MINIATURES
// ─────────────────────────────────────────────────────
function generateThumbnail(video) {
  return new Promise(resolve => {
    if (thumbCache[video.id]) { resolve(thumbCache[video.id]); return; }
    const vid = document.createElement('video');
    vid.crossOrigin = 'anonymous'; vid.muted = true; vid.preload = 'metadata'; vid.src = video.url;
    vid.addEventListener('loadedmetadata', () => {
      durationCache[video.id] = vid.duration;
      vid.currentTime = Math.min(vid.duration * 0.1, 2);
    });
    vid.addEventListener('seeked', () => {
      try {
        const c = document.createElement('canvas'); c.width=200; c.height=356;
        const ctx = c.getContext('2d');
        const vr=vid.videoWidth/vid.videoHeight, cr=c.width/c.height;
        let sx=0,sy=0,sw=vid.videoWidth,sh=vid.videoHeight;
        if(vr>cr){sw=vid.videoHeight*cr;sx=(vid.videoWidth-sw)/2;}
        else{sh=vid.videoWidth/cr;sy=(vid.videoHeight-sh)/2;}
        ctx.drawImage(vid,sx,sy,sw,sh,0,0,c.width,c.height);
        const url=c.toDataURL('image/jpeg',0.8);
        thumbCache[video.id]=url; resolve(url);
      } catch(e){ resolve(null); }
    });
    vid.addEventListener('error', ()=>resolve(null));
    setTimeout(()=>resolve(null), 5000);
  });
}

function buildVideoGridInto(containerId, filter) {
  const grid = document.getElementById(containerId);
  let pool = filter === 'tous' ? VIDEOS : VIDEOS.filter(v => getDifficulty(durationCache[v.id]) === filter);
  if (!pool.length) {
    grid.innerHTML = '<p class="empty-lb" style="grid-column:1/-1;padding:20px">Aucune vidéo pour cette difficulté.</p>';
    return;
  }
  grid.innerHTML = '';
  pool.forEach(video => {
    const card = document.createElement('div'); card.className = 'video-card';
    const dur=durationCache[video.id], diff=getDifficulty(dur), durTxt=dur?formatTime(dur):'…';
    card.innerHTML=`
      <div class="video-thumb-wrap">
        <div class="video-thumb-loading" id="tl-${containerId}-${video.id}"><div class="thumb-spinner"></div></div>
        <img id="ti-${containerId}-${video.id}" class="video-thumb-img" style="display:none" alt="${video.title}" />
        <div class="video-thumb-fallback" id="tf-${containerId}-${video.id}" style="display:none">🎬</div>
        <div class="video-thumb-overlay"><span class="play-icon">▶</span></div>
        <span class="video-diff-badge diff-${diff}" id="td-${containerId}-${video.id}">${getDiffLabel(diff)}</span>
      </div>
      <div class="video-info">
        <div class="video-title">${video.title}</div>
        <div class="video-meta" id="tm-${containerId}-${video.id}">Durée : ${durTxt}</div>
      </div>`;
    card.addEventListener('click', () => {
      if (containerId === 'video-grid') selectVideo(video, false);
      else selectLobbyVideo(video);
    });
    grid.appendChild(card);
    generateThumbnail(video).then(dataURL => {
      document.getElementById(`tl-${containerId}-${video.id}`)?.remove();
      const img=document.getElementById(`ti-${containerId}-${video.id}`);
      const fb=document.getElementById(`tf-${containerId}-${video.id}`);
      if(dataURL){img.src=dataURL;img.style.display='block';}else if(fb){fb.style.display='flex';}
      const d=durationCache[video.id], d2=getDifficulty(d);
      const el=document.getElementById(`td-${containerId}-${video.id}`);
      if(el){el.textContent=getDiffLabel(d2);el.className=`video-diff-badge diff-${d2}`;}
      const me=document.getElementById(`tm-${containerId}-${video.id}`);
      if(me&&d) me.textContent=`Durée : ${formatTime(d)}`;
    });
  });
}

function buildVideoGrid() { buildVideoGridInto('video-grid', currentFilter); }

// ─────────────────────────────────────────────────────
// 9. ALÉATOIRE
// ─────────────────────────────────────────────────────
function launchRandom() {
  let pool = randomDiff==='tous' ? VIDEOS : VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===randomDiff);
  if (!pool.length) pool = VIDEOS;
  const icon=document.getElementById('random-icon');
  const emojis=['🎲','🎭','😂','🔥','🎤','😜','🦁','⭐'];
  let i=0; icon.classList.add('spinning');
  const spin=setInterval(()=>{icon.textContent=emojis[i++%emojis.length];},100);
  setTimeout(()=>{clearInterval(spin);icon.classList.remove('spinning');selectVideo(pool[Math.floor(Math.random()*pool.length)],true);},800);
}
function launchRandomFromResult(){goPrep();setTimeout(()=>{setMode('random');launchRandom();},150);}

function selectVideo(video, isRandom) {
  state.currentVideo=video; state.isRandom=isRandom; state.isMulti=false;
  loadGameScreen();
}

// ─────────────────────────────────────────────────────
// 10. ÉCRAN DE JEU (solo)
// ─────────────────────────────────────────────────────
function loadGameScreen() {
  const v = document.getElementById('main-video');
  document.getElementById('game-avatar').textContent = state.avatar;
  document.getElementById('game-pseudo').textContent = state.pseudo;
  document.getElementById('game-score').textContent  = state.score;
  document.getElementById('random-badge').classList.toggle('hidden', !state.isRandom);
  document.getElementById('multi-badge').classList.toggle('hidden', !state.isMulti);
  document.getElementById('btn-submit').textContent = state.isMulti ? 'Soumettre au salon 👥' : 'Voter 👍';
  document.getElementById('btn-submit').onclick = state.isMulti ? submitPerformance : goVote;

  v.src=state.currentVideo.url; v.muted=false; v.volume=1.0; v.load();
  updateProgressBar(); resetGamePhases(); showPhase('phase-preview');
  showScreen('screen-game');
  v.addEventListener('timeupdate', onTimeUpdate);
  v.addEventListener('ended', onVideoEnded);
}

// ─────────────────────────────────────────────────────
// 11. PHASES
// ─────────────────────────────────────────────────────
function resetGamePhases(){document.querySelectorAll('.phase').forEach(p=>p.classList.remove('active'));}
function showPhase(id){
  resetGamePhases();
  document.getElementById(id).classList.add('active');
  if(id==='phase-preview'){const v=document.getElementById('main-video');v.muted=false;v.volume=1.0;}
}

// ─────────────────────────────────────────────────────
// 12. CONTRÔLES VIDÉO
// ─────────────────────────────────────────────────────
function togglePlayPause(){
  const v=document.getElementById('main-video'),btn=document.getElementById('btn-playpause');
  if(v.paused){v.play();btn.textContent='⏸';}else{v.pause();btn.textContent='▶';}
}
function restartVideo(){const v=document.getElementById('main-video');v.currentTime=0;v.play();document.getElementById('btn-playpause').textContent='⏸';}
function seekVideo(e){
  const v=document.getElementById('main-video'),bar=document.getElementById('progress-bar-bg');
  const ratio=Math.max(0,Math.min(1,(e.clientX-bar.getBoundingClientRect().left)/bar.offsetWidth));
  if(v.duration)v.currentTime=ratio*v.duration;
}
function onTimeUpdate(){updateProgressBar();updateTimeDisplay();}
function onVideoEnded(){const b=document.getElementById('btn-playpause');if(b)b.textContent='▶';}
function updateProgressBar(){const v=document.getElementById('main-video'),f=document.getElementById('progress-bar-fill');if(!f||!v.duration)return;f.style.width=(v.currentTime/v.duration*100)+'%';}
function updateTimeDisplay(){const v=document.getElementById('main-video'),el=document.getElementById('time-display');if(!el)return;el.textContent=`${formatTime(v.currentTime)} / ${formatTime(v.duration||0)}`;}
function formatTime(s){if(!s||isNaN(s))return'0:00';return`${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,'0')}`;}

// ─────────────────────────────────────────────────────
// 13. IMITATION
// ─────────────────────────────────────────────────────
function readyToImitate(){
  const v=document.getElementById('main-video');
  v.pause();v.currentTime=0;v.muted=true;
  document.getElementById('btn-playpause').textContent='▶';
  showPhase('phase-ready');
}

// ─────────────────────────────────────────────────────
// 14. ENREGISTREMENT
// ─────────────────────────────────────────────────────
async function startRecording(){
  let stream;
  try {
    stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,sampleRate:44100},video:false});
  } catch(e){
    try{stream=await navigator.mediaDevices.getUserMedia({audio:true,video:false});}
    catch(e2){document.getElementById('modal-micro').classList.remove('hidden');return;}
  }
  state.audioChunks=[];state.isRecording=true;state.isPaused=false;
  const mimeType=getSupportedMimeType();
  state.mediaRecorder=new MediaRecorder(stream, mimeType?{mimeType}:{});
  state.mediaRecorder.addEventListener('dataavailable',e=>{if(e.data&&e.data.size>0)state.audioChunks.push(e.data);});
  state.mediaRecorder.addEventListener('stop',()=>{
    stream.getTracks().forEach(t=>t.stop());
    state.isRecording=false;
    if(!state.audioChunks.length)return;
    state.audioBlob=new Blob(state.audioChunks,{type:mimeType||'audio/webm'});
    state.audioURL=URL.createObjectURL(state.audioBlob);
    showPhase('phase-playback');
  });
  await countdown(3);
  const v=document.getElementById('main-video');
  v.currentTime=0;v.muted=true;
  showPhase('phase-recording');resetPauseBtn();
  v.play();state.mediaRecorder.start(100);
  v.onended=()=>finishRecording();
}

function getSupportedMimeType(){
  const types=['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/ogg','audio/mp4'];
  for(const t of types){if(MediaRecorder.isTypeSupported(t))return t;}
  return null;
}

function stopRecordingEarly(){document.getElementById('main-video').pause();finishRecording();}
function finishRecording(){if(state.mediaRecorder&&state.mediaRecorder.state!=='inactive')state.mediaRecorder.stop();}

function pauseResumeRecording(){
  const v=document.getElementById('main-video'),btn=document.getElementById('btn-pause-rec');
  if(!state.isPaused){
    v.pause();if(state.mediaRecorder?.state==='recording')state.mediaRecorder.pause();
    state.isPaused=true;btn.textContent='▶ Reprendre';btn.style.background='var(--green)';btn.style.color='#fff';
  }else{
    v.play();if(state.mediaRecorder?.state==='paused')state.mediaRecorder.resume();
    state.isPaused=false;resetPauseBtn();
  }
}
function resetPauseBtn(){const b=document.getElementById('btn-pause-rec');if(!b)return;b.textContent='⏸ Pause';b.style.background='';b.style.color='';}

function stopAndRetryRecording(){
  const v=document.getElementById('main-video');v.pause();v.currentTime=0;
  if(state.mediaRecorder&&state.mediaRecorder.state!=='inactive'){state.mediaRecorder.onstop=null;state.audioChunks=[];state.mediaRecorder.stop();}
  state.audioChunks=[];state.audioBlob=null;state.audioURL=null;state.isRecording=false;state.isPaused=false;
  v.muted=true;resetPauseBtn();showPhase('phase-ready');
}
function retryFromPlayback(){
  state.audioChunks=[];state.audioBlob=null;state.audioURL=null;
  const v=document.getElementById('main-video');v.pause();v.currentTime=0;v.muted=true;showPhase('phase-ready');
}

// ─────────────────────────────────────────────────────
// 15. COMPTE À REBOURS
// ─────────────────────────────────────────────────────
function countdown(seconds){
  return new Promise(resolve=>{
    let n=seconds;
    let o=document.getElementById('countdown-overlay');
    if(!o){
      o=document.createElement('div');o.id='countdown-overlay';
      Object.assign(o.style,{position:'absolute',top:'0',left:'0',width:'100%',height:'100%',zIndex:'50',
        background:'rgba(0,0,0,0.78)',display:'flex',alignItems:'center',justifyContent:'center',
        fontFamily:"'Bangers',cursive",fontSize:'clamp(100px,25vw,180px)',
        color:'#FFE135',textShadow:'6px 6px 0 #FF6B35,0 0 50px rgba(255,225,53,0.7)',lineHeight:'1',textAlign:'center'});
      document.querySelector('.video-wrapper').appendChild(o);
    }
    o.textContent=n;o.style.display='flex';triggerPop(o);
    const iv=setInterval(()=>{n--;if(n<=0){clearInterval(iv);o.style.display='none';resolve();}else{o.textContent=n;triggerPop(o);}},1000);
  });
}
function triggerPop(el){el.style.animation='none';void el.offsetWidth;el.style.animation='countpop 0.45s cubic-bezier(0.175,0.885,0.32,1.275) both';}

// ─────────────────────────────────────────────────────
// 16. LECTURE RÉSULTAT
// ─────────────────────────────────────────────────────
function playResult(){
  if(!state.audioURL)return;
  const v=document.getElementById('main-video'),a=new Audio(state.audioURL);
  v.muted=true;v.currentTime=0;v.play();a.play();v.onended=()=>a.pause();
}
function playResultAgain(){showScreen('screen-game');setTimeout(()=>playResult(),200);}

// ─────────────────────────────────────────────────────
// 17. TÉLÉCHARGEMENT
// ─────────────────────────────────────────────────────
function downloadAudio(){
  if(!state.audioBlob)return;
  const ext=state.audioBlob.type.includes('mp4')?'mp4':state.audioBlob.type.includes('ogg')?'ogg':'webm';
  const a=document.createElement('a');
  a.href=state.audioURL;a.download=`ImitGame_${state.currentVideo?.id||'video'}_${state.pseudo||'joueur'}.${ext}`;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
}

// ─────────────────────────────────────────────────────
// 18. VOTE SOLO
// ─────────────────────────────────────────────────────
const VOTE_POINTS={3:30,1:10,0:0};
const VOTE_MESSAGES={3:{emoji:"🏆",title:"EXCELLENT !",pts:"+30 points !"},1:{emoji:"😄",title:"Pas mal !",pts:"+10 points !"},0:{emoji:"😅",title:"On fait mieux...",pts:"+0 points !"}};
function castVote(level){
  state.score+=VOTE_POINTS[level];savePerformance();saveToStorage();
  const msg=VOTE_MESSAGES[level];
  document.getElementById('result-emoji').textContent=msg.emoji;
  document.getElementById('result-title').textContent=msg.title;
  document.getElementById('result-pts').textContent=msg.pts;
  document.getElementById('result-total-score').textContent=state.score;
  showScreen('screen-result');
}

// ─────────────────────────────────────────────────────
// 19. MULTIJOUEUR — LOBBY
// ─────────────────────────────────────────────────────
function goToLobby(){
  if(!state.pseudo){goProfile();return;}
  document.getElementById('lobby-avatar').textContent=state.avatar;
  document.getElementById('lobby-pseudo').textContent=state.pseudo;
  document.getElementById('join-form').classList.add('hidden');
  document.getElementById('create-form').classList.add('hidden');
  showScreen('screen-lobby');
}

function showJoinSalon(){
  document.getElementById('join-form').classList.remove('hidden');
  document.getElementById('create-form').classList.add('hidden');
  document.getElementById('join-code-input').value='';
  document.getElementById('join-error').classList.add('hidden');
}

function showCreateSalon(){
  document.getElementById('create-form').classList.remove('hidden');
  document.getElementById('join-form').classList.add('hidden');
  buildVideoGridInto('lobby-video-grid', lobbyFilter);
}

function filterLobbyVideos(diff, btn){
  lobbyFilter=diff;
  document.querySelectorAll('#create-form .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  buildVideoGridInto('lobby-video-grid', lobbyFilter);
}

function leaveLobby(){
  unsubscribeRealtime();
  goHome();
}

// ─────────────────────────────────────────────────────
// 20. CRÉER UN SALON
// ─────────────────────────────────────────────────────
async function selectLobbyVideo(video){
  showToast('Création du salon...');
  const code = generateCode();
  const { data: salon, error } = await supabase
    .from('salons')
    .insert({ code, host_name: state.pseudo, host_avatar: state.avatar, video_id: video.id, status: 'waiting' })
    .select().single();
  if(error){ showToast('Erreur lors de la création 😕'); console.error(error); return; }

  const { data: player, error: pe } = await supabase
    .from('players')
    .insert({ salon_id: salon.id, pseudo: state.pseudo, avatar: state.avatar, is_host: true })
    .select().single();
  if(pe){ showToast('Erreur joueur 😕'); return; }

  state.salonId    = salon.id;
  state.salonCode  = code;
  state.playerId   = player.id;
  state.isHost     = true;
  state.multiVideoId = video.id;
  state.isMulti    = true;

  enterWaitingRoom();
}

function generateCode(){
  return Math.random().toString(36).substring(2,8).toUpperCase();
}

// ─────────────────────────────────────────────────────
// 21. REJOINDRE UN SALON
// ─────────────────────────────────────────────────────
async function joinSalon(){
  const code=document.getElementById('join-code-input').value.trim().toUpperCase();
  if(code.length<4){showJoinError();return;}

  const{data:salon,error}=await supabase
    .from('salons').select('*').eq('code',code).eq('status','waiting').single();
  if(error||!salon){showJoinError();return;}

  const{data:player,error:pe}=await supabase
    .from('players')
    .insert({salon_id:salon.id,pseudo:state.pseudo,avatar:state.avatar,is_host:false})
    .select().single();
  if(pe){showJoinError();return;}

  state.salonId    = salon.id;
  state.salonCode  = salon.code;
  state.playerId   = player.id;
  state.isHost     = false;
  state.multiVideoId = salon.video_id;
  state.isMulti    = true;

  enterWaitingRoom();
}

function showJoinError(){
  document.getElementById('join-error').classList.remove('hidden');
}

// ─────────────────────────────────────────────────────
// 22. SALLE D'ATTENTE
// ─────────────────────────────────────────────────────
async function enterWaitingRoom(){
  document.getElementById('waiting-avatar').textContent = state.avatar;
  document.getElementById('waiting-pseudo').textContent = state.pseudo;
  document.getElementById('salon-code-display').textContent = state.salonCode;

  // Affiche la vidéo
  const video = VIDEOS.find(v=>v.id===state.multiVideoId);
  if(video){
    document.getElementById('waiting-video-title').textContent = video.title;
    document.getElementById('waiting-video-emoji').textContent = '🎬';
  }

  // Affiche contrôles selon rôle
  document.getElementById('host-controls').classList.toggle('hidden', !state.isHost);
  document.getElementById('guest-controls').classList.toggle('hidden', state.isHost);

  showScreen('screen-waiting');
  await refreshPlayersList();
  subscribeToSalon();
}

async function refreshPlayersList(){
  const{data:players}=await supabase
    .from('players').select('*').eq('salon_id',state.salonId).order('created_at');
  if(!players)return;
  state.players=players;

  const list=document.getElementById('players-list');
  list.innerHTML=players.map(p=>`
    <div class="waiting-player">
      <span class="waiting-player-avatar">${p.avatar}</span>
      <span class="waiting-player-name">${escapeHtml(p.pseudo)}${p.is_host?' 👑':''}</span>
    </div>`).join('');
  document.getElementById('players-count').textContent=`(${players.length})`;

  // Active le bouton si au moins 2 joueurs
  if(state.isHost){
    const btn=document.getElementById('btn-start-game');
    if(players.length>=2){
      btn.disabled=false;
      btn.textContent='🚀 Lancer la partie !';
    } else {
      btn.disabled=true;
      btn.textContent='⏳ En attente de joueurs...';
    }
  }
}

function copyCode(){
  navigator.clipboard.writeText(state.salonCode).then(()=>showToast('Code copié ! 📋'));
}

async function leaveSalon(){
  if(state.playerId){
    await db.from('players').delete().eq('id',state.playerId);
  }
  unsubscribeRealtime();
  state.salonId=null;state.salonCode=null;state.playerId=null;
  state.isHost=false;state.isMulti=false;
  goHome();
}

// ─────────────────────────────────────────────────────
// 23. REALTIME — ÉCOUTE DES ÉVÉNEMENTS
// ─────────────────────────────────────────────────────
function subscribeToSalon(){
  unsubscribeRealtime();
  state.realtimeChannel = supabase
    .channel(`salon-${state.salonId}`)
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'players',filter:`salon_id=eq.${state.salonId}`},
      ()=>{ refreshPlayersList(); })
    .on('postgres_changes',{event:'DELETE',schema:'public',table:'players',filter:`salon_id=eq.${state.salonId}`},
      ()=>{ refreshPlayersList(); })
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'salons',filter:`id=eq.${state.salonId}`},
      (payload)=>{ handleSalonUpdate(payload.new); })
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'players',filter:`salon_id=eq.${state.salonId}`},
      ()=>{ handlePlayersUpdate(); })
    .subscribe();
}

function unsubscribeRealtime(){
  if(state.realtimeChannel){
    db.removeChannel(state.realtimeChannel);
    state.realtimeChannel=null;
  }
}

async function handleSalonUpdate(salon){
  if(salon.status==='playing'){
    // La partie démarre — charge les joueurs et commence
    const{data:players}=await supabase
      .from('players').select('*').eq('salon_id',state.salonId).order('created_at');
    state.players=players||[];
    state.currentTurnIndex=0;
    startNextTurn();
  } else if(salon.status==='voting'){
    showMultiVoteScreen();
  } else if(salon.status==='finished'){
    showMultiResults();
  }
}

async function handlePlayersUpdate(){
  const{data:players}=await supabase
    .from('players').select('*').eq('salon_id',state.salonId).order('created_at');
  state.players=players||[];

  // Vérifie si tout le monde a joué → passe au vote
  const allPlayed=state.players.every(p=>p.has_played);
  if(allPlayed&&state.isHost&&state.players.length>0){
    await db.from('salons').update({status:'voting'}).eq('id',state.salonId);
  }
}

// ─────────────────────────────────────────────────────
// 24. LANCER LA PARTIE (hôte)
// ─────────────────────────────────────────────────────
async function startMultiGame(){
  await db.from('salons').update({status:'playing'}).eq('id',state.salonId);
}

// ─────────────────────────────────────────────────────
// 25. TOURS DE JEU
// ─────────────────────────────────────────────────────
function startNextTurn(){
  if(state.currentTurnIndex>=state.players.length){return;}
  const currentPlayer=state.players[state.currentTurnIndex];
  const isMyTurn = currentPlayer.id===state.playerId;

  if(isMyTurn){
    // C'est mon tour !
    const video=VIDEOS.find(v=>v.id===state.multiVideoId);
    state.currentVideo=video;
    loadGameScreen();
  } else {
    // Je suis spectateur
    showSpectatorScreen(currentPlayer);
  }
}

function showSpectatorScreen(currentPlayer){
  document.getElementById('spec-avatar').textContent=state.avatar;
  document.getElementById('spec-pseudo').textContent=state.pseudo;
  document.getElementById('spec-current-player').innerHTML=`
    <span class="spec-avatar-big">${currentPlayer.avatar}</span>
    <span class="spec-name">${escapeHtml(currentPlayer.pseudo)}</span>`;
  document.getElementById('spec-turn').textContent=state.currentTurnIndex+1;
  document.getElementById('spec-total').textContent=state.players.length;

  const list=document.getElementById('spec-players-list');
  list.innerHTML=state.players.map((p,i)=>`
    <div class="spec-player-row ${i===state.currentTurnIndex?'active':''}${p.has_played?' done':''}">
      <span>${p.avatar}</span>
      <span>${escapeHtml(p.pseudo)}</span>
      <span>${p.has_played?'✅':'⏳'}</span>
    </div>`).join('');

  showScreen('screen-spectator');
}

function leaveGame(){
  if(state.isMulti) leaveSalon();
  else goPrep();
}

// ─────────────────────────────────────────────────────
// 26. SOUMETTRE LA PERFORMANCE (multi)
// ─────────────────────────────────────────────────────
async function submitPerformance(){
  if(!state.audioBlob){goVote();return;}

  showToast('Envoi de ta performance...');

  // Upload audio sur Supabase Storage
  const ext=state.audioBlob.type.includes('mp4')?'mp4':state.audioBlob.type.includes('ogg')?'ogg':'webm';
  const filename=`${state.salonId}/${state.playerId}.${ext}`;

  const{data:uploadData,error:uploadError}=await db.storage
    .from('audio-performances')
    .upload(filename, state.audioBlob, {contentType:state.audioBlob.type, upsert:true});

  let audioPublicUrl=null;
  if(!uploadError){
    const{data:{publicUrl}}=db.storage.from('audio-performances').getPublicUrl(filename);
    audioPublicUrl=publicUrl;
  }

  // Marque le joueur comme ayant joué
  await db.from('players').update({has_played:true, audio_url:audioPublicUrl||''}).eq('id',state.playerId);

  // Passe au joueur suivant
  state.currentTurnIndex++;
  if(state.currentTurnIndex<state.players.length){
    startNextTurn();
  } else {
    showToast('Tu as joué ! En attente des autres...');
    showSpectatorScreen(state.players[state.currentTurnIndex-1]);
  }
}

// ─────────────────────────────────────────────────────
// 27. PHASE DE VOTE MULTIJOUEUR
// ─────────────────────────────────────────────────────
let voteQueue=[];
let voteQueueIndex=0;

async function showMultiVoteScreen(){
  // Recharge les joueurs avec leurs audios
  const{data:players}=await supabase
    .from('players').select('*').eq('salon_id',state.salonId).order('created_at');
  state.players=players||[];
  voteQueue=state.players.filter(p=>p.audio_url);
  voteQueueIndex=0;
  showNextVote();
}

function showNextVote(){
  if(voteQueueIndex>=voteQueue.length){
    // Tout le monde a été voté
    if(state.isHost) finalizeResults();
    return;
  }
  const target=voteQueue[voteQueueIndex];
  state.currentVoteTarget=target;
  state.hasVoted=false;

  document.getElementById('mvote-avatar').textContent=state.avatar;
  document.getElementById('mvote-pseudo').textContent=state.pseudo;
  document.getElementById('mvote-player-info').innerHTML=`
    <span class="mvote-avatar">${target.avatar}</span>
    <span class="mvote-name">${escapeHtml(target.pseudo)}</span>`;

  // Charge la vidéo + audio
  const video=VIDEOS.find(v=>v.id===state.multiVideoId);
  const mvVideo=document.getElementById('mvote-video');
  if(video){mvVideo.src=video.url;mvVideo.load();}
  const mvAudio=document.getElementById('mvote-audio');
  if(target.audio_url)mvAudio.src=target.audio_url;

  // Si c'est ma propre performance
  const isOwn=target.id===state.playerId;
  document.getElementById('mvote-own').classList.toggle('hidden',!isOwn);
  document.querySelectorAll('.vote-btn').forEach(b=>b.style.opacity=isOwn?'0.3':'1');
  document.querySelectorAll('.vote-btn').forEach(b=>b.style.pointerEvents=isOwn?'none':'auto');

  showScreen('screen-multi-vote');
}

function playMvoteResult(){
  const v=document.getElementById('mvote-video');
  const a=document.getElementById('mvote-audio');
  v.muted=true;v.currentTime=0;a.currentTime=0;
  v.play();a.play();
  v.onended=()=>a.pause();
}

async function castMultiVote(points){
  if(state.hasVoted||state.currentVoteTarget?.id===state.playerId)return;
  state.hasVoted=true;

  await db.from('votes').insert({
    salon_id:state.salonId,
    voter_id:state.playerId,
    target_id:state.currentVoteTarget.id,
    points
  });

  // Met à jour le score du joueur voté
  const newScore=(state.currentVoteTarget.score||0)+points;
  await db.from('players').update({score:newScore}).eq('id',state.currentVoteTarget.id);

  voteQueueIndex++;
  showNextVote();
}

async function finalizeResults(){
  await db.from('salons').update({status:'finished'}).eq('id',state.salonId);
}

// ─────────────────────────────────────────────────────
// 28. RÉSULTATS MULTIJOUEUR
// ─────────────────────────────────────────────────────
async function showMultiResults(){
  const{data:players}=await supabase
    .from('players').select('*').eq('salon_id',state.salonId).order('score',{ascending:false});

  const list=document.getElementById('multi-result-list');
  const medals=['🥇','🥈','🥉'];
  list.innerHTML=(players||[]).map((p,i)=>`
    <div class="multi-result-row ${p.id===state.playerId?'me':''}">
      <span class="mr-rank">${medals[i]||`#${i+1}`}</span>
      <span class="mr-avatar">${p.avatar}</span>
      <span class="mr-name">${escapeHtml(p.pseudo)}${p.id===state.playerId?' (toi)':''}</span>
      <span class="mr-score">${p.score} pts</span>
    </div>`).join('');

  // Sauvegarde le score local si on est dans le top
  const me=players?.find(p=>p.id===state.playerId);
  if(me&&me.score>0){
    state.score+=me.score;
    savePerformance();saveToStorage();
  }

  showScreen('screen-multi-result');
}

async function playAgainMulti(){
  if(state.isHost){
    // Réinitialise les joueurs et relance
    await db.from('players').update({has_played:false,audio_url:null,score:0}).eq('salon_id',state.salonId);
    await db.from('votes').delete().eq('salon_id',state.salonId);
    await db.from('salons').update({status:'waiting'}).eq('id',state.salonId);
    state.currentTurnIndex=0;
    enterWaitingRoom();
  } else {
    showToast('En attente que l\'hôte relance...');
  }
}

// ─────────────────────────────────────────────────────
// 29. CLASSEMENT LOCAL
// ─────────────────────────────────────────────────────
function refreshLeaderboard(){
  const lb=JSON.parse(localStorage.getItem('imitgame_lb')||'[]');
  const list=document.getElementById('leaderboard-list');
  const medals=['🥇','🥈','🥉'];
  list.innerHTML=lb.length===0?'<p class="empty-lb">Sois le premier à jouer !</p>'
    :lb.map((row,i)=>`<div class="lb-row"><span class="lb-rank">${medals[i]||(i+1)}</span><span class="lb-avatar">${row.avatar||'🎭'}</span><span class="lb-name">${escapeHtml(row.name)}</span><span class="lb-pts">${row.score} pts</span></div>`).join('');
}
function confirmResetLeaderboard(){document.getElementById('modal-reset').classList.remove('hidden');}
function resetLeaderboard(){localStorage.removeItem('imitgame_lb');state.score=0;saveToStorage();closeModal('modal-reset');refreshLeaderboard();updateHomeProfile();}

// ─────────────────────────────────────────────────────
// 30. STOCKAGE LOCAL
// ─────────────────────────────────────────────────────
function saveToStorage(){localStorage.setItem('imitgame_pseudo',state.pseudo);localStorage.setItem('imitgame_avatar',state.avatar);localStorage.setItem('imitgame_score',state.score);}
function loadFromStorage(){state.pseudo=localStorage.getItem('imitgame_pseudo')||'';state.avatar=localStorage.getItem('imitgame_avatar')||'🎭';state.score=parseInt(localStorage.getItem('imitgame_score')||'0');}
function savePerformance(){
  let lb=JSON.parse(localStorage.getItem('imitgame_lb')||'[]');
  const idx=lb.findIndex(r=>r.name===state.pseudo);
  const entry={name:state.pseudo,avatar:state.avatar,score:state.score};
  if(idx>=0)lb[idx]=entry;else lb.push(entry);
  lb.sort((a,b)=>b.score-a.score);
  localStorage.setItem('imitgame_lb',JSON.stringify(lb.slice(0,10)));
}

// ─────────────────────────────────────────────────────
// 31. TOAST
// ─────────────────────────────────────────────────────
function showToast(msg,duration=2500){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.remove('hidden');
  setTimeout(()=>t.classList.add('hidden'),duration);
}

// ─────────────────────────────────────────────────────
// 32. UTILITAIRES
// ─────────────────────────────────────────────────────
function stopEverything(){
  const v=document.getElementById('main-video');
  if(v){v.pause();v.currentTime=0;v.onended=null;v.removeEventListener('timeupdate',onTimeUpdate);v.removeEventListener('ended',onVideoEnded);}
  if(state.mediaRecorder&&state.mediaRecorder.state!=='inactive'){state.mediaRecorder.onstop=null;state.mediaRecorder.stop();}
  state.isRecording=false;state.isPaused=false;
}
function closeModal(id){document.getElementById(id).classList.add('hidden');}
function escapeHtml(str){return str.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

// ─────────────────────────────────────────────────────
// 33. INIT
// ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  loadFromStorage();updateHomeProfile();refreshLeaderboard();
  const style=document.createElement('style');
  style.textContent=`@keyframes countpop{from{transform:scale(0.4);opacity:0}to{transform:scale(1);opacity:1}}`;
  document.head.appendChild(style);
  const pi=document.getElementById('pseudo-input');
  pi.addEventListener('keydown',e=>{if(e.key==='Enter')saveProfile();});
  pi.addEventListener('input',()=>{pi.style.borderColor='';});
  VIDEOS.forEach(video=>{
    if(!durationCache[video.id]){
      const v=document.createElement('video');v.preload='metadata';v.muted=true;v.src=video.url;
      v.addEventListener('loadedmetadata',()=>{durationCache[video.id]=v.duration;});
    }
  });
  showScreen('screen-home');
});

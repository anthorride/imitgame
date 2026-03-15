/* ══════════════════════════════════════════════════════
   ImitGame - script.js (tournoi + vote collectif synchronisé)
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
  players: [],
  // Tournoi
  videoIds: [],        // liste des IDs de vidéos du tournoi
  videoCount: 5,       // nombre de vidéos choisi
  lobbyDiff: 'tous',
  currentRound: 0,     // index de la vidéo courante (0-based)
  currentTurnIndex: 0, // index du joueur courant
  // Vote collectif
  voteQueue: [],       // performances à voter
  voteQueueIndex: 0,
  hasVotedThisPerf: false,
  realtimeChannel: null,
};

let currentFilter = 'tous';
let randomDiff    = 'tous';

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

function goVote() { showScreen('screen-vote'); }

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
// 7. FILTRES SOLO
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

function buildVideoGrid() {
  const grid = document.getElementById('video-grid');
  let pool = currentFilter==='tous' ? VIDEOS : VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===currentFilter);
  if (!pool.length) { grid.innerHTML='<p class="empty-lb" style="grid-column:1/-1;padding:20px">Aucune vidéo pour cette difficulté.</p>'; return; }
  grid.innerHTML='';
  pool.forEach(video => {
    const card=document.createElement('div'); card.className='video-card';
    const dur=durationCache[video.id], diff=getDifficulty(dur), durTxt=dur?formatTime(dur):'…';
    card.innerHTML=`
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
    card.addEventListener('click', ()=>selectVideo(video, false));
    grid.appendChild(card);
    generateThumbnail(video).then(dataURL => {
      document.getElementById(`tl-${video.id}`)?.remove();
      const img=document.getElementById(`ti-${video.id}`), fb=document.getElementById(`tf-${video.id}`);
      if(dataURL){img.src=dataURL;img.style.display='block';}else if(fb){fb.style.display='flex';}
      const d=durationCache[video.id], d2=getDifficulty(d);
      const el=document.getElementById(`td-${video.id}`);
      if(el){el.textContent=getDiffLabel(d2);el.className=`video-diff-badge diff-${d2}`;}
      const me=document.getElementById(`tm-${video.id}`);
      if(me&&d) me.textContent=`Durée : ${formatTime(d)}`;
    });
  });
}

// ─────────────────────────────────────────────────────
// 9. SOLO ALÉATOIRE
// ─────────────────────────────────────────────────────
function launchRandom() {
  let pool = randomDiff==='tous' ? VIDEOS : VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===randomDiff);
  if (!pool.length) pool=VIDEOS;
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
// 10. ÉCRAN DE JEU
// ─────────────────────────────────────────────────────
function loadGameScreen() {
  const v = document.getElementById('main-video');
  document.getElementById('game-avatar').textContent = state.avatar;
  document.getElementById('game-pseudo').textContent = state.pseudo;
  document.getElementById('game-score').textContent  = state.score;
  document.getElementById('random-badge').classList.toggle('hidden', !state.isRandom || state.isMulti);
  document.getElementById('multi-badge').classList.toggle('hidden', !state.isMulti);

  if (state.isMulti) {
    document.getElementById('multi-round').textContent     = state.currentRound + 1;
    document.getElementById('multi-total').textContent     = state.videoIds.length;
    document.getElementById('multi-video-name').textContent = state.currentVideo.title;
    document.getElementById('btn-submit').textContent = 'Soumettre 👥';
    document.getElementById('btn-submit').onclick = submitPerformance;
  } else {
    document.getElementById('btn-submit').textContent = 'Voter 👍';
    document.getElementById('btn-submit').onclick = goVote;
  }

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
  try{stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,sampleRate:44100},video:false});}
  catch(e){
    try{stream=await navigator.mediaDevices.getUserMedia({audio:true,video:false});}
    catch(e2){document.getElementById('modal-micro').classList.remove('hidden');return;}
  }
  state.audioChunks=[];state.isRecording=true;state.isPaused=false;
  const mimeType=getSupportedMimeType();
  state.mediaRecorder=new MediaRecorder(stream,mimeType?{mimeType}:{});
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
// 16. LECTURE RÉSULTAT SOLO
// ─────────────────────────────────────────────────────
function playResult(){
  if(!state.audioURL)return;
  const v=document.getElementById('main-video'),a=new Audio(state.audioURL);
  v.muted=true;v.currentTime=0;v.play();a.play();v.onended=()=>a.pause();
}
function playResultAgain(){showScreen('screen-game');setTimeout(()=>playResult(),200);}
function downloadAudio(){
  if(!state.audioBlob)return;
  const ext=state.audioBlob.type.includes('mp4')?'mp4':state.audioBlob.type.includes('ogg')?'ogg':'webm';
  const a=document.createElement('a');
  a.href=state.audioURL;a.download=`ImitGame_${state.currentVideo?.id||'video'}_${state.pseudo||'joueur'}.${ext}`;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
}

// ─────────────────────────────────────────────────────
// 17. VOTE SOLO
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
// 18. LOBBY — CRÉATION SALON
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
}

function leaveLobby(){ unsubscribeRealtime(); goHome(); }

// Compteur nombre de vidéos
function changeVideoCount(delta){
  state.videoCount = Math.max(1, Math.min(20, state.videoCount + delta));
  document.getElementById('video-count-display').textContent = state.videoCount;
}

function setLobbyDiff(diff, btn){
  state.lobbyDiff = diff;
  document.querySelectorAll('#create-form .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
}

async function createSalon(){
  showToast('Création du salon...');

  // Tire au sort les vidéos selon difficulté
  let pool = state.lobbyDiff==='tous' ? VIDEOS : VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===state.lobbyDiff);
  if(!pool.length) pool=VIDEOS;

  // Mélange et prend le nombre demandé
  const shuffled = [...pool].sort(()=>Math.random()-0.5);
  const picked   = shuffled.slice(0, Math.min(state.videoCount, shuffled.length));
  const videoIds = picked.map(v=>v.id);

  const code = generateCode();
  const { data: salon, error } = await db.from('salons').insert({
    code,
    host_name: state.pseudo,
    host_avatar: state.avatar,
    video_id: videoIds[0],
    video_ids: JSON.stringify(videoIds),
    video_count: videoIds.length,
    difficulty: state.lobbyDiff,
    status: 'waiting',
    current_round: 0,
    current_vote_index: 0,
    votes_this_round: 0,
  }).select().single();

  if(error){ showToast('Erreur lors de la création 😕'); console.error(error); return; }

  const { data: player, error: pe } = await db.from('players').insert({
    salon_id: salon.id, pseudo: state.pseudo, avatar: state.avatar, is_host: true, score: 0
  }).select().single();
  if(pe){ showToast('Erreur joueur 😕'); return; }

  state.salonId   = salon.id;
  state.salonCode = code;
  state.playerId  = player.id;
  state.isHost    = true;
  state.isMulti   = true;
  state.videoIds  = videoIds;
  state.currentRound = 0;

  enterWaitingRoom(salon);
}

function generateCode(){
  return Math.random().toString(36).substring(2,8).toUpperCase();
}

// ─────────────────────────────────────────────────────
// 19. REJOINDRE UN SALON
// ─────────────────────────────────────────────────────
let joiningInProgress = false;

async function joinSalon(){
  if(joiningInProgress) return; // empêche le double appel
  joiningInProgress = true;

  const code=document.getElementById('join-code-input').value.trim().toUpperCase();
  if(code.length<4){ showJoinError(); joiningInProgress=false; return; }

  // Vérifie si ce joueur est déjà dans ce salon
  const{data:salon,error}=await db.from('salons').select('*').eq('code',code).eq('status','waiting').single();
  if(error||!salon){ showJoinError(); joiningInProgress=false; return; }

  // Vérifie si le joueur existe déjà
  const{data:existing}=await db.from('players').select('*')
    .eq('salon_id',salon.id).eq('pseudo',state.pseudo);
  if(existing && existing.length>0){
    // Joueur déjà présent — réutilise l'entrée existante
    const player = existing[0];
    state.salonId   = salon.id;
    state.salonCode = salon.code;
    state.playerId  = player.id;
    state.isHost    = false;
    state.isMulti   = true;
    state.videoIds  = JSON.parse(salon.video_ids||'[]');
    state.currentRound = salon.current_round||0;
    joiningInProgress = false;
    enterWaitingRoom(salon);
    return;
  }

  const{data:player,error:pe}=await db.from('players').insert({
    salon_id:salon.id, pseudo:state.pseudo, avatar:state.avatar, is_host:false, score:0
  }).select().single();
  if(pe){ showJoinError(); joiningInProgress=false; return; }

  state.salonId   = salon.id;
  state.salonCode = salon.code;
  state.playerId  = player.id;
  state.isHost    = false;
  state.isMulti   = true;
  state.videoIds  = JSON.parse(salon.video_ids||'[]');
  state.currentRound = salon.current_round||0;
  joiningInProgress = false;
  enterWaitingRoom(salon);
}

function showJoinError(){ document.getElementById('join-error').classList.remove('hidden'); }

// ─────────────────────────────────────────────────────
// 20. SALLE D'ATTENTE
// ─────────────────────────────────────────────────────
async function enterWaitingRoom(salon){
  document.getElementById('waiting-avatar').textContent = state.avatar;
  document.getElementById('waiting-pseudo').textContent = state.pseudo;
  document.getElementById('salon-code-display').textContent = state.salonCode;
  document.getElementById('waiting-video-count').textContent = state.videoIds.length;
  document.getElementById('waiting-diff').textContent = salon.difficulty==='tous'?'Tous':getDiffLabel(salon.difficulty);
  document.getElementById('host-controls').classList.toggle('hidden', !state.isHost);
  document.getElementById('guest-controls').classList.toggle('hidden', state.isHost);
  showScreen('screen-waiting');

  // S'abonne AVANT de rafraîchir pour ne rien rater
  subscribeToSalon();
  await refreshPlayersList();

  // Vérifie si la partie est déjà en cours (cas où on rejoint tard)
  const{data:currentSalon}=await db.from('salons').select('*').eq('id',state.salonId).single();
  if(currentSalon && currentSalon.status !== 'waiting'){
    handleSalonUpdate(currentSalon);
  }
}

async function refreshPlayersList(){
  const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
  if(!players)return;
  state.players=players;
  const list=document.getElementById('players-list');
  list.innerHTML=players.map(p=>`
    <div class="waiting-player">
      <span class="waiting-player-avatar">${p.avatar}</span>
      <span class="waiting-player-name">${escapeHtml(p.pseudo)}${p.is_host?' 👑':''}</span>
    </div>`).join('');
  document.getElementById('players-count').textContent=`(${players.length})`;
  if(state.isHost){
    const btn=document.getElementById('btn-start-game');
    if(players.length>=2){btn.disabled=false;btn.textContent='🚀 Lancer la partie !';}
    else{btn.disabled=true;btn.textContent='⏳ En attente de joueurs...';}
  }
}

function copyCode(){ navigator.clipboard.writeText(state.salonCode).then(()=>showToast('Code copié ! 📋')); }

async function leaveSalon(){
  if(state.playerId) await db.from('players').delete().eq('id',state.playerId);
  unsubscribeRealtime();
  state.salonId=null;state.salonCode=null;state.playerId=null;
  state.isHost=false;state.isMulti=false;
  goHome();
}

// ─────────────────────────────────────────────────────
// 21. REALTIME
// ─────────────────────────────────────────────────────
function subscribeToSalon(){
  unsubscribeRealtime();

  // Polling de secours toutes les 3 secondes au cas où le realtime rate quelque chose
  let lastStatus = '';
  const pollInterval = setInterval(async () => {
    if(!state.salonId){ clearInterval(pollInterval); return; }
    const{data:salon}=await db.from('salons').select('*').eq('id',state.salonId).single();
    if(!salon){ clearInterval(pollInterval); return; }
    if(salon.status !== lastStatus){
      lastStatus = salon.status;
      handleSalonUpdate(salon);
    }
  }, 3000);

  state.realtimeChannel = db
    .channel(`salon-${state.salonId}`)
    .on('postgres_changes',{event:'*',schema:'public',table:'players',filter:`salon_id=eq.${state.salonId}`},
      async () => {
        const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
        if(!players) return;
        state.players = players;

        if(document.getElementById('screen-waiting').classList.contains('active')){
          refreshPlayersList();
          return;
        }

        const allPlayed = players.every(p=>p.has_played);
        if(allPlayed && state.isHost){
          await db.from('salons').update({status:'voting', current_vote_index:0}).eq('id',state.salonId);
        } else if(!allPlayed){
          startNextTurn();
        }
      })
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'salons',filter:`id=eq.${state.salonId}`},
      (payload)=>{ handleSalonUpdate(payload.new); })
    .subscribe();

  // Stocke le polling pour pouvoir l'arrêter
  state.pollInterval = pollInterval;
}

function unsubscribeRealtime(){
  if(state.realtimeChannel){ db.removeChannel(state.realtimeChannel); state.realtimeChannel=null; }
  if(state.pollInterval){ clearInterval(state.pollInterval); state.pollInterval=null; }
}

async function handleSalonUpdate(salon){
  if(salon.video_ids) state.videoIds = JSON.parse(salon.video_ids);
  state.currentRound = salon.current_round||0;

  if(salon.status==='playing' || salon.status==='next_round'){
    const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
    state.players=players||[];

    const nextPlayer = state.players.find(p=>!p.has_played);
    if(!nextPlayer){
      if(state.isHost) await db.from('salons').update({status:'voting',current_vote_index:0}).eq('id',state.salonId);
      return;
    }

    const isMyTurn = nextPlayer.id === state.playerId;
    const myPlayer = state.players.find(p=>p.id===state.playerId);

    if(isMyTurn){
      // C'est mon tour !
      const videoId = state.videoIds[state.currentRound];
      const video   = VIDEOS.find(v=>v.id===videoId);
      if(!video){ showToast('Vidéo introuvable 😕'); return; }
      state.currentVideo = video;
      loadGameScreen();
    } else if(myPlayer?.has_played){
      // J'ai déjà joué
      showPhase('phase-waiting-others');
    } else {
      // Pas encore mon tour — reste en attente visible
      if(document.getElementById('screen-waiting').classList.contains('active')){
        const gc = document.getElementById('guest-controls');
        if(gc) gc.innerHTML = `
          <p class="waiting-hint">La partie a commencé ! En attente de ton tour... 🎬</p>
          <div class="waiting-spinner"></div>`;
      }
    }

  } else if(salon.status==='voting'){
    const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
    state.players=players||[];
    loadCollectiveVoteScreen(salon);

  } else if(salon.status==='finished'){
    showMultiResults();
  }
}

// ─────────────────────────────────────────────────────
// 22. LANCER LA PARTIE
// ─────────────────────────────────────────────────────
async function startMultiGame(){
  // Recharge les joueurs dans l'ordre
  const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
  state.players=players||[];
  await db.from('salons').update({status:'playing', current_round:0}).eq('id',state.salonId);
}

// ─────────────────────────────────────────────────────
// 23. TOURS DE JEU
// ─────────────────────────────────────────────────────
function startNextTurn(){
  // Recharge toujours depuis state.players (mis à jour par realtime)
  const nextPlayer = state.players.find(p => !p.has_played);

  if(!nextPlayer){
    // Tout le monde a joué → l'hôte passe au vote
    if(state.isHost){
      db.from('salons').update({status:'voting', current_vote_index:0}).eq('id',state.salonId);
    } else {
      // Non-hôte : reste en attente que l'hôte déclenche le vote
      showPhase('phase-waiting-others');
    }
    return;
  }

  state.currentTurnIndex = state.players.indexOf(nextPlayer);
  const isMyTurn = nextPlayer.id === state.playerId;

  // Met à jour la progression visible
  const prog = document.getElementById('phase-waiting-progress');
  if(prog) prog.innerHTML = state.players.map(p=>`
    <div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;color:var(--text-muted)">
      <span>${p.avatar}</span><span>${escapeHtml(p.pseudo)}</span>
      <span style="margin-left:auto">${p.has_played?'✅':'⏳'}</span>
    </div>`).join('');

  if(isMyTurn){
    // C'est mon tour !
    const videoId = state.videoIds[state.currentRound];
    const video   = VIDEOS.find(v=>v.id===videoId);
    if(!video){ showToast('Vidéo introuvable 😕'); return; }
    state.currentVideo = video;
    loadGameScreen();
  } else if(state.playerId && state.players.find(p=>p.id===state.playerId)?.has_played){
    // J'ai déjà joué → attente des autres
    if(!document.getElementById('phase-waiting-others').classList.contains('active')){
      showPhase('phase-waiting-others');
    }
  } else {
    // Ce n'est pas encore mon tour → attente
    showPhase('phase-waiting-others');
  }
}

function leaveGame(){
  if(state.isMulti) leaveSalon();
  else goPrep();
}

// ─────────────────────────────────────────────────────
// 24. SOUMETTRE LA PERFORMANCE
// ─────────────────────────────────────────────────────
async function submitPerformance(){
  if(!state.audioBlob){ showToast('Enregistre d\'abord ton imitation !'); return; }

  showPhase('phase-waiting-others');
  showToast('Envoi en cours...');

  // Upload audio
  const ext=state.audioBlob.type.includes('mp4')?'mp4':state.audioBlob.type.includes('ogg')?'ogg':'webm';
  const filename=`${state.salonId}/${state.playerId}_round${state.currentRound}.${ext}`;
  let audioPublicUrl='';

  const{error:uploadError}=await db.storage.from('audio-performances')
    .upload(filename, state.audioBlob, {contentType:state.audioBlob.type, upsert:true});

  if(!uploadError){
    const{data:{publicUrl}}=db.storage.from('audio-performances').getPublicUrl(filename);
    audioPublicUrl=publicUrl;
  }

  // Enregistre la performance
  await db.from('performances').insert({
    salon_id:state.salonId, player_id:state.playerId,
    round_index:state.currentRound, audio_url:audioPublicUrl
  });

  // Marque le joueur comme ayant joué
  await db.from('players').update({has_played:true}).eq('id',state.playerId);

  showToast('Performance envoyée ! ✅');

  // Vérifie si tous ont joué
  const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId);
  state.players=players||[];
  const allPlayed=state.players.every(p=>p.has_played);
  if(allPlayed && state.isHost){
    await db.from('salons').update({status:'voting', current_vote_index:0}).eq('id',state.salonId);
  }
}

// ─────────────────────────────────────────────────────
// 25. VOTE COLLECTIF SYNCHRONISÉ
// ─────────────────────────────────────────────────────
async function loadCollectiveVoteScreen(salon){
  // Charge toutes les performances du round courant
  const{data:perfs}=await db.from('performances').select('*, players(pseudo,avatar,id)')
    .eq('salon_id',state.salonId).eq('round_index',state.currentRound);

  state.voteQueue      = perfs||[];
  state.voteQueueIndex = salon.current_vote_index||0;
  state.hasVotedThisPerf = false;

  showCollectiveVote();
}

function showCollectiveVote(){
  if(state.voteQueueIndex>=state.voteQueue.length){
    // Toutes les perfs votées → next round ou fin
    if(state.isHost) advanceRound();
    return;
  }

  const perf   = state.voteQueue[state.voteQueueIndex];
  const player = perf.players;
  const isOwn  = perf.player_id === state.playerId;

  // Met à jour l'interface
  document.getElementById('cvote-avatar').textContent = state.avatar;
  document.getElementById('cvote-pseudo').textContent = state.pseudo;
  document.getElementById('cvote-score').textContent  = state.score;
  document.getElementById('cvote-current').textContent = state.voteQueueIndex+1;
  document.getElementById('cvote-total').textContent   = state.voteQueue.length;

  document.getElementById('cvote-player-info').innerHTML=`
    <span class="cvote-player-avatar">${player?.avatar||'🎭'}</span>
    <span class="cvote-player-name">${escapeHtml(player?.pseudo||'?')}</span>`;

  // Charge vidéo + audio
  const videoId = state.videoIds[state.currentRound];
  const video   = VIDEOS.find(v=>v.id===videoId);
  const cvVideo = document.getElementById('cvote-video');
  const cvAudio = document.getElementById('cvote-audio');
  if(video){ cvVideo.src=video.url; cvVideo.load(); }
  if(perf.audio_url){ cvAudio.src=perf.audio_url; }

  // Reset UI
  document.getElementById('cvote-vote-section').classList.add('hidden');
  document.getElementById('cvote-result-section').classList.add('hidden');
  document.getElementById('cvote-votes-received').classList.add('hidden');
  document.getElementById('cvote-own-msg').classList.toggle('hidden', !isOwn);
  document.getElementById('cvote-host-ctrl').classList.toggle('hidden', !state.isHost);
  document.getElementById('cvote-guest-waiting').classList.toggle('hidden', state.isHost);
  document.getElementById('btn-cvote-launch').disabled = false;
  document.getElementById('btn-cvote-launch').textContent = '▶ Lancer la prestation pour tous';

  state.hasVotedThisPerf = false;
  showScreen('screen-collective-vote');
}

function launchCollectivePlayback(){
  const cvVideo = document.getElementById('cvote-video');
  const cvAudio = document.getElementById('cvote-audio');
  cvVideo.muted=true; cvVideo.currentTime=0; cvAudio.currentTime=0;
  cvVideo.play(); cvAudio.play();

  document.getElementById('btn-cvote-launch').disabled=true;
  document.getElementById('btn-cvote-launch').textContent='▶ En cours...';
  document.getElementById('cvote-guest-waiting').classList.add('hidden');

  // Affiche les boutons de vote après 1 seconde
  setTimeout(()=>{
    document.getElementById('cvote-vote-section').classList.remove('hidden');
    const isOwn = state.voteQueue[state.voteQueueIndex]?.player_id === state.playerId;
    if(isOwn){
      document.getElementById('cvote-votes-received').classList.remove('hidden');
    }
  }, 1000);

  // Notifie les autres via Supabase qu'on lance (hôte met à jour un champ)
  if(state.isHost){
    db.from('salons').update({votes_this_round: Date.now()}).eq('id',state.salonId);
  }

  cvVideo.onended=()=>cvAudio.pause();
}

async function castCollectiveVote(points){
  if(state.hasVotedThisPerf) return;
  const perf = state.voteQueue[state.voteQueueIndex];
  const isOwn = perf.player_id === state.playerId;
  if(isOwn) return; // ne peut pas voter pour soi-même

  state.hasVotedThisPerf = true;

  // Enregistre le vote
  await db.from('votes').insert({
    salon_id:state.salonId, voter_id:state.playerId,
    target_id:perf.player_id, points
  });

  // Met à jour le score
  const target = state.players.find(p=>p.id===perf.player_id);
  if(target){
    await db.from('players').update({score:(target.score||0)+points}).eq('id',perf.player_id);
    target.score=(target.score||0)+points;
  }

  // Affiche le résultat
  const msgs={3:{emoji:'🏆',txt:'+30 pts'},1:{emoji:'😄',txt:'+10 pts'},0:{emoji:'😅',txt:'+0 pts'}};
  document.getElementById('cvote-result-emoji').textContent = msgs[points].emoji;
  document.getElementById('cvote-result-pts').textContent   = msgs[points].txt;
  document.getElementById('cvote-result-section').classList.remove('hidden');
  document.getElementById('cvote-vote-section').classList.add('hidden');

  // L'hôte peut passer à la prestation suivante
  document.getElementById('cvote-next-ctrl').classList.toggle('hidden', !state.isHost);
  document.getElementById('cvote-next-waiting').classList.toggle('hidden', state.isHost);
}

async function nextCollectiveVote(){
  const nextIndex = state.voteQueueIndex + 1;
  // Met à jour l'index dans Supabase pour sync tous les clients
  await db.from('salons').update({current_vote_index: nextIndex}).eq('id',state.salonId);
  state.voteQueueIndex = nextIndex;
  state.hasVotedThisPerf = false;
  showCollectiveVote();
}

async function advanceRound(){
  const nextRound = state.currentRound + 1;
  if(nextRound >= state.videoIds.length){
    // Tournoi terminé
    await db.from('salons').update({status:'finished'}).eq('id',state.salonId);
  } else {
    // Reset has_played pour tous les joueurs
    await db.from('players').update({has_played:false}).eq('salon_id',state.salonId);
    await db.from('salons').update({
      status:'next_round', current_round:nextRound,
      current_vote_index:0, votes_this_round:0,
      video_id: state.videoIds[nextRound]
    }).eq('id',state.salonId);
  }
}

// ─────────────────────────────────────────────────────
// 26. RÉSULTATS FINAUX
// ─────────────────────────────────────────────────────
async function showMultiResults(){
  const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('score',{ascending:false});
  const list=document.getElementById('multi-result-list');
  const medals=['🥇','🥈','🥉'];
  list.innerHTML=(players||[]).map((p,i)=>`
    <div class="multi-result-row ${p.id===state.playerId?'me':''}">
      <span class="mr-rank">${medals[i]||`#${i+1}`}</span>
      <span class="mr-avatar">${p.avatar}</span>
      <span class="mr-name">${escapeHtml(p.pseudo)}${p.id===state.playerId?' (toi)':''}</span>
      <span class="mr-score">${p.score} pts</span>
    </div>`).join('');

  const me=players?.find(p=>p.id===state.playerId);
  if(me&&me.score>0){
    state.score+=me.score;
    savePerformance();saveToStorage();
  }
  showScreen('screen-multi-result');
}

async function playAgainMulti(){
  if(state.isHost){
    await db.from('players').update({has_played:false,score:0}).eq('salon_id',state.salonId);
    await db.from('votes').delete().eq('salon_id',state.salonId);
    await db.from('performances').delete().eq('salon_id',state.salonId);
    await db.from('salons').update({status:'waiting',current_round:0,current_vote_index:0}).eq('id',state.salonId);
    const{data:salon}=await db.from('salons').select('*').eq('id',state.salonId).single();
    enterWaitingRoom(salon);
  } else {
    showToast('En attente que l\'hôte relance...');
  }
}

// ─────────────────────────────────────────────────────
// 27. CLASSEMENT LOCAL
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
// 28. STOCKAGE LOCAL
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
// 29. TOAST & UTILITAIRES
// ─────────────────────────────────────────────────────
function showToast(msg,duration=2500){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.remove('hidden');
  setTimeout(()=>t.classList.add('hidden'),duration);
}
function stopEverything(){
  const v=document.getElementById('main-video');
  if(v){v.pause();v.currentTime=0;v.onended=null;v.removeEventListener('timeupdate',onTimeUpdate);v.removeEventListener('ended',onVideoEnded);}
  if(state.mediaRecorder&&state.mediaRecorder.state!=='inactive'){state.mediaRecorder.onstop=null;state.mediaRecorder.stop();}
  state.isRecording=false;state.isPaused=false;
}
function closeModal(id){document.getElementById(id).classList.add('hidden');}
function escapeHtml(str){return str.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

// ─────────────────────────────────────────────────────
// 30. INIT
// ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  loadFromStorage();updateHomeProfile();refreshLeaderboard();
  const style=document.createElement('style');
  style.textContent=`@keyframes countpop{from{transform:scale(0.4);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pop{from{transform:scale(0)}to{transform:scale(1)}}`;
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

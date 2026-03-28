/* ══════════════════════════════════════════════════════
   ImitGame - script.js
   ══════════════════════════════════════════════════════ */

const SUPABASE_URL = 'https://uhsnnoclavjvdmpatkji.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoc25ub2NsYXZqdmRtcGF0a2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1ODk3MzUsImV4cCI6MjA4OTE2NTczNX0.0JD5GCzYuPj2AoYBWya-jvpg426aFs0XXYB9tj0K0eM';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ─────────────────────────────────────────────────────
// AVATARS
// ─────────────────────────────────────────────────────
const AVATARS = [
  '🎭','😂','🤣','😜','🤩','😎','🥳','🤪',
  '👽','🤖','🦁','🐯','🦊','🐸','🐺','🦄',
  '🎤','🎬','🎯','🔥','💫','👑','🚀','⭐',
];

// ─────────────────────────────────────────────────────
// VIDÉOS
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
// ÉTAT
// ─────────────────────────────────────────────────────
let state = {
  pseudo:'', avatar:'🎭', score:0, selectedAvatar:'🎭',
  currentVideo:null, isRandom:false,
  mediaRecorder:null, audioChunks:[], audioBlob:null, audioURL:null,
  isRecording:false, isPaused:false,
  isMulti:false,
  salonId:null, salonCode:null, playerId:null, isHost:false,
  players:[],
  videoIds:[], videoCount:5, lobbyDiff:'tous',
  currentRound:0,
  voteQueue:[], voteQueueIndex:0, hasVotedThisPerf:false,
  realtimeChannel:null, pollInterval:null,
  cvoteAudio:null,
  advancingVote:false, liveVotesPollInterval:null,
};

let currentFilter='tous', randomDiff='tous';
let joiningInProgress=false;
let currentResultAudio=null;

// ─────────────────────────────────────────────────────
// ÉTAT LOCAL MULTIPLAYER
// ─────────────────────────────────────────────────────
let localGame = {
  active:false, players:[], videoIds:[], videoCount:3, diff:'tous',
  currentRound:0, performances:[], currentPlayerIndex:0,
  voteQueue:[], voteQueueIndex:0, currentVoters:[], currentVoterStep:0,
  currentPerf:null, votes:{}, handoffCallback:null, pendingAvatar:'🎭'
};

// ─────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

function goHome(){
  stopEverything(); unsubscribeRealtime();
  updateHomeProfile(); refreshLeaderboard();
  showScreen('screen-home');
}

function goPrep(){
  stopEverything(); resetGamePhases();
  document.getElementById('display-pseudo').textContent=state.pseudo;
  document.getElementById('display-avatar').textContent=state.avatar;
  document.getElementById('display-score').textContent=state.score;
  document.getElementById('random-count').textContent=VIDEOS.length;
  buildVideoGrid();
  showScreen('screen-prep');
}

function goProfile(){
  document.getElementById('pseudo-input').value=state.pseudo;
  state.selectedAvatar=state.avatar;
  document.getElementById('avatar-current').textContent=state.avatar;
  buildAvatarGrid(); updateProfileStats();
  showScreen('screen-profile');
}

function goVote(){ showScreen('screen-vote'); }

// ─────────────────────────────────────────────────────
// PROFIL
// ─────────────────────────────────────────────────────
function buildAvatarGrid(){
  const grid=document.getElementById('avatar-grid'); grid.innerHTML='';
  AVATARS.forEach(emoji=>{
    const btn=document.createElement('button');
    btn.className='avatar-btn'+(emoji===state.selectedAvatar?' active':'');
    btn.textContent=emoji;
    btn.onclick=()=>{
      state.selectedAvatar=emoji;
      document.getElementById('avatar-current').textContent=emoji;
      document.querySelectorAll('.avatar-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    };
    grid.appendChild(btn);
  });
}

function saveProfile(){
  const input=document.getElementById('pseudo-input').value.trim();
  if(!input){document.getElementById('pseudo-input').style.borderColor='#e74c3c';return;}
  state.pseudo=input; state.avatar=state.selectedAvatar;
  saveToStorage(); goHome();
}

function updateHomeProfile(){
  document.getElementById('home-avatar').textContent=state.avatar||'🎭';
  document.getElementById('home-profile-name').textContent=state.pseudo||'Choisir un profil';
  document.getElementById('home-profile-score').textContent=state.pseudo?`⭐ ${state.score} pts`:'';
}

function updateProfileStats(){
  const el=document.getElementById('profile-stats');
  const lb=JSON.parse(localStorage.getItem('imitgame_lb')||'[]');
  const rank=lb.findIndex(r=>r.name===state.pseudo);
  el.innerHTML=state.pseudo?`
    <div class="stat-row"><span>🎮 Score total</span><strong>${state.score} pts</strong></div>
    ${rank>=0?`<div class="stat-row"><span>🏆 Classement</span><strong>#${rank+1}</strong></div>`:''}
  `:'';
}

function startSolo(){if(!state.pseudo)goProfile();else goPrep();}

// ─────────────────────────────────────────────────────
// MODES SOLO
// ─────────────────────────────────────────────────────
function setMode(mode){
  document.getElementById('tab-choose').classList.toggle('active',mode==='choose');
  document.getElementById('tab-random').classList.toggle('active',mode==='random');
  document.getElementById('mode-choose').classList.toggle('hidden',mode!=='choose');
  document.getElementById('mode-random').classList.toggle('hidden',mode!=='random');
}

function getDifficulty(s){if(!s||isNaN(s))return'moyen';if(s<=10)return'facile';if(s<=20)return'moyen';return'hard';}
function getDiffLabel(d){return d==='facile'?'⭐ Facile':d==='moyen'?'⭐⭐ Moyen':'⭐⭐⭐ Hard';}

function filterVideos(diff,btn){
  currentFilter=diff;
  document.querySelectorAll('#mode-choose .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  buildVideoGrid();
}

function setRandomDiff(diff,btn){
  randomDiff=diff;
  document.querySelectorAll('.random-filters .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}

// ─────────────────────────────────────────────────────
// MINIATURES
// ─────────────────────────────────────────────────────
function generateThumbnail(video){
  return new Promise(resolve=>{
    if(thumbCache[video.id]){resolve(thumbCache[video.id]);return;}
    const vid=document.createElement('video');
    vid.crossOrigin='anonymous';vid.muted=true;vid.preload='metadata';vid.src=video.url;
    vid.addEventListener('loadedmetadata',()=>{durationCache[video.id]=vid.duration;vid.currentTime=Math.min(vid.duration*0.1,2);});
    vid.addEventListener('seeked',()=>{
      try{
        const c=document.createElement('canvas');c.width=200;c.height=356;
        const ctx=c.getContext('2d');
        const vr=vid.videoWidth/vid.videoHeight,cr=c.width/c.height;
        let sx=0,sy=0,sw=vid.videoWidth,sh=vid.videoHeight;
        if(vr>cr){sw=vid.videoHeight*cr;sx=(vid.videoWidth-sw)/2;}else{sh=vid.videoWidth/cr;sy=(vid.videoHeight-sh)/2;}
        ctx.drawImage(vid,sx,sy,sw,sh,0,0,c.width,c.height);
        const url=c.toDataURL('image/jpeg',0.8);thumbCache[video.id]=url;resolve(url);
      }catch(e){resolve(null);}
    });
    vid.addEventListener('error',()=>resolve(null));
    setTimeout(()=>resolve(null),5000);
  });
}

function buildVideoGrid(){
  const grid=document.getElementById('video-grid');
  let pool=currentFilter==='tous'?VIDEOS:VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===currentFilter);
  if(!pool.length){grid.innerHTML='<p class="empty-lb" style="grid-column:1/-1;padding:20px">Aucune vidéo pour cette difficulté.</p>';return;}
  grid.innerHTML='';
  pool.forEach(video=>{
    const card=document.createElement('div');card.className='video-card';
    const dur=durationCache[video.id],diff=getDifficulty(dur),durTxt=dur?formatTime(dur):'…';
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
    card.addEventListener('click',()=>selectVideo(video,false));
    grid.appendChild(card);
    generateThumbnail(video).then(dataURL=>{
      document.getElementById(`tl-${video.id}`)?.remove();
      const img=document.getElementById(`ti-${video.id}`),fb=document.getElementById(`tf-${video.id}`);
      if(dataURL){img.src=dataURL;img.style.display='block';}else if(fb){fb.style.display='flex';}
      const d=durationCache[video.id],d2=getDifficulty(d);
      const el=document.getElementById(`td-${video.id}`);
      if(el){el.textContent=getDiffLabel(d2);el.className=`video-diff-badge diff-${d2}`;}
      const me=document.getElementById(`tm-${video.id}`);
      if(me&&d)me.textContent=`Durée : ${formatTime(d)}`;
    });
  });
}

// ─────────────────────────────────────────────────────
// ALÉATOIRE SOLO
// ─────────────────────────────────────────────────────
function launchRandom(){
  let pool=randomDiff==='tous'?VIDEOS:VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===randomDiff);
  if(!pool.length)pool=VIDEOS;
  const icon=document.getElementById('random-icon');
  const emojis=['🎲','🎭','😂','🔥','🎤','😜','🦁','⭐'];
  let i=0;icon.classList.add('spinning');
  const spin=setInterval(()=>{icon.textContent=emojis[i++%emojis.length];},100);
  setTimeout(()=>{clearInterval(spin);icon.classList.remove('spinning');selectVideo(pool[Math.floor(Math.random()*pool.length)],true);},800);
}
function launchRandomFromResult(){goPrep();setTimeout(()=>{setMode('random');launchRandom();},150);}

function selectVideo(video,isRandom){state.currentVideo=video;state.isRandom=isRandom;state.isMulti=false;loadGameScreen();}

// ─────────────────────────────────────────────────────
// ÉCRAN DE JEU
// ─────────────────────────────────────────────────────
function loadGameScreen(){
  const v=document.getElementById('main-video');
  const isLocal=localGame.active;
  const lp=isLocal?localGame.players[localGame.currentPlayerIndex]:null;
  document.getElementById('game-avatar').textContent=isLocal?lp.avatar:state.avatar;
  document.getElementById('game-pseudo').textContent=isLocal?lp.pseudo:state.pseudo;
  document.getElementById('game-score').textContent=isLocal?lp.score:state.score;
  document.getElementById('random-badge').classList.toggle('hidden',!state.isRandom||state.isMulti||isLocal);
  document.getElementById('multi-badge').classList.toggle('hidden',!state.isMulti&&!isLocal);
  document.getElementById('local-badge').classList.toggle('hidden',!isLocal);
  if(state.isMulti||isLocal){
    const round=isLocal?localGame.currentRound:state.currentRound;
    const total=isLocal?localGame.videoIds.length:state.videoIds.length;
    document.getElementById('multi-round').textContent=round+1;
    document.getElementById('multi-total').textContent=total;
    document.getElementById('multi-video-name').textContent=state.currentVideo.title;
    document.getElementById('btn-submit').textContent=isLocal?'Soumettre 👍':'Soumettre 👥';
    document.getElementById('btn-submit').onclick=isLocal?submitLocalPerformance:submitPerformance;
  } else {
    document.getElementById('btn-submit').textContent='Voter 👍';
    document.getElementById('btn-submit').onclick=goVote;
  }
  v.src=state.currentVideo.url;v.muted=false;v.volume=1.0;v.load();
  updateProgressBar();resetGamePhases();showPhase('phase-preview');
  showScreen('screen-game');
  v.addEventListener('timeupdate',onTimeUpdate);
  v.addEventListener('ended',onVideoEnded);
}

// ─────────────────────────────────────────────────────
// PHASES
// ─────────────────────────────────────────────────────
function resetGamePhases(){document.querySelectorAll('.phase').forEach(p=>p.classList.remove('active'));}
function showPhase(id){
  resetGamePhases();document.getElementById(id).classList.add('active');
  if(id==='phase-preview'){const v=document.getElementById('main-video');v.muted=false;v.volume=1.0;}
}

// ─────────────────────────────────────────────────────
// CONTRÔLES VIDÉO PRINCIPALE
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
// CONTRÔLES VIDÉO VOTE COLLECTIF
// ─────────────────────────────────────────────────────
function toggleCvotePlayPause(){
  const v=document.getElementById('cvote-video'),btn=document.getElementById('btn-cvote-playpause');
  if(v.paused){
    v.play().catch(e=>console.warn(e));
    if(state.cvoteAudio){state.cvoteAudio.play().catch(e=>console.warn(e));}
    btn.textContent='⏸';
  } else {
    v.pause();
    if(state.cvoteAudio)state.cvoteAudio.pause();
    btn.textContent='▶';
  }
}

function restartCvoteVideo(){
  const v=document.getElementById('cvote-video');
  v.currentTime=0;
  if(state.cvoteAudio)state.cvoteAudio.currentTime=0;
  v.play().catch(e=>console.warn(e));
  if(state.cvoteAudio)state.cvoteAudio.play().catch(e=>console.warn(e));
  document.getElementById('btn-cvote-playpause').textContent='⏸';
}

function seekCvoteVideo(e){
  const v=document.getElementById('cvote-video'),bar=document.getElementById('cvote-progress-bg');
  const ratio=Math.max(0,Math.min(1,(e.clientX-bar.getBoundingClientRect().left)/bar.offsetWidth));
  if(v.duration){
    v.currentTime=ratio*v.duration;
    if(state.cvoteAudio)state.cvoteAudio.currentTime=ratio*v.duration;
  }
}

function updateCvoteProgress(){
  const v=document.getElementById('cvote-video');
  const f=document.getElementById('cvote-progress-fill'),t=document.getElementById('cvote-time');
  if(f&&v.duration)f.style.width=(v.currentTime/v.duration*100)+'%';
  if(t)t.textContent=`${formatTime(v.currentTime)} / ${formatTime(v.duration||0)}`;
}

// ─────────────────────────────────────────────────────
// IMITATION
// ─────────────────────────────────────────────────────
function readyToImitate(){
  const v=document.getElementById('main-video');
  v.pause();v.currentTime=0;v.muted=true;
  document.getElementById('btn-playpause').textContent='▶';
  showPhase('phase-ready');
}

// ─────────────────────────────────────────────────────
// ENREGISTREMENT
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
// COMPTE À REBOURS
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
// LECTURE RÉSULTAT SOLO (sans doublons)
// ─────────────────────────────────────────────────────
function playResult(){
  if(!state.audioURL)return;
  if(currentResultAudio){currentResultAudio.pause();currentResultAudio=null;}
  const v=document.getElementById('main-video');
  const a=new Audio(state.audioURL);
  currentResultAudio=a;
  v.muted=true;v.currentTime=0;v.play();a.play();
  v.onended=()=>{a.pause();currentResultAudio=null;};
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
// VOTE SOLO
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
// LOBBY
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
function leaveLobby(){unsubscribeRealtime();goHome();}
function changeVideoCount(delta){state.videoCount=Math.max(1,Math.min(20,state.videoCount+delta));document.getElementById('video-count-display').textContent=state.videoCount;}
function setLobbyDiff(diff,btn){
  state.lobbyDiff=diff;
  document.querySelectorAll('#create-form .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}

// ─────────────────────────────────────────────────────
// CRÉER UN SALON
// ─────────────────────────────────────────────────────
async function createSalon(){
  showToast('Création du salon...');
  let pool=state.lobbyDiff==='tous'?VIDEOS:VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===state.lobbyDiff);
  if(!pool.length)pool=VIDEOS;
  const shuffled=[...pool].sort(()=>Math.random()-0.5);
  const picked=shuffled.slice(0,Math.min(state.videoCount,shuffled.length));
  const videoIds=picked.map(v=>v.id);
  const code=generateCode();
  const{data:salon,error}=await db.from('salons').insert({
    code, host_name:state.pseudo, host_avatar:state.avatar,
    video_id:videoIds[0], video_ids:JSON.stringify(videoIds),
    video_count:videoIds.length, difficulty:state.lobbyDiff,
    status:'waiting', current_round:0, current_vote_index:0, votes_this_round:0,
  }).select().single();
  if(error){showToast('Erreur lors de la création 😕');console.error(error);return;}
  const{data:player,error:pe}=await db.from('players').insert({
    salon_id:salon.id, pseudo:state.pseudo, avatar:state.avatar, is_host:true, score:0
  }).select().single();
  if(pe){showToast('Erreur joueur 😕');return;}
  state.salonId=salon.id;state.salonCode=code;state.playerId=player.id;
  state.isHost=true;state.isMulti=true;state.videoIds=videoIds;state.currentRound=0;
  enterWaitingRoom(salon);
}
function generateCode(){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code='';
  for(let i=0;i<6;i++)code+=chars[Math.floor(Math.random()*chars.length)];
  return code;
}

// ─────────────────────────────────────────────────────
// REJOINDRE UN SALON
// ─────────────────────────────────────────────────────
async function joinSalon(){
  if(joiningInProgress)return;
  joiningInProgress=true;
  const code=document.getElementById('join-code-input').value.trim().toUpperCase();
  if(code.length<4){showJoinError();joiningInProgress=false;return;}
  const{data:salon,error}=await db.from('salons').select('*').eq('code',code).eq('status','waiting').single();
  console.log('joinSalon: salon trouvé', salon?.id, salon?.code);
  if(error||!salon){showJoinError();joiningInProgress=false;return;}
  // Vérifie si ce pseudo est déjà pris par un guest dans ce salon
  const{data:taken}=await db.from('players').select('id')
    .eq('salon_id',salon.id).eq('pseudo',state.pseudo).eq('is_host',false).maybeSingle();
  console.log('joinSalon: pseudo pris?', taken);
  if(taken){
    showToast('Ce pseudo est déjà pris dans ce salon ! 😅');
    joiningInProgress=false;return;
  }
  const{data:player,error:pe}=await db.from('players').insert({
    salon_id:salon.id,pseudo:state.pseudo,avatar:state.avatar,is_host:false,score:0
  }).select().single();
  console.log('joinSalon: insert player résultat', player, pe);
  if(pe){showJoinError();joiningInProgress=false;return;}
  state.salonId=salon.id;state.salonCode=salon.code;state.playerId=player.id;
  state.isHost=false;state.isMulti=true;
  state.videoIds=JSON.parse(salon.video_ids||'[]');state.currentRound=salon.current_round||0;
  joiningInProgress=false;
  enterWaitingRoom(salon);
}
function showJoinError(){document.getElementById('join-error').classList.remove('hidden');}

// ─────────────────────────────────────────────────────
// SALLE D'ATTENTE
// ─────────────────────────────────────────────────────
async function enterWaitingRoom(salon){
  document.getElementById('waiting-avatar').textContent=state.avatar;
  document.getElementById('waiting-pseudo').textContent=state.pseudo;
  document.getElementById('salon-code-display').textContent=state.salonCode;
  document.getElementById('waiting-video-count').textContent=state.videoIds.length;
  document.getElementById('waiting-diff').textContent=salon.difficulty==='tous'?'Tous':getDiffLabel(salon.difficulty);
  document.getElementById('host-controls').classList.toggle('hidden',!state.isHost);
  document.getElementById('guest-controls').classList.toggle('hidden',state.isHost);
  showScreen('screen-waiting');
  subscribeToSalon();
  await refreshPlayersList();
  const{data:currentSalon}=await db.from('salons').select('*').eq('id',state.salonId).single();
  if(currentSalon&&currentSalon.status!=='waiting')handleSalonUpdate(currentSalon);
}

async function refreshPlayersList(){
  const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
  if(!players)return;
  console.log('refreshPlayersList:', players.length, 'isHost:', state.isHost, 'salonId:', state.salonId, 'players:', players.map(p=>p.pseudo));
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

function copyCode(){navigator.clipboard.writeText(state.salonCode).then(()=>showToast('Code copié ! 📋'));}

async function leaveSalon(){
  if(localGame.active){confirmLeaveLocal();return;}
  if(state.playerId)await db.from('players').delete().eq('id',state.playerId);
  stopLiveVotesPoll();
  unsubscribeRealtime();
  state.salonId=null;state.salonCode=null;state.playerId=null;
  state.isHost=false;state.isMulti=false;state.advancingVote=false;
  if(state.cvoteAudio){state.cvoteAudio.pause();state.cvoteAudio=null;}
  goHome();
}

// ─────────────────────────────────────────────────────
// REALTIME + POLLING
// ─────────────────────────────────────────────────────
function subscribeToSalon(){
  unsubscribeRealtime();
  let lastStatus='', lastPlayedCount=-1, lastVoteIndex=-1;

  const pollInterval=setInterval(async()=>{
    if(!state.salonId){clearInterval(pollInterval);return;}
    const[salonRes,playersRes]=await Promise.all([
      db.from('salons').select('*').eq('id',state.salonId).single(),
      db.from('players').select('*').eq('salon_id',state.salonId).order('created_at')
    ]);
    const salon=salonRes.data, players=playersRes.data;
    if(!salon||!players)return;
    state.players=players;
    const playedCount=players.filter(p=>p.has_played).length;
    const voteIndex=salon.current_vote_index||0;
    const changed=salon.status!==lastStatus||playedCount!==lastPlayedCount||voteIndex!==lastVoteIndex;
    lastStatus=salon.status;lastPlayedCount=playedCount;lastVoteIndex=voteIndex;

    if(document.getElementById('screen-waiting').classList.contains('active'))refreshPlayersList();

    // Mise à jour temps réel de l'écran d'attente après soumission
    if(salon.status==='playing'&&document.getElementById('phase-waiting-others').classList.contains('active')){
      updateWaitingProgress(players);
    }

    // Hôte : vérifier si tous ont voté → avancer
    if(salon.status==='voting'&&state.isHost&&!state.advancingVote&&state.voteQueue?.length>0){
      const currentPerf=state.voteQueue[voteIndex];
      if(currentPerf){
        const nonPerformerCount=state.players.length-1;
        if(nonPerformerCount<=0){
          state.advancingVote=true;
          setTimeout(()=>doAdvanceVote(voteIndex),2000);
        } else {
          const{count}=await db.from('votes')
            .select('*',{count:'exact',head:true})
            .eq('salon_id',state.salonId)
            .eq('target_id',currentPerf.player_id);
          if((count||0)>=nonPerformerCount){
            state.advancingVote=true;
            setTimeout(()=>doAdvanceVote(voteIndex),2000);
          }
        }
      }
    }

    if(changed)checkAndProgress(salon,players);
  },2000);

  state.realtimeChannel=db.channel(`salon-${state.salonId}`)
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'players',filter:`salon_id=eq.${state.salonId}`},
      async()=>{
        const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
        if(players){state.players=players;if(document.getElementById('screen-waiting').classList.contains('active'))refreshPlayersList();}
      })
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'salons',filter:`id=eq.${state.salonId}`},
      async(payload)=>{
        const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
        state.players=players||[];
        checkAndProgress(payload.new,state.players);
      })
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'players',filter:`salon_id=eq.${state.salonId}`},
      async()=>{
        const[salonRes,playersRes]=await Promise.all([
          db.from('salons').select('*').eq('id',state.salonId).single(),
          db.from('players').select('*').eq('salon_id',state.salonId).order('created_at')
        ]);
        if(salonRes.data&&playersRes.data){state.players=playersRes.data;checkAndProgress(salonRes.data,playersRes.data);}
      })
    .subscribe();

  state.pollInterval=pollInterval;
}

function unsubscribeRealtime(){
  if(state.realtimeChannel){db.removeChannel(state.realtimeChannel);state.realtimeChannel=null;}
  if(state.pollInterval){clearInterval(state.pollInterval);state.pollInterval=null;}
  stopLiveVotesPoll();
}

// ─────────────────────────────────────────────────────
// LOGIQUE CENTRALE DE PROGRESSION
// ─────────────────────────────────────────────────────
async function checkAndProgress(salon,players){
  if(!salon||!players)return;
  if(salon.video_ids)state.videoIds=JSON.parse(salon.video_ids);
  state.currentRound=salon.current_round||0;

  if(salon.status==='waiting'){
    if(document.getElementById('screen-waiting').classList.contains('active'))refreshPlayersList();
    return;
  }

  // ── Phase 1 : IMITATION SIMULTANÉE ──
  if(salon.status==='playing'){
    const myPlayer=players.find(p=>p.id===state.playerId);
    const allPlayed=players.every(p=>p.has_played);
    if(allPlayed){
      if(state.isHost)await db.from('salons').update({status:'voting',current_vote_index:0}).eq('id',state.salonId);
      return;
    }
    if(myPlayer?.has_played){
      // Déjà soumis → écran d'attente avec liste en temps réel
      if(document.getElementById('screen-game').classList.contains('active')){
        showPhase('phase-waiting-others');
      }
      updateWaitingProgress(players);
      return;
    }
    // Pas encore joué → charger l'écran de jeu
    const onGame=document.getElementById('screen-game').classList.contains('active');
    const onWaiting=document.getElementById('phase-waiting-others').classList.contains('active');
    if(!onGame||onWaiting){
      const videoId=state.videoIds[state.currentRound];
      const video=VIDEOS.find(v=>v.id===videoId);
      if(!video){showToast('Vidéo introuvable 😕');return;}
      state.currentVideo=video;loadGameScreen();
    }
    return;
  }

  // ── Phase 2 : VOTE SYNCHRONISÉ ──
  if(salon.status==='voting'){
    const dbVoteIndex=salon.current_vote_index||0;
    if(!document.getElementById('screen-collective-vote').classList.contains('active')){
      await loadCollectiveVoteScreen(dbVoteIndex);
    } else if(dbVoteIndex!==state.voteQueueIndex){
      state.voteQueueIndex=dbVoteIndex;
      state.hasVotedThisPerf=false;
      state.advancingVote=false;
      showCollectiveVote();
    }
    return;
  }

  // ── Phase 3 : CLASSEMENT MANCHE ──
  if(salon.status==='round_results'){
    stopLiveVotesPoll();
    if(!document.getElementById('screen-round-results').classList.contains('active')){
      showRoundResults(players);
    }
    return;
  }

  if(salon.status==='finished'){showMultiResults();return;}
}

// ─────────────────────────────────────────────────────
// LANCER LA PARTIE
// ─────────────────────────────────────────────────────
async function startMultiGame(){
  const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
  state.players=players||[];
  state.advancingVote=false;
  await db.from('players').update({has_played:false,score:0}).eq('salon_id',state.salonId);
  await db.from('salons').update({status:'playing',current_round:0,current_vote_index:0}).eq('id',state.salonId);
}

function leaveGame(){
  if(localGame.active){if(confirm('Quitter la partie locale ?'))confirmLeaveLocal();return;}
  if(state.isMulti)leaveSalon();else goPrep();
}

// ─────────────────────────────────────────────────────
// SOUMETTRE LA PERFORMANCE
// ─────────────────────────────────────────────────────
async function submitPerformance(){
  if(!state.audioBlob){showToast('Enregistre d\'abord ton imitation !');return;}
  showPhase('phase-waiting-others');showToast('Envoi en cours...');
  const base64=await new Promise(resolve=>{
    const reader=new FileReader();
    reader.onloadend=()=>resolve(reader.result);
    reader.readAsDataURL(state.audioBlob);
  });
  await db.from('performances').insert({
    salon_id:state.salonId,player_id:state.playerId,
    round_index:state.currentRound,audio_url:base64
  });
  await db.from('players').update({has_played:true}).eq('id',state.playerId);
  showToast('Performance envoyée ! ✅');
  const{data:players}=await db.from('players').select('*').eq('salon_id',state.salonId).order('created_at');
  state.players=players||[];
  updateWaitingProgress(state.players);
  const allPlayed=state.players.every(p=>p.has_played);
  if(allPlayed&&state.isHost)await db.from('salons').update({status:'voting',current_vote_index:0}).eq('id',state.salonId);
}

// ─────────────────────────────────────────────────────
// VOTE COLLECTIF
// ─────────────────────────────────────────────────────
async function loadCollectiveVoteScreen(startIndex=0){
  const{data:perfs}=await db.from('performances')
    .select('*, players(pseudo,avatar,id,created_at)')
    .eq('salon_id',state.salonId)
    .eq('round_index',state.currentRound);
  console.log('loadCollectiveVoteScreen round:', state.currentRound, 'perfs:', perfs?.length);

  // Ordonnées selon l'ordre d'arrivée des joueurs → cohérent pour tous
  const orderedPlayers=[...state.players].sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));
  state.voteQueue=orderedPlayers
    .map(p=>(perfs||[]).find(perf=>perf.player_id===p.id))
    .filter(Boolean);
  state.voteQueueIndex=startIndex;
  state.hasVotedThisPerf=false;

  if(state.voteQueue.length===0){
    if(state.isHost)await doAdvanceVote(startIndex);
    return;
  }
  showCollectiveVote();
}

function showCollectiveVote(){
  if(state.cvoteAudio){state.cvoteAudio.pause();state.cvoteAudio=null;}
  stopLiveVotesPoll();
  const cvVideo=document.getElementById('cvote-video');
  cvVideo.pause();
  cvVideo.removeEventListener('timeupdate',updateCvoteProgress);

  if(state.voteQueueIndex>=state.voteQueue.length)return;

  const perf=state.voteQueue[state.voteQueueIndex];
  const player=perf.players;
  const isMyPerf=perf.player_id===state.playerId;

  // En-tête
  document.getElementById('cvote-avatar').textContent=state.avatar;
  document.getElementById('cvote-pseudo').textContent=state.pseudo;
  document.getElementById('cvote-score').textContent=state.score;
  document.getElementById('cvote-current').textContent=state.voteQueueIndex+1;
  document.getElementById('cvote-total').textContent=state.voteQueue.length;
  document.getElementById('cvote-round').textContent=state.currentRound+1;
  document.getElementById('cvote-player-info').innerHTML=`
    <span class="cvote-player-avatar">${player?.avatar||'🎭'}</span>
    <span class="cvote-player-name">${escapeHtml(player?.pseudo||'?')}</span>
    ${isMyPerf?'<span style="color:var(--yellow);font-size:12px;margin-left:8px">👈 C\'est toi !</span>':''}`;

  // Vidéo originale
  const videoId=state.videoIds[state.currentRound];
  const video=VIDEOS.find(v=>v.id===videoId);
  cvVideo.muted=true;
  if(video){cvVideo.src=video.url;cvVideo.load();}

  // Audio de la perf (pas pour le performer lui-même)
  if(!isMyPerf&&perf.audio_url&&perf.audio_url.length>0){
    state.cvoteAudio=new Audio(perf.audio_url);
    state.cvoteAudio.preload='auto';
  }

  cvVideo.addEventListener('timeupdate',updateCvoteProgress);
  cvVideo.onended=()=>{
    document.getElementById('btn-cvote-playpause').textContent='▶';
    if(state.cvoteAudio)state.cvoteAudio.pause();
  };

  document.getElementById('btn-cvote-playpause').textContent='▶';
  document.getElementById('cvote-progress-fill').style.width='0%';
  document.getElementById('cvote-time').textContent='0:00 / 0:00';

  // Affichage selon rôle
  const voteSection=document.getElementById('cvote-vote-section');
  const votedWaiting=document.getElementById('cvote-voted-waiting');
  const beingRated=document.getElementById('cvote-being-rated');
  const ownMsg=document.getElementById('cvote-own-msg');

  beingRated.classList.toggle('hidden',!isMyPerf);
  voteSection.classList.toggle('hidden',isMyPerf||state.hasVotedThisPerf);
  votedWaiting.classList.toggle('hidden',!state.hasVotedThisPerf||isMyPerf);
  ownMsg.classList.add('hidden');

  if(isMyPerf){
    document.getElementById('cvote-live-votes').innerHTML='';
    startLiveVotesPoll(perf.player_id);
  } else {
    const voteButtons=document.getElementById('cvote-vote-buttons');
    voteButtons.style.opacity='1';
    voteButtons.style.pointerEvents='auto';
  }

  showScreen('screen-collective-vote');
}

async function castCollectiveVote(points){
  if(localGame.active){castLocalVote(points);return;}
  if(state.hasVotedThisPerf)return;
  const perf=state.voteQueue[state.voteQueueIndex];
  state.hasVotedThisPerf=true;

  const voteButtons=document.getElementById('cvote-vote-buttons');
  voteButtons.style.opacity='0.4';
  voteButtons.style.pointerEvents='none';

  await db.from('votes').insert({
    salon_id:state.salonId,voter_id:state.playerId,
    target_id:perf.player_id,points
  });

  const target=state.players.find(p=>p.id===perf.player_id);
  if(target){
    const newScore=(target.score||0)+points;
    await db.from('players').update({score:newScore}).eq('id',perf.player_id);
    target.score=newScore;
  }

  const msgs={3:{emoji:'🏆',txt:'+30 pts'},1:{emoji:'😄',txt:'+10 pts'},0:{emoji:'😅',txt:'+0 pts'}};
  document.getElementById('cvote-voted-emoji').textContent=msgs[points].emoji;
  document.getElementById('cvote-voted-pts').textContent=msgs[points].txt;
  document.getElementById('cvote-vote-section').classList.add('hidden');
  document.getElementById('cvote-voted-waiting').classList.remove('hidden');
  // L'hôte détecte automatiquement via le polling que tous ont voté
}

// ─────────────────────────────────────────────────────
// LIVE VOTES (pour le joueur noté)
// ─────────────────────────────────────────────────────
function startLiveVotesPoll(targetId){
  const knownIds=new Set();
  state.liveVotesPollInterval=setInterval(async()=>{
    const{data:votes}=await db.from('votes')
      .select('*')
      .eq('salon_id',state.salonId)
      .eq('target_id',targetId);
    if(!votes)return;
    votes.filter(v=>!knownIds.has(v.id)).forEach(vote=>{
      knownIds.add(vote.id);
      addLiveVote(vote);
    });
  },1500);
}

function stopLiveVotesPoll(){
  if(state.liveVotesPollInterval){clearInterval(state.liveVotesPollInterval);state.liveVotesPollInterval=null;}
}

function addLiveVote(vote){
  const container=document.getElementById('cvote-live-votes');
  if(!container)return;
  const voter=state.players.find(p=>p.id===vote.voter_id)||{};
  const labels={3:'👍👍 Excellent !',1:'👍 Moyen',0:'👎 Nul'};
  const pts={3:'+30 pts',1:'+10 pts',0:'+0 pts'};
  const div=document.createElement('div');
  div.className='live-vote-entry';
  div.innerHTML=`
    <span class="live-vote-avatar">${voter.avatar||'🎭'}</span>
    <span class="live-vote-pseudo">${escapeHtml(voter.pseudo||'?')}</span>
    <span class="live-vote-result">${labels[vote.points]||'?'}</span>
    <span class="live-vote-pts">${pts[vote.points]||''}</span>`;
  container.appendChild(div);
}

// ─────────────────────────────────────────────────────
// AVANCEMENT VOTE (hôte)
// ─────────────────────────────────────────────────────
async function doAdvanceVote(currentIndex){
  const nextIndex=(currentIndex||0)+1;
  if(!state.voteQueue||nextIndex>=state.voteQueue.length){
    await db.from('salons').update({status:'round_results'}).eq('id',state.salonId);
  } else {
    await db.from('salons').update({current_vote_index:nextIndex}).eq('id',state.salonId);
  }
  state.advancingVote=false;
}

// ─────────────────────────────────────────────────────
// MANCHE SUIVANTE (bouton hôte)
// ─────────────────────────────────────────────────────
async function nextRound(){
  const nextRoundIndex=state.currentRound+1;
  if(nextRoundIndex>=state.videoIds.length){
    await db.from('salons').update({status:'finished'}).eq('id',state.salonId);
  } else {
    state.advancingVote=false;
    state.voteQueue=[];
    state.voteQueueIndex=0;
    state.hasVotedThisPerf=false;
    await db.from('votes').delete().eq('salon_id',state.salonId);
    await db.from('players').update({has_played:false}).eq('salon_id',state.salonId);
    await db.from('salons').update({
      status:'playing',current_round:nextRoundIndex,
      current_vote_index:0,votes_this_round:0,
      video_id:state.videoIds[nextRoundIndex]
    }).eq('id',state.salonId);
  }
}

// ─────────────────────────────────────────────────────
// CLASSEMENT MANCHE
// ─────────────────────────────────────────────────────
function showRoundResults(players){
  const sorted=[...players].sort((a,b)=>(b.score||0)-(a.score||0));
  const medals=['🥇','🥈','🥉'];
  document.getElementById('round-results-num').textContent=state.currentRound+1;
  document.getElementById('round-results-list').innerHTML=sorted.map((p,i)=>`
    <div class="multi-result-row ${p.id===state.playerId?'me':''}">
      <span class="mr-rank">${medals[i]||`#${i+1}`}</span>
      <span class="mr-avatar">${p.avatar}</span>
      <span class="mr-name">${escapeHtml(p.pseudo)}${p.id===state.playerId?' (toi)':''}</span>
      <span class="mr-score">${p.score||0} pts</span>
    </div>`).join('');
  document.getElementById('round-results-host-controls').classList.toggle('hidden',!state.isHost);
  document.getElementById('round-results-guest-msg').classList.toggle('hidden',state.isHost);
  showScreen('screen-round-results');
}

// ─────────────────────────────────────────────────────
// MISE À JOUR ATTENTE SOUMISSIONS
// ─────────────────────────────────────────────────────
function updateWaitingProgress(players){
  const prog=document.getElementById('phase-waiting-progress');
  if(!prog)return;
  prog.innerHTML=players.map(p=>`
    <div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;color:var(--text-muted)">
      <span>${p.avatar}</span><span>${escapeHtml(p.pseudo)}</span>
      <span style="margin-left:auto">${p.has_played?'✅':'⏳'}</span>
    </div>`).join('');
}

// ─────────────────────────────────────────────────────
// RÉSULTATS FINAUX
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
  if(me&&me.score>0){state.score+=me.score;savePerformance();saveToStorage();}
  showScreen('screen-multi-result');
}

async function playAgainMulti(){
  if(state.isHost){
    state.advancingVote=false;
    await db.from('players').update({has_played:false,score:0}).eq('salon_id',state.salonId);
    await db.from('votes').delete().eq('salon_id',state.salonId);
    await db.from('performances').delete().eq('salon_id',state.salonId);
    // Tire de nouvelles vidéos aléatoires
    let pool=state.lobbyDiff==='tous'?VIDEOS:VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===state.lobbyDiff);
    if(!pool.length)pool=VIDEOS;
    const shuffled=[...pool].sort(()=>Math.random()-0.5);
    const picked=shuffled.slice(0,Math.min(state.videoCount,shuffled.length));
    const newVideoIds=picked.map(v=>v.id);
    state.videoIds=newVideoIds;
    await db.from('salons').update({
      status:'waiting',current_round:0,current_vote_index:0,votes_this_round:0,
      video_ids:JSON.stringify(newVideoIds),video_id:newVideoIds[0]
    }).eq('id',state.salonId);
    const{data:salon}=await db.from('salons').select('*').eq('id',state.salonId).single();
    enterWaitingRoom(salon);
  } else {
    showToast('En attente que l\'hôte relance...');
  }
}

// ─────────────────────────────────────────────────────
// CLASSEMENT LOCAL
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
// STOCKAGE LOCAL
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
// TOAST & UTILITAIRES
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
  if(currentResultAudio){currentResultAudio.pause();currentResultAudio=null;}
  if(state.cvoteAudio){state.cvoteAudio.pause();state.cvoteAudio=null;}
}
function shareSalon(){
  const url=`${window.location.origin}?join=${state.salonCode}`;
  const text=`Rejoins ma partie ImitGame ! Code: ${state.salonCode}`;
  if(navigator.share){
    navigator.share({title:'ImitGame 🎭',text,url}).catch(e=>console.log('Share cancelled'));
  } else {
    navigator.clipboard.writeText(`${text}\n${url}`)
      .then(()=>showToast('Lien copié ! 📋'))
      .catch(()=>showToast('Code: '+state.salonCode));
  }
}

function closeModal(id){document.getElementById(id).classList.add('hidden');}
function escapeHtml(str){return str.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function handleSalonUpdate(salon){
  db.from('players').select('*').eq('salon_id',state.salonId).order('created_at')
    .then(({data:players})=>{state.players=players||[];checkAndProgress(salon,state.players);});
}

// ─────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  loadFromStorage();loadVideoTitles();updateHomeProfile();refreshLeaderboard();
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
  buildLocalAvatarGrid();
  const urlParams=new URLSearchParams(window.location.search);
  const joinCode=urlParams.get('join');
  if(joinCode){
    setTimeout(()=>{
      if(!state.pseudo){
        goProfile();
        showToast('Entre ton pseudo puis rejoins avec le code: '+joinCode);
      } else {
        goToLobby();showJoinSalon();
        document.getElementById('join-code-input').value=joinCode.toUpperCase();
        showToast('Code pré-rempli ! Clique sur Rejoindre 🚀');
      }
    },500);
  }
});

// ═══════════════════════════════════════════════════════
// LOCAL MULTIPLAYER
// ═══════════════════════════════════════════════════════

function showLocalMulti(){
  if(!state.pseudo){goProfile();return;}
  localGame={
    active:false, players:[], videoIds:[], videoCount:3, diff:'tous',
    currentRound:0, performances:[], currentPlayerIndex:0,
    voteQueue:[], voteQueueIndex:0, currentVoters:[], currentVoterStep:0,
    currentPerf:null, votes:{}, handoffCallback:null, pendingAvatar:'🎭'
  };
  document.getElementById('local-setup-avatar').textContent=state.avatar;
  document.getElementById('local-setup-pseudo').textContent=state.pseudo;
  document.getElementById('local-video-count-display').textContent=localGame.videoCount;
  document.querySelectorAll('#local-diff-filters .filter-btn').forEach((b,i)=>b.classList.toggle('active',i===0));
  buildLocalAvatarGrid();
  renderLocalPlayersList();
  showScreen('screen-local-setup');
}

function buildLocalAvatarGrid(){
  const grid=document.getElementById('local-avatar-grid');
  if(!grid)return;
  grid.innerHTML='';
  AVATARS.forEach(emoji=>{
    const btn=document.createElement('button');
    btn.className='local-avatar-btn'+(emoji===localGame.pendingAvatar?' active':'');
    btn.textContent=emoji;
    btn.dataset.emoji=emoji;
    btn.onclick=()=>selectLocalAvatar(emoji);
    grid.appendChild(btn);
  });
}

function selectLocalAvatar(emoji){
  localGame.pendingAvatar=emoji;
  const preview=document.getElementById('local-avatar-preview');
  if(preview)preview.textContent=emoji;
  document.querySelectorAll('.local-avatar-btn').forEach(b=>b.classList.toggle('active',b.dataset.emoji===emoji));
}

function addLocalPlayer(){
  const input=document.getElementById('local-player-input');
  const pseudo=input.value.trim();
  if(!pseudo){input.style.borderColor='var(--red)';return;}
  if(localGame.players.find(p=>p.pseudo===pseudo)){showToast('Ce pseudo est déjà pris !');return;}
  localGame.players.push({pseudo,avatar:localGame.pendingAvatar||'🎭',score:0});
  input.value='';input.style.borderColor='';
  localGame.pendingAvatar='🎭';
  document.querySelectorAll('.local-avatar-btn').forEach(b=>b.classList.remove('active'));
  const firstBtn=document.querySelector('.local-avatar-btn');
  if(firstBtn){firstBtn.classList.add('active');}
  const preview=document.getElementById('local-avatar-preview');
  if(preview)preview.textContent='🎭';
  renderLocalPlayersList();
}

function removeLocalPlayer(index){
  localGame.players.splice(index,1);
  renderLocalPlayersList();
}

function renderLocalPlayersList(){
  const list=document.getElementById('local-players-list');
  const count=document.getElementById('local-players-count');
  if(!list)return;
  list.innerHTML=localGame.players.map((p,i)=>`
    <div class="local-player-row">
      <span style="font-size:22px">${p.avatar}</span>
      <span class="local-player-name">${escapeHtml(p.pseudo)}</span>
      <button class="btn-remove-player" onclick="removeLocalPlayer(${i})">✕</button>
    </div>`).join('');
  if(count)count.textContent=`(${localGame.players.length})`;
  const btn=document.getElementById('btn-start-local');
  if(btn)btn.disabled=localGame.players.length<2;
}

function changeLocalVideoCount(delta){
  localGame.videoCount=Math.max(1,Math.min(20,localGame.videoCount+delta));
  document.getElementById('local-video-count-display').textContent=localGame.videoCount;
}

function setLocalDiff(diff,btn){
  localGame.diff=diff;
  document.querySelectorAll('#local-diff-filters .filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}

function startLocalGame(){
  if(localGame.players.length<2){showToast('Il faut au moins 2 joueurs !');return;}
  let pool=localGame.diff==='tous'?VIDEOS:VIDEOS.filter(v=>getDifficulty(durationCache[v.id])===localGame.diff);
  if(!pool.length)pool=VIDEOS;
  const shuffled=[...pool].sort(()=>Math.random()-0.5);
  const picked=shuffled.slice(0,Math.min(localGame.videoCount,shuffled.length));
  localGame.videoIds=picked.map(v=>v.id);
  localGame.active=true;
  localGame.currentRound=0;
  localGame.players.forEach(p=>p.score=0);
  startLocalRound();
}

function startLocalRound(){
  localGame.performances=[];
  localGame.currentPlayerIndex=0;
  const player=localGame.players[0];
  showLocalHandoff(
    player,'C\'est ton tour !',
    'Prends l\'appareil et prépare-toi à imiter !',
    'Je suis prêt ! 🎤',
    ()=>loadLocalGameScreen()
  );
}

function loadLocalGameScreen(){
  const videoId=localGame.videoIds[localGame.currentRound];
  const video=VIDEOS.find(v=>v.id===videoId);
  if(!video){showToast('Vidéo introuvable 😕');return;}
  state.currentVideo=video;
  state.isMulti=false;
  state.isRandom=false;
  stopEverything();
  loadGameScreen();
}

function submitLocalPerformance(){
  if(!state.audioBlob){showToast('Enregistre d\'abord ton imitation !');return;}
  const player=localGame.players[localGame.currentPlayerIndex];
  localGame.performances.push({
    playerIndex:localGame.currentPlayerIndex,
    pseudo:player.pseudo,
    avatar:player.avatar,
    audioURL:state.audioURL,
  });
  state.audioBlob=null;state.audioURL=null;
  localGame.currentPlayerIndex++;
  if(localGame.currentPlayerIndex>=localGame.players.length){
    startLocalVotePhase();
  } else {
    const nextPlayer=localGame.players[localGame.currentPlayerIndex];
    showLocalHandoff(
      nextPlayer,'C\'est ton tour !',
      'Prends l\'appareil et prépare-toi à imiter !',
      'Je suis prêt ! 🎤',
      ()=>loadLocalGameScreen()
    );
  }
}

// ── VOTE LOCAL ──
function startLocalVotePhase(){
  localGame.voteQueue=[...localGame.performances];
  localGame.voteQueueIndex=0;
  localGame.votes={};
  localGame.players.forEach((_,i)=>{localGame.votes[i]=0;});
  showLocalVote();
}

function showLocalVote(){
  if(localGame.voteQueueIndex>=localGame.voteQueue.length){
    applyLocalVotesToScores();
    showLocalRoundResults();
    return;
  }
  const perf=localGame.voteQueue[localGame.voteQueueIndex];
  localGame.currentPerf=perf;
  localGame.currentVoters=localGame.players.map((_,i)=>i).filter(i=>i!==perf.playerIndex);
  localGame.currentVoterStep=0;
  if(localGame.currentVoters.length===0){
    localGame.voteQueueIndex++;
    showLocalVote();
    return;
  }
  const firstVoterIdx=localGame.currentVoters[0];
  const firstVoter=localGame.players[firstVoterIdx];
  showLocalHandoff(
    firstVoter,'C\'est ton tour de voter !',
    `Vote pour la performance de ${escapeHtml(perf.pseudo)}`,
    'Je suis prêt ! 🗳️',
    ()=>showLocalVoteScreen(perf)
  );
}

function showLocalVoteScreen(perf){
  const voterIdx=localGame.currentVoters[localGame.currentVoterStep];
  const voter=localGame.players[voterIdx];
  // Header
  document.getElementById('cvote-avatar').textContent=voter.avatar;
  document.getElementById('cvote-pseudo').textContent=voter.pseudo;
  document.getElementById('cvote-score').textContent=voter.score;
  document.getElementById('cvote-current').textContent=localGame.voteQueueIndex+1;
  document.getElementById('cvote-total').textContent=localGame.voteQueue.length;
  document.getElementById('cvote-round').textContent=localGame.currentRound+1;
  document.getElementById('cvote-player-info').innerHTML=`
    <span class="cvote-player-avatar">${perf.avatar}</span>
    <span class="cvote-player-name">${escapeHtml(perf.pseudo)}</span>`;
  // Video
  const videoId=localGame.videoIds[localGame.currentRound];
  const video=VIDEOS.find(v=>v.id===videoId);
  const cvVideo=document.getElementById('cvote-video');
  cvVideo.removeEventListener('timeupdate',updateCvoteProgress);
  cvVideo.pause();
  if(state.cvoteAudio){state.cvoteAudio.pause();state.cvoteAudio=null;}
  cvVideo.muted=true;
  if(video){cvVideo.src=video.url;cvVideo.load();}
  if(perf.audioURL){
    state.cvoteAudio=new Audio(perf.audioURL);
    state.cvoteAudio.preload='auto';
  }
  cvVideo.addEventListener('timeupdate',updateCvoteProgress);
  cvVideo.onended=()=>{
    document.getElementById('btn-cvote-playpause').textContent='▶';
    if(state.cvoteAudio)state.cvoteAudio.pause();
  };
  document.getElementById('btn-cvote-playpause').textContent='▶';
  document.getElementById('cvote-progress-fill').style.width='0%';
  document.getElementById('cvote-time').textContent='0:00 / 0:00';
  // Show vote buttons
  const voteButtons=document.getElementById('cvote-vote-buttons');
  voteButtons.style.opacity='1';voteButtons.style.pointerEvents='auto';
  document.getElementById('cvote-vote-section').classList.remove('hidden');
  document.getElementById('cvote-voted-waiting').classList.add('hidden');
  document.getElementById('cvote-being-rated').classList.add('hidden');
  document.getElementById('cvote-own-msg').classList.add('hidden');
  showScreen('screen-collective-vote');
}

function castLocalVote(points){
  const perf=localGame.currentPerf;
  localGame.votes[perf.playerIndex]=(localGame.votes[perf.playerIndex]||0)+VOTE_POINTS[points];
  // Show feedback
  const voteButtons=document.getElementById('cvote-vote-buttons');
  voteButtons.style.opacity='0.4';voteButtons.style.pointerEvents='none';
  const msgs={3:{emoji:'🏆',txt:'+30 pts'},1:{emoji:'😄',txt:'+10 pts'},0:{emoji:'😅',txt:'+0 pts'}};
  document.getElementById('cvote-voted-emoji').textContent=msgs[points].emoji;
  document.getElementById('cvote-voted-pts').textContent=msgs[points].txt;
  document.getElementById('cvote-vote-section').classList.add('hidden');
  document.getElementById('cvote-voted-waiting').classList.remove('hidden');
  setTimeout(()=>{
    localGame.currentVoterStep++;
    if(localGame.currentVoterStep>=localGame.currentVoters.length){
      localGame.voteQueueIndex++;
      showLocalVote();
    } else {
      const nextVoterIdx=localGame.currentVoters[localGame.currentVoterStep];
      const nextVoter=localGame.players[nextVoterIdx];
      showLocalHandoff(
        nextVoter,'C\'est ton tour de voter !',
        `Vote pour la performance de ${escapeHtml(perf.pseudo)}`,
        'Je suis prêt ! 🗳️',
        ()=>showLocalVoteScreen(perf)
      );
    }
  },900);
}

function applyLocalVotesToScores(){
  localGame.players.forEach((p,i)=>{p.score+=(localGame.votes[i]||0);});
}

function showLocalRoundResults(){
  const sorted=[...localGame.players].map((p,i)=>({...p,index:i})).sort((a,b)=>b.score-a.score);
  const medals=['🥇','🥈','🥉'];
  document.getElementById('round-results-num').textContent=localGame.currentRound+1;
  document.getElementById('round-results-list').innerHTML=sorted.map((p,i)=>`
    <div class="multi-result-row">
      <span class="mr-rank">${medals[i]||`#${i+1}`}</span>
      <span class="mr-avatar">${p.avatar}</span>
      <span class="mr-name">${escapeHtml(p.pseudo)}</span>
      <span class="mr-score">${p.score} pts</span>
    </div>`).join('');
  const hostCtrl=document.getElementById('round-results-host-controls');
  hostCtrl.classList.remove('hidden');
  if(localGame.currentRound+1<localGame.videoIds.length){
    hostCtrl.innerHTML='<button class="btn btn-primary" onclick="localNextRound()">➡️ Manche suivante</button>';
  } else {
    hostCtrl.innerHTML='<button class="btn btn-primary" onclick="showLocalFinalResults()">🏆 Résultats finaux</button>';
  }
  document.getElementById('round-results-guest-msg').classList.add('hidden');
  showScreen('screen-round-results');
}

function localNextRound(){
  localGame.currentRound++;
  startLocalRound();
}

function showLocalFinalResults(){
  const sorted=[...localGame.players].sort((a,b)=>b.score-a.score);
  const medals=['🥇','🥈','🥉'];
  document.getElementById('multi-result-list').innerHTML=sorted.map((p,i)=>`
    <div class="multi-result-row">
      <span class="mr-rank">${medals[i]||`#${i+1}`}</span>
      <span class="mr-avatar">${p.avatar}</span>
      <span class="mr-name">${escapeHtml(p.pseudo)}</span>
      <span class="mr-score">${p.score} pts</span>
    </div>`).join('');
  document.querySelector('#screen-multi-result .result-actions').innerHTML=`
    <button class="btn btn-primary" onclick="showLocalMulti()">🔄 Rejouer</button>
    <button class="btn btn-secondary" onclick="goHome()">🏠 Accueil</button>`;
  showScreen('screen-multi-result');
}

// ── HANDOFF ──
function showLocalHandoff(player,title,sub,btnLabel,callback){
  document.getElementById('local-handoff-avatar').textContent=player.avatar;
  document.getElementById('local-handoff-name').textContent=player.pseudo;
  document.getElementById('local-handoff-title').textContent=title;
  document.getElementById('local-handoff-sub').textContent=sub;
  document.getElementById('local-handoff-btn').textContent=btnLabel;
  localGame.handoffCallback=callback;
  showScreen('screen-local-handoff');
}

function localHandoffReady(){
  if(localGame.handoffCallback)localGame.handoffCallback();
}

function confirmLeaveLocal(){
  stopEverything();
  if(state.cvoteAudio){state.cvoteAudio.pause();state.cvoteAudio=null;}
  const cvVideo=document.getElementById('cvote-video');
  if(cvVideo)cvVideo.pause();
  const keepPlayers=localGame.players.map(p=>({pseudo:p.pseudo,avatar:p.avatar,score:0}));
  const keepVideoCount=localGame.videoCount;
  const keepDiff=localGame.diff;
  localGame={
    active:false,players:keepPlayers,videoIds:[],videoCount:keepVideoCount,diff:keepDiff,
    currentRound:0,performances:[],currentPlayerIndex:0,
    voteQueue:[],voteQueueIndex:0,currentVoters:[],currentVoterStep:0,
    currentPerf:null,votes:{},handoffCallback:null,pendingAvatar:'🎭'
  };
  renderLocalPlayersList();
  document.getElementById('local-video-count-display').textContent=localGame.videoCount;
  showScreen('screen-local-setup');
}

// ═══════════════════════════════════════════════════════
// TITRES VIDÉOS ÉDITABLES
// ═══════════════════════════════════════════════════════

function loadVideoTitles(){
  const saved=JSON.parse(localStorage.getItem('imitgame_video_titles')||'{}');
  VIDEOS.forEach(v=>{if(saved[v.id])v.title=saved[v.id];});
}

function goAdmin(){
  document.getElementById('admin-login-section').classList.remove('hidden');
  document.getElementById('admin-panel-section').classList.add('hidden');
  document.getElementById('admin-password').value='';
  document.getElementById('admin-error').classList.add('hidden');
  showScreen('screen-admin');
}

function checkAdminPassword(){
  if(document.getElementById('admin-password').value==='imitgame2024'){
    document.getElementById('admin-login-section').classList.add('hidden');
    buildAdminPanel();
    document.getElementById('admin-panel-section').classList.remove('hidden');
  } else {
    document.getElementById('admin-error').classList.remove('hidden');
  }
}

function buildAdminPanel(){buildAdminVideoList();}

function buildAdminVideoList(){
  const grid=document.getElementById('admin-video-list');
  grid.innerHTML='';
  VIDEOS.forEach(video=>{
    const card=document.createElement('div');
    card.className='admin-video-card';
    card.innerHTML=`
      <div class="admin-thumb-wrap">
        <div class="admin-thumb-loading" id="adm-tl-${video.id}"><div class="thumb-spinner"></div></div>
        <img id="adm-ti-${video.id}" class="admin-thumb-img" style="display:none" />
        <button class="admin-play-btn" onclick="adminPlayVideo('${video.url}')">▶</button>
      </div>
      <input class="admin-title-input" id="adm-inp-${video.id}"
        type="text" value="${escapeHtml(video.title)}" placeholder="Titre..." maxlength="60" />`;
    grid.appendChild(card);
    generateThumbnail(video).then(dataURL=>{
      document.getElementById('adm-tl-'+video.id)?.remove();
      const img=document.getElementById('adm-ti-'+video.id);
      if(img&&dataURL){img.src=dataURL;img.style.display='block';}
    });
  });
}

function adminPlayVideo(url){
  const player=document.getElementById('admin-video-player');
  player.src=url;
  player.style.display='block';
  player.play();
  player.scrollIntoView({behavior:'smooth',block:'center'});
}

function saveAdminTitles(){
  const saved={};
  VIDEOS.forEach(v=>{
    const inp=document.getElementById('adm-inp-'+v.id);
    if(inp){saved[v.id]=inp.value.trim()||v.title;v.title=saved[v.id];}
  });
  localStorage.setItem('imitgame_video_titles',JSON.stringify(saved));
  showToast('Titres sauvegardés ! ✅');
}

function saveVideoTitles(){saveAdminTitles();}

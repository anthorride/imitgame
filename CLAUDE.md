# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the project

No build step. All code is static HTML/CSS/JS.

**Local dev:** Open `imitgame/` in VS Code and use the **Live Server** extension (right-click `index.html` → "Open with Live Server"). The microphone API requires a local server or HTTPS — opening `index.html` directly will not work.

**Deploy:** Vercel static hosting. Framework preset: "Other". No root directory config needed.

## Architecture

The entire app lives in three files inside `imitgame/`:
- `index.html` — all 10 screens pre-rendered in the DOM, toggled via `.active` class
- `style.css` — all styles; CSS variables in `:root` control the color palette
- `script.js` — all game logic (~1000 lines, no modules or bundler)

### Screen navigation

`showScreen(id)` switches the visible screen by removing `.active` from all `.screen` elements and adding it to the target. Screens (in DOM order):
1. `screen-home` — home/leaderboard
2. `screen-profile` — avatar + pseudo picker
3. `screen-prep` — solo video selection (choose or random)
4. `screen-lobby` — multiplayer entry (create/join)
5. `screen-waiting` — waiting room with salon code
6. `screen-game` — recording screen (phases: preview → ready → recording → playback → waiting-others)
7. `screen-collective-vote` — multiplayer vote screen
8. `screen-multi-result` — final multiplayer results
9. `screen-vote` — solo self-vote
10. `screen-result` — solo result

### Global state

Single `state` object holds everything: player profile, recording state, multiplayer salon/player IDs, round tracking, and audio refs. Profile is persisted to `localStorage` (`imitgame_pseudo`, `imitgame_avatar`, `imitgame_score`). The local leaderboard is `imitgame_lb` (top 10 JSON array).

### Recording flow

`startRecording()` requests mic via `MediaRecorder`, runs a 3-2-1 countdown overlay, then plays the video (muted) while recording audio. On video end → `finishRecording()` → blob stored in `state.audioBlob` / `state.audioURL`.

### Multiplayer flow (Supabase)

Backend: Supabase project at `uhsnnoclavjvdmpatkji.supabase.co`.

**Tables:**
- `salons` — salon state: `code`, `host_name`, `status` (`waiting`→`playing`→`next_round`→`voting`→`finished`), `video_ids` (JSON array), `current_round`, `current_vote_index`
- `players` — per salon: `pseudo`, `avatar`, `is_host`, `has_played`, `score`
- `performances` — per player per round: `audio_url` (public URL from Storage)
- `votes` — `voter_id`, `target_id`, `points` (0/1/3 = Nul/Moyen/Excellent)
- Storage bucket `audio-performances` — uploaded audio blobs

**Realtime:** `subscribeToSalon()` sets up both a Supabase Realtime channel (postgres_changes on `salons` and `players`) and a 2-second polling fallback interval. All state transitions funnel through `checkAndProgress(salon, players)`.

**Turn order:** Players play sequentially (ordered by `created_at`). `checkAndProgress` finds the first player with `has_played=false` and routes them to the game screen. When all have played, host advances salon to `voting`.

**Collective vote:** `loadCollectiveVoteScreen()` fetches performances, filters out the current player's own, and queues them in `state.voteQueue`. Each vote auto-advances after 1.5s. `advanceRound()` is called by the host after all votes, either starting next round or setting status to `finished`.

### Video library

`VIDEOS` array in `script.js` (22 Cloudinary-hosted MP4s). Each entry: `{ id, title, url }`. Difficulty is computed at runtime from video duration via `getDifficulty(seconds)`: ≤10s = facile, ≤20s = moyen, >20s = hard. Thumbnails and durations are lazy-loaded and cached in `thumbCache` / `durationCache`.

### Adding videos

Add an entry to the `VIDEOS` array:
```js
{ id: "v23", title: "Mon titre", url: "https://..." }
```
Difficulty is auto-computed from duration — no field needed.

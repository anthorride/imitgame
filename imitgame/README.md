# 🎭 ImitGame — Guide complet débutant

## Qu'est-ce que tu as téléchargé ?

3 fichiers qui forment ton site :

| Fichier | Rôle |
|---------|------|
| `index.html` | La structure du site (les écrans, les boutons) |
| `style.css`  | Le design (couleurs, polices, animations) |
| `script.js`  | La logique du jeu (enregistrement, vote, score) |

---

## 📁 ÉTAPE 1 — Organiser les fichiers

Crée un dossier sur ton ordinateur, par exemple :

```
C:\Users\TonNom\Documents\imitgame\
```

Place les 3 fichiers dedans :
```
imitgame/
├── index.html
├── style.css
├── script.js
└── videos/          ← tu créeras ce dossier pour tes vidéos
```

---

## 🌐 ÉTAPE 2 — Tester sur ton ordinateur

1. Ouvre VS Code
2. Fais : Fichier → Ouvrir le dossier → sélectionne `imitgame`
3. Installe l'extension **"Live Server"** dans VS Code :
   - Clique sur l'icône Extensions (carré à gauche)
   - Cherche "Live Server"
   - Installe celle de Ritwick Dey
4. Fais un clic droit sur `index.html` → **"Open with Live Server"**
5. Le site s'ouvre dans ton navigateur sur `http://127.0.0.1:5500`

⚠️ Le micro ne fonctionne qu'avec un serveur local (Live Server) ou HTTPS.
   Ne double-clique pas directement sur index.html, utilise Live Server.

---

## 🎬 ÉTAPE 3 — Ajouter tes propres vidéos

### Option A : Vidéos locales
1. Crée un dossier `videos/` dans ton projet
2. Mets tes vidéos MP4 dedans, par exemple : `videos/video1.mp4`
3. Dans `script.js`, trouve le tableau `VIDEOS` au début
4. Modifie les lignes `url:` :
   ```js
   url: "videos/video1.mp4",
   ```

### Option B : Vidéos en ligne (YouTube/Cloudinary)
Pour YouTube, il faut utiliser l'API YouTube (plus complexe).
Pour l'instant, utilise des fichiers MP4 directs.

### Ajouter une nouvelle vidéo dans le jeu
Dans `script.js`, dans le tableau `VIDEOS`, copie-colle un bloc :
```js
{
  id: "v4",              // un id unique
  title: "Mon titre",    // affiché sur la carte
  emoji: "😂",           // emoji affiché sur la miniature
  description: "Ma description",
  difficulty: "facile",  // "facile", "moyen" ou "hard"
  url: "videos/mavideo.mp4",
  duration: "15s"
}
```

---

## 🎤 Comment fonctionne l'enregistrement ?

Le navigateur utilise une API intégrée appelée `MediaRecorder`.
Pas besoin d'installer quoi que ce soit !

Quand tu cliques "Commencer l'imitation" :
1. Le navigateur demande accès au micro
2. Un compte à rebours 3-2-1 s'affiche
3. La vidéo démarre (sans son) en même temps que l'enregistrement
4. Quand la vidéo se termine → l'enregistrement s'arrête automatiquement
5. Tu peux réécouter : la vidéo joue pendant que ta voix enregistrée se joue en même temps

---

## 🚀 ÉTAPE 4 — Mettre en ligne sur Vercel

### Prérequis
- Tu as un compte GitHub ✅
- Tu as un compte Vercel ✅

### Étapes

**1. Ouvre un terminal dans VS Code**
   Menu Terminal → Nouveau Terminal

**2. Initialise Git**
```bash
git init
git add .
git commit -m "premier commit ImitGame"
```

**3. Crée un dépôt sur GitHub**
- Va sur github.com → New repository
- Nom : `imitgame`
- Public, sans README
- Clique "Create repository"

**4. Connecte ton projet à GitHub**
GitHub t'affiche des commandes, copie-colle :
```bash
git remote add origin https://github.com/TON_USERNAME/imitgame.git
git branch -M main
git push -u origin main
```

**5. Déploie sur Vercel**
- Va sur vercel.com → Add New → Project
- Sélectionne ton repo `imitgame`
- Framework Preset → **"Other"** (pas Next.js !)
- Root Directory → laisser vide
- Clique Deploy

**6. C'est en ligne !**
Vercel te donne une URL comme : `https://imitgame-xyz.vercel.app`

---

## 📊 Fonctionnalités actuelles (Version 1)

✅ Page d'accueil avec logo animé
✅ Saisie du pseudo
✅ Grille de vidéos à choisir
✅ Lecture vidéo sans son
✅ Compte à rebours 3-2-1
✅ Enregistrement micro synchronisé
✅ Visualiseur audio animé
✅ Réécoute de l'imitation synchronisée avec la vidéo
✅ Système de vote (Excellent / Moyen / Nul)
✅ Attribution de points
✅ Score sauvegardé localement
✅ Classement des meilleurs joueurs
✅ Rejouer la même vidéo

---

## 🔜 Version 2 — Multijoueur avec Supabase

La version multijoueur nécessite une base de données en temps réel.
C'est là que Supabase entre en jeu !

Les fonctionnalités prévues :
- Créer/rejoindre un salon avec un code
- Voir les autres joueurs en direct
- Chacun joue à son tour
- Vote collectif
- Classement partagé en ligne

On développera ça ensemble dans l'étape suivante !

---

## ❓ Problèmes courants

| Problème | Solution |
|----------|---------|
| Le micro ne fonctionne pas | Utilise Live Server, pas le double-clic |
| La vidéo ne charge pas | Vérifie que le chemin URL dans script.js est correct |
| Le site est blanc | Ouvre la console (F12) et lis les erreurs en rouge |
| L'audio ne se joue pas | Clique d'abord sur la page (règle de sécurité des navigateurs) |

---

## 🎨 Personnaliser le design

Tout le design est dans `style.css`.
Les couleurs principales sont au début dans `:root` :

```css
--yellow: #FFE135;   ← couleur principale
--orange: #FF6B35;   ← couleur accent
--purple: #6C2BD9;   ← boutons secondaires
--dark:   #0D0D1A;   ← fond
```

Change ces valeurs pour modifier tout le site d'un coup !

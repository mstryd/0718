# When coding is your love language~ 💚

A small, hand-built corner of the internet for **Jay Ann** — a timeline of tiny web pages,
one for every milestone, each one a little piece of the story.

The front door is a single page of memory cards. Every card opens a page that was written,
designed, and obsessed over for someone specific.

> *Made with ❤️ for Jay Ann*

---

## 🗂 The timeline

The hub (`index.html`) lists every entry. The range at the top reads
**August 2026 → July 2027**, and the counter tracks how many entries exist.

| # | Entry | Date | Folder | Status |
|---|-------|------|--------|--------|
| 01 | Posting Your GF | Nov 13, 2026 | [`Posting_Your_GF/`](Posting_Your_GF/) | ✨ Built |
| 02 | National Girlfriend Day | Aug 1, 2027 | [`National_GF_Day/`](National_GF_Day/) | ⏳ Coming soon |
| 03 | 21st Birthday | Aug 12, 2026 | [`21st_Birthday/`](21st_Birthday/) | ✨ Built |
| 04 | 1st Monthsary | Aug 18, 2026 | [`1st_Monthsary/`](1st_Monthsary/) | ✨ Built |
| 05 | 2nd Monthsary | Sep 18, 2026 | [`2nd_Monthsary/`](2nd_Monthsary/) | ✨ Built |
| 06 | 3rd Monthsary | Oct 18, 2026 | [`3rd_Monthsary/`](3rd_Monthsary/) | ✨ Built |
| 07 | 4th Monthsary | Nov 18, 2026 | [`4th_Monthsary/`](4th_Monthsary/) | ✨ Built |
| 08 | 5th Monthsary | Dec 18, 2026 | [`5th_Monthsary/`](5th_Monthsary/) | ⏳ Coming soon |
| 09 | New Year 2027 | Jan 1, 2027 | [`New_Year_2026/`](New_Year_2026/) | ⏳ Coming soon |
| 10 | 6th Monthsary | Jan 18, 2027 | [`6th_Monthsary/`](6th_Monthsary/) | ⏳ Coming soon |
| 11 | 7th Monthsary | Feb 18, 2027 | [`7th_Monthsary/`](7th_Monthsary/) | ⏳ Coming soon |
| 12 | 8th Monthsary | Mar 18, 2027 | [`8th_Monthsary/`](8th_Monthsary/) | ⏳ Coming soon |
| 13 | 9th Monthsary | Apr 18, 2027 | [`9th_Monthsary/`](9th_Monthsary/) | ⏳ Coming soon |
| 14 | 10th Monthsary | May 18, 2027 | [`10th_Monthsary/`](10th_Monthsary/) | ⏳ Coming soon |
| 15 | 11th Monthsary | Jun 18, 2027 | [`11th_Monthsary/`](11th_Monthsary/) | ⏳ Coming soon |
| 16 | 1st Anniversary | Jul 18, 2027 | [`1st_Anniversary/`](1st_Anniversary/) | ⏳ Coming soon |

Plus one hidden gem that isn't a card of its own — the
[100 Reasons Why I Love You](100_Reasons/) heart, reachable from the album letter.

---

## ✨ Highlights

### The Album (`Posting_Your_GF/`)
The first entry, and the heart of the whole thing. An intro you have to click through,
background music, a photo gallery, and a love letter with a **live day counter** —
it knows how many days it has been since **July 18, 2026**, and it keeps counting.

The counter is anchored in [`Posting_Your_GF/dayCounter.js`](Posting_Your_GF/dayCounter.js).
Change `START_DATE` there and the whole letter follows.

### 100 Reasons (`100_Reasons/`)
A glowing heart made of a hundred reasons, each one a phrase placed inside the curve of a
heart by measuring the text and solving for the shape. A light sweep travels up through the
words, dust drifts in the background, and the reasons reshuffle themselves every 26 seconds.

| Key | Action |
|-----|--------|
| `v` | toggle portrait / landscape |
| `space` | pause / resume |
| `r` | reshuffle immediately |
| `h` | hide the title for a clean capture |

### The 4th Monthsary (`4th_Monthsary/`)
A shooting range on a black background. Click the gun, hit the target, and try not to
apologize to whoever is holding it. It plays a very dramatic gunshot.

### The 21st Birthday (`21st_Birthday/`)
A birthday film in four acts: draw a Cupid bow, strike a heart, and watch it bloom into a
tree of hearts. One canvas, vanilla JS + GSAP, no framework.

### Themes
Every page shares two themes — **Forest** and **Crimson** — driven by CSS custom properties
defined per `body[data-theme]`. The choice is remembered in `localStorage` under the
`crystel-theme` key, so it follows you from page to page.

---

## 🛠 Tech

Mostly **plain HTML, CSS and JavaScript**. No framework, no build step, no bundler —
open the HTML and it works.

The one exception is [`21st_Birthday/`](21st_Birthday/), which is a self-contained
Vite + GSAP app with its own `package.json`, because it animates hard enough to deserve it.

- **No build step** for the hub and the timeline pages — deploy the repo root as-is
- **ES modules** are used on a few pages, so serve over HTTP (`file://` will be blocked by CORS)
- **Responsive** down to small phones; safe-area insets are respected on iOS
- **`prefers-reduced-motion`** is respected wherever there's motion to reduce

---

## 📁 Structure

```
.
├── index.html              # the hub — memory cards, theme picker, timeline pills
├── styles.css              # hub styles
├── theme-picker.css        # the theme dropdown
├── theme-switcher.js       # persists the chosen theme
├── media/                  # shared assets (icons)
│
├── Posting_Your_GF/        # the album: letter, music, gallery, day counter
├── 100_Reasons/            # the heart animation
├── 21st_Birthday/          # Vite + GSAP birthday app
├── 1st_Monthsary/ … 11th_Monthsary/
├── National_GF_Day/        # ⏳ placeholder
├── New_Year_2026/          # ⏳ placeholder
├── 1st_Anniversary/        # ⏳ placeholder
│
└── api/                    # Vercel serverless functions (Supabase-backed boards)
```

Each entry folder holds its own `index.html`, `styles.css` and `main.js`, plus a `media/`
folder for anything it needs. Pages link back with
`<a href="../index.html">← Go back to selection</a>`.

---

## ▶️ Running it locally

Any static server works — the only requirement is **HTTP, not `file://`**:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then open <http://localhost:8000>.

For the birthday app:

```bash
cd 21st_Birthday
npm install
npm run dev
```

---

## 🚀 Deploying

### GitHub Pages
The repo root is the site root, so Pages can serve it as-is: **Settings → Pages → Deploy
from a branch → `/ (root)`**. The hub is already `index.html`, so the site root works
out of the box.

> ⚠️ GitHub Pages serves static files only — the `api/` functions **will not** work there.
> They're Vercel serverless functions and need a runtime that can execute TypeScript.

### Vercel
The repo root also deploys cleanly to Vercel, and `api/` is picked up automatically as
serverless functions. The functions need these environment variables:

| Variable | Purpose |
|----------|---------|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service-role key (server-side only) |
| `BOARD_PASSWORD` | Password guarding board writes/deletes |

They also import `@vercel/node` and `@supabase/supabase-js`, so the project needs a
`package.json` declaring them as dependencies.

---

## 📝 Notes for future me

- The timeline range is computed from the card dates. Cards that sit outside the
  monthsary/anniversary arc carry `data-timeline="off"` and are skipped — that's how
  "National Girlfriend Day" doesn't push the range past July 2027.
- Adding an entry means: create the folder, add an `<a class="selection-item">` card to
  `index.html`, and give it a `<pre class="date">` in a readable format like
  `September 18, 2026`.
- The name in the album signature rotates through seven nicknames, 2 seconds apart.
- `5th_Monthsary` … `11th_Monthsary` and `1st_Anniversary` are placeholders — the
  timeline runs out on **July 18, 2027**.

---

## 💌 Credits

Written, designed, and built by **Dave** ([GitHub](https://github.com/Vichima)) for
**Jay Ann**.

Every photo, word, and animation in here was made for one person.

---

## 📄 License

Personal project. All photos, letters, and artwork belong to their author.
Feel free to look, but please don't reuse them elsewhere. 💚

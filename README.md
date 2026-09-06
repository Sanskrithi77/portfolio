# Portfolio

Single-page portfolio. Plain HTML/CSS/JS, no build step.

## Before publishing

In `index.html`, replace inside the `#contact` section:
- `your.email@example.com` → your real email
- `linkedin.com/in/your-handle` → your LinkedIn URL
- `github.com/your-handle` → your GitHub URL

## Deploy on GitHub Pages (free)

1. Create a new GitHub repo, e.g. `portfolio`.
2. Push these three files (`index.html`, `style.css`, `script.js`) to the repo root.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. Your site goes live at `https://<your-username>.github.io/portfolio/` within a minute or two.

## Notes

- The featured-project iframe loads your live Streamlit app directly — no rebuild needed if you update that app.
- If the iframe ever looks blank (Streamlit occasionally blocks embedding), the "Open full app" button still works.

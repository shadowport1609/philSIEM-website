# PhilSIEM v3 | Complete static portfolio

A standalone, GitHub Pages-compatible cybersecurity portfolio built from the supplied existing site. No build step, package manager, API key or backend required.

## Pages
- `index.html` - updated homepage and linked project cards
- `philsiem-v2.html` - **proposed** architecture and original image
- `opencanary-lab.html` - practical OpenCanary project
- `investigations.html` - case study index
- `soc-investigation-003.html` - synthetic SSH failures
- `soc-investigation-004.html` - synthetic outbound connections
- `soc-investigation-005.html` - synthetic phishing triage
- `soc-lab.html` - offline interactive triage with local TXT report export
- `about.html`, `privacy.html`, `404.html`
- `assets/` - CSS, JS, favicon, original architecture PNG
- `CNAME`, `robots.txt`, `sitemap.xml`

## Deploy to the EXISTING GitHub Pages site
1. Keep a copy of your existing repository ZIP as backup.
2. Unzip this package. Open the inner `PhilSIEM_v3_Complete_Website` folder.
3. In your GitHub `philSIEM-website` repository on `main`, select **Add file → Upload files**.
4. Upload **the files and `assets` folder inside this folder**, not the enclosing folder or ZIP itself. GitHub must show `index.html` at the repository root.
5. Let GitHub replace files with matching names, and commit to `main`.
6. Wait for **Actions → pages build and deployment** to show a green check.
7. Check `https://philsiem.com`, `https://philsiem.com/soc-lab.html`, and the case-study links.

**Preserve the `CNAME` file.** This package contains the original `philsiem.com` CNAME. Do not change Namecheap DNS, GitHub Pages settings or HTTPS.

## Test offline
Double-click `index.html` to preview static pages, or run `python3 -m http.server 8768` from the extracted folder and visit `http://127.0.0.1:8768`. The SOC lab works without internet. The GitHub external link requires internet.

## Security and accuracy
- Proposed Security Onion/Cowrie/Zeek/Suricata architecture is **not deployed**.
- SOC investigations are synthetic, not real breaches.
- The homepage dashboard is demonstration data, not a live SIEM.
- No private IPs, tokens or real logs are intentionally included.
- No analytics, tracking scripts, external fonts or external JavaScript libraries.
- The SOC report is generated locally in the browser and is not transmitted.
- Review all public claims and evidence before using this portfolio for job applications.

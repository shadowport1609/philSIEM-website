# PhilSIEM v4 | LinkedIn-ready cybersecurity portfolio

A static, GitHub Pages-compatible cybersecurity portfolio built from the user-supplied PhilSIEM v3 site. Preserves the existing branding, projects, CNAME and original architecture diagram. No hosting migration or build tools needed.

## Features
- Homepage, About, Skills, OpenCanary practical lab, proposed architecture, three documented synthetic SOC case studies.
- Seven browser-based **fictional** SOC training scenarios: SSH failures, successful SSH session after failures, authorised test, phishing, outbound anomaly, privilege escalation, unusual DNS.
- Evidence table, classification, severity, confidence, free-text analysis, educational 100-point rubric and coaching.
- Local TXT and JSON investigation exports.
- Optional browser-local history with clear/delete control. Storage is localStorage, not a server or cloud service.
- Dedicated `portfolio.html` page for public-sharing checks and LinkedIn description.
- Responsive styling, accessible form labels, metadata, sitemap, privacy disclosure, custom 404 page.

## Deploy to the EXISTING philsiem.com GitHub Pages site
1. Download a backup ZIP of the current GitHub repository first.
2. Unzip the v4 archive, open the extracted folder, and upload **all files and the assets folder inside it** to the ROOT of the existing `philSIEM-website` repository (main branch). Do not upload the enclosing folder or ZIP.
3. GitHub replaces files with matching names. Commit changes. Keep `CNAME` (philsiem.com).
4. Wait for the GitHub Pages Actions deployment to finish, then force-refresh Safari.
5. Test: `https://philsiem.com`, `/soc-lab.html`, `/portfolio.html`, `/philsiem-v2.html` and the OpenCanary/case-study links.
6. On the SOC lab, test scenario selection, feedback, TXT/JSON downloads, optional save and clear-history functions. Test on phone and desktop.

## Integrity / professional claims
- PhilSIEM v2 is a **proposed architecture**, not a deployed Security Onion stack.
- All SOC investigation scenarios and dashboard values are **simulated**, not live alerts or real incidents.
- The scoring is a transparent educational heuristic, not AI grading, an accredited exam or professional certification.
- No live honeypot connections, credentials, personal information or backend services are included.
- Review and approve all claims, project details, GitHub/contact links and any certificates before using for applications.
- No automated testing of the actual public deployment has been performed by this package. Browser verification is required after upload.

## Local preview
Open `index.html` or serve the folder using `python3 -m http.server 8768`. The training scenarios are embedded in JS, so they work without a server. Optional browser history requires storage permissions.

## Suggested LinkedIn Featured item
Title: **PhilSIEM | Cybersecurity Projects & SOC Training Portfolio**
URL: https://philsiem.com
Description: An independent cybersecurity learning portfolio featuring OpenCanary honeypot lab work, a proposed security monitoring architecture, documented simulated SOC investigations and an interactive analyst training lab.

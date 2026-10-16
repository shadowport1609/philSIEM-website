'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());


// PhilSIEM v3: synthetic training lab. All data remains in the browser.
(() => {
  const scenario = document.getElementById('scenario');
  if (!scenario) return;
  const datasets = {
    ssh: { source: '203.0.113.42', status: 'Needs review', events: [
      ['14:02:11','Failed password for invalid user admin','FAILED'],
      ['14:02:18','Failed password for root','FAILED'],
      ['14:02:24','Failed password for invalid user ubuntu','FAILED'],
      ['14:03:04','Threshold alert: 3 failed logins within 60 seconds','ALERT']
    ]},
    success: { source: '198.51.100.23', status: 'Escalate for context', events: [
      ['10:05:01','Failed password for admin','FAILED'],
      ['10:05:11','Failed password for admin','FAILED'],
      ['10:05:29','Accepted password for admin','SUCCESS'],
      ['10:05:40','New SSH session started','SESSION']
    ]},
    benign: { source: '192.0.2.55', status: 'Verify authorisation', events: [
      ['08:00:00','Scheduled authorised lab test begins','INFO'],
      ['08:00:03','Failed password for testuser','FAILED'],
      ['08:00:07','Failed password for testuser','FAILED'],
      ['08:00:12','Change record: controlled authentication test','CONTEXT']
    ]}
  };
  const $ = id => document.getElementById(id);
  let latestReport = '';
  function render() {
    const d = datasets[scenario.value];
    $('event-count').textContent = String(d.events.length);
    $('source-address').textContent = d.source;
    $('scenario-status').textContent = d.status;
    const tbody = $('lab-events');
    tbody.replaceChildren();
    for (const [time, event, outcome] of d.events) {
      const row = document.createElement('tr');
      for (const value of [time,event,outcome]) {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
    $('lab-feedback').textContent = 'Review the synthetic evidence and record your assessment.';
    $('report-preview').classList.add('v3-hidden');
    $('download-report').classList.add('v3-hidden');
    latestReport = '';
  }
  function report() {
    const d = datasets[scenario.value];
    const classification = $('classification').value;
    const severity = $('severity').value;
    const confidence = $('confidence').value;
    const observations = $('observations').value.trim() || '[Not provided]';
    const steps = $('next-steps').value.trim() || '[Not provided]';
    latestReport = [
      'PHILSIEM | SYNTHETIC SOC TRAINING REPORT',
      'THIS IS A FICTIONAL TRAINING EXERCISE, NOT A REAL INCIDENT',
      'Scenario: '+scenario.options[scenario.selectedIndex].text,
      'Source (documentation-only): '+d.source,
      'Classification: '+classification,
      'Severity: '+severity,
      'Confidence: '+confidence,
      '', 'EVENT TIMELINE',
      ...d.events.map(e => e.join(' | ')),
      '', 'OBSERVATIONS', observations,
      '', 'RECOMMENDED NEXT STEPS', steps,
      '', 'LIMITATIONS',
      'Synthetic and incomplete sample. No real network, account, or device was examined.'
    ].join('\n');
    $('report-preview').textContent = latestReport;
    $('report-preview').classList.remove('v3-hidden');
    $('download-report').classList.remove('v3-hidden');
    let hint = 'Report generated locally. Check that your classification is supported by the sample.';
    if (scenario.value === 'ssh' && classification === 'Possible account compromise') hint = 'Consider revising: this sample shows failures but no successful authentication.';
    if (scenario.value === 'success') hint = 'A successful login appears in the sample. Verify whether it was authorised before concluding compromise.';
    if (scenario.value === 'benign') hint = 'A change record suggests a controlled test. Verify that authorisation before closing the case.';
    $('lab-feedback').textContent = hint;
  }
  scenario.addEventListener('change', render);
  $('generate-report').addEventListener('click', report);
  $('reset-lab').addEventListener('click', () => {
    $('classification').selectedIndex = 0;
    $('severity').value = 'Medium';
    $('confidence').value = 'Medium';
    $('observations').value = '';
    $('next-steps').value = '';
    render();
  });
  $('download-report').addEventListener('click', () => {
    if (!latestReport) return;
    const blob = new Blob([latestReport], {type:'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PhilSIEM_Simulated_SOC_Report.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  render();
})();

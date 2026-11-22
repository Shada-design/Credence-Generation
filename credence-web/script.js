/* ============ DATA KONTEN (ubah di sini) ============ */
/* Data konten — ubah di sini tanpa menyentuh logika (app.js).
   Foto galeri : assets/galeri/<id>-1.jpg … <id>-8.jpg (jpg/jpeg/png/webp)
   Foto personil: assets/personalia/<nama-slug>.jpg  (contoh: sakhiy-barraq-nabil.jpg) */
const GALERI_JUMLAH = 8; // minimal 7 foto per kegiatan

const ACARA = [
 {id:'fathul-kutub', n:'Fathul Kutub wa Bahtsul Masail', d:'28 Okt – 2 Nov 2026', s:'2026-10-28', e:'2026-11-02',
  t:'Menggali hukum dari kitab kuning',
  desc:'Siswa akhir mencari, memahami, dan membahas masalah keagamaan berdasarkan dalil serta penjelasan para ulama dalam kitab-kitab kuning, lalu mempertanggungjawabkannya dalam forum bahtsul masail.',
  tj:['Mencari hukum, dalil, dan penjelasan suatu permasalahan','Memperdalam fikih, hadis, tafsir, dan akidah','Menyampaikan hasil kajian di hadapan pembimbing dan kelompok'],
  hasil:'Siswa mampu mencari, memahami, dan membahas permasalahan keagamaan dengan merujuk pada kitab-kitab kuning.',
  pj:['Ahsanul Muttaqien, M.Si.','Miftahul Uyun, Lc.','Anlika Adzra Nabila'],
  ag:['Pembekalan fikih, hadis, tauhid, tafsir','Fathul kutub per kelompok','Bahtsul masail malam hari']},
 {id:'ujian-tulis-1', n:'Ujian Tulis Gelombang 1', d:'4 – 10 Des 2026', s:'2026-12-04', e:'2026-12-10',
  t:'Evaluasi materi kelas 1–5',
  desc:'Ujian tertulis atas materi pelajaran KMI kelas 1 sampai 5 sebagai evaluasi penguasaan materi yang telah ditempuh.',
  tj:['Mengukur pemahaman materi kelas 1–5 KMI','Menjadi bahan evaluasi kemampuan akademik'],
  hasil:'Gambaran penguasaan akademik santri sebagai bekal ujian berikutnya.',
  pj:['Ahsanul Muttaqien, M.Si.','Miftahul Uyun, Lc.','Anlika Adzra Nabila'],
  ag:['Taujihad menjelang ujian','Ujian tulis enam hari']},
 {id:'khitobah-imamah', n:'Khitobah Imamah', d:'14 – 17 Feb 2027', s:'2027-02-14', e:'2027-02-17',
  t:'Imam, khatib, dan penghafal Al-Qur’an',
  desc:'Pembinaan dan pengukuran kemampuan siswa akhir dalam menjalankan peran sebagai imam, khatib, serta penghafal Al-Qur’an yang berilmu.',
  tj:['Memimpin salat berjamaah sesuai syariat','Menyusun dan menyampaikan khutbah secara sistematis','Membaca dan menghafal ayat dengan tartil sesuai tajwid'],
  hasil:'Siswa tidak hanya menguasai teori, tetapi mampu mengamalkannya di tengah masyarakat.',
  pj:['H. Kholid Ma’mun, Lc., M.A.','Elfriansyah','Mega Tri Cahyani'],
  ag:['Pembekalan','Praktik imamah','Praktik khitobah','Penyetoran hafalan']},
 {id:'taftis-kutub', n:'Taftis Kutub', d:'20 Feb 2027', s:'2027-02-20', e:'2027-02-20',
  t:'Menjaga sumber ilmu',
  desc:'Pengecekan kelengkapan buku pelajaran wajib selama pendidikan di PPMDI, sekaligus menumbuhkan tanggung jawab menjaga sumber ilmu.',
  tj:['Mengetahui tingkat kelengkapan buku wajib','Mengidentifikasi buku hilang, rusak, atau tertukar','Memastikan seluruh permasalahan buku terselesaikan'],
  hasil:'Siswa memiliki kelengkapan literatur dan menuntaskan tanggung jawab buku.',
  pj:['Miftahul Uyun, Lc.','Abhinaya Bayu Khoiruyasa','Azzahra Ramadhani Sukma'],
  ag:['Pengecekan buku tulis dan kitab 07.00–15.00']},
 {id:'amaliyah-tadris', n:'Amaliyah Tadris', d:'5 – 15 Apr 2027', s:'2027-04-05', e:'2027-04-15',
  t:'Praktik mengajar profesional',
  desc:'Praktik mengajar untuk membekali siswa akhir dengan penguasaan materi dan keterampilan mengajar yang profesional, kreatif, dan bertanggung jawab.',
  tj:['Menyusun I’dad Tadris sesuai ketentuan','Mengelola kelas dan mengevaluasi pembelajaran','Menerapkan metode yang tepat dan kreatif'],
  hasil:'Kemampuan nyata merencanakan, melaksanakan, dan mengevaluasi pembelajaran.',
  pj:['Drs. H. Fuad Nawawi, M.M.','Dr. Encep Ichlasul Rachmatullah, M.Pd.','Syamsul Hadi, M.Pd.','Anlika Adzra Nabila'],
  ag:['Pembekalan tiga hari','Ujian tarbiyah','Amaliyah & naqdu perdana','Amaliyah per kelompok']},
 {id:'ujian-lisan', n:'Ujian Lisan', d:'19 – 24 Apr 2027', s:'2027-04-19', e:'2027-04-24',
  t:'Menjelaskan dengan percaya diri',
  desc:'Ujian lisan untuk mengukur kemampuan santri memahami, menjelaskan, dan menjawab pertanyaan terkait materi yang telah dipelajari.',
  tj:['Mengukur pemahaman secara langsung','Menjawab pertanyaan dengan baik dan sistematis','Meningkatkan kepercayaan diri dan komunikasi'],
  hasil:'Santri mampu mengomunikasikan ilmunya secara runtut dan percaya diri.',
  pj:['Ahsanul Muttaqien, M.Si.','Miftahul Uyun, Lc.','Anlika Adzra Nabila'],
  ag:['Ujian lisan enam hari, 07.00–12.15']},
 {id:'ujian-tulis-2', n:'Ujian Tulis Gelombang 2', d:'26 Apr – 9 Mei 2027', s:'2027-04-26', e:'2027-05-09',
  t:'Evaluasi menyeluruh kelas 1–6',
  desc:'Evaluasi lanjutan atas keseluruhan materi KMI kelas 1 sampai 6 pada akhir masa pendidikan.',
  tj:['Mengukur penguasaan materi kelas 1–6','Mengevaluasi kesiapan akademik akhir','Menjadi bahan pertimbangan kelulusan'],
  hasil:'Ukuran kesiapan akademik santri untuk menuju yudisium.',
  pj:['Ahsanul Muttaqien, M.Si.','Miftahul Uyun, Lc.','Anlika Adzra Nabila'],
  ag:['Taujihad wal irsyadat','Ujian tulis 07.00–12.15']},
 {id:'rihlah', n:'Rihlah Iqtishadiyah', d:'12 – 13 Mei 2027', s:'2027-05-12', e:'2027-05-13',
  t:'Menjelajahi Ilmu, Membangun Masa Depan',
  desc:'Pembelajaran di luar lingkungan formal untuk memperluas wawasan, membangun karakter, dan menumbuhkan semangat inovasi serta kewirausahaan melalui kunjungan edukatif.',
  tj:['Mengenal teknologi, digitalisasi, dan budaya profesional','Memahami inovasi dan kewirausahaan berbasis teknologi','Mempelajari kemandirian ekonomi pesantren','Mempererat silaturahmi dan persaudaraan'],
  hasil:'Pola pikir visioner, inovatif, dan solutif; peserta memahami hubungan ilmu, teknologi, dan kemandirian ekonomi.',
  pj:['Dr. Encep Ichlasul Rachmatullah, M.Pd.','Anlika Adzra Nabila'],
  ag:['Telkom Corporate University','Bandung Techno Park','Ponpes Daarut Tauhiid','Masjid Raya Al-Jabbar & Jans Park']},
 {id:'yudisium', n:'Sidang & Yudisium Kelulusan', d:'16 Jun 2027', s:'2027-06-16', e:'2027-06-16',
  t:'Penetapan hasil akhir pendidikan',
  desc:'Penetapan dan pengumuman hasil kelulusan berdasarkan evaluasi akademik serta ketentuan pendidikan pesantren; tahap akhir sebelum Haflatu Takhrij.',
  tj:['Menetapkan hasil akhir pendidikan santri','Menjadi evaluasi akhir sebelum Haflatu Takhrij'],
  hasil:'Kelulusan siswa akhir KMI yang resmi ditetapkan.',
  pj:['Masluh Ardabili, S.Ag.','Ahsanul Muttaqien, M.Si.','Abhinaya Bayu Khoiruyasa'],
  ag:['Sidang kelulusan','Yudisium']},
 {id:'pembekalan', n:'Pembekalan & Penataran Pengabdian', d:'17 – 18 Jun 2027', s:'2027-06-17', e:'2027-06-18',
  t:'Siap menjalankan amanah',
  desc:'Mempersiapkan kader pendidik dan pengabdi yang ikhlas, berintegritas, berdisiplin, serta kompeten dalam melaksanakan amanah pengabdian satu tahun.',
  tj:['Memahami makna pengabdian sebagai pengamalan ilmu','Memiliki kesiapan mental, kesabaran, dan keikhlasan','Mampu berkoordinasi dan beradaptasi','Menyelesaikan masalah secara bijaksana'],
  hasil:'Siswa siap mendidik, membimbing, memimpin, dan bermanfaat bagi lingkungan pengabdian.',
  pj:['Masluh Ardabili, S.Ag.','Ahsanul Muttaqien, M.Si.','Abhinaya Bayu Khoiruyasa'],
  ag:['Pembekalan pagi','Penataran malam']},
 {id:'haflatu-takhrij', n:'Haflatu Takhrij', d:'20 Jun 2027', s:'2027-06-20', e:'2027-06-20',
  t:'Puncak: lahirnya alumni',
  desc:'Momentum apresiasi atas keberhasilan pendidikan siswa akhir KMI sekaligus titik awal lahirnya alumni yang berilmu, berakhlak mulia, mandiri, dan siap mengabdi.',
  tj:['Meresmikan kelulusan dan mengapresiasi perjuangan siswa','Memperkuat silaturahmi alumni, wali santri, guru, dan pesantren'],
  hasil:'Alumni KMI yang menjaga nilai kepesantrenan dan bermanfaat bagi agama, bangsa, dan masyarakat.',
  pj:['Elfriansyah','Anlika Adzra Nabila','Dr. Encep Ichlasul Rachmatullah, M.Pd.'],
  ag:['Sambutan ketua angkatan, wali santri, pimpinan','Pembacaan SK kelulusan','Penampilan santri akhir']}
];

const LINK_KEGIATAN = { // isi URL web tiap kegiatan di sini, mis. 'rihlah':'https://...'
 'fathul-kutub':'','ujian-tulis-1':'','khitobah-imamah':'','taftis-kutub':'','amaliyah-tadris':'','ujian-lisan':'',
 'ujian-tulis-2':'','rihlah':'','yudisium':'','pembekalan':'','haflatu-takhrij':''
};

const LAMBANG = [ // [judul, makna, file di assets/emblem/]
 ['Ring Dasar Silver','Kemurnian, keteguhan, dan integritas; elegan namun rendah hati.','ring.png'],
 ['Bumi','Wawasan global dalam bingkai nilai Islam, berdakwah dan berkiprah di segala bidang.','bumi.png'],
 ['Mahkota Lafadz Allah','Ketauhidan; memancarkan sifat-sifat Allah dalam akhlak insani.','mahkota.png'],
 ['Syahadat & Graduate 2027','Keteguhan iman dan harapan menjadi alumni yang husnul khatimah.','syahadat.png'],
 ['5 Permata','Rukun Islam yang ditaati, dijadikan landasan, dan diamalkan.','permata.png'],
 ['Al-Qur’an, Hadis & Pena','Melanjutkan tradisi keilmuan Islam dengan tulus dan ikhlas.','pena.png'],
 ['Kitab Terbuka & Lafadz Muhammad','Hidup berlandaskan syariat yang dibawa Nabi ﷺ melalui penjelasan ulama salih.','kitab.png'],
 ['Ikatan Kain Silver','Asas kukuh; Credence sebagai generasi perekat umat.','ikatan.png'],
 ['Bendera & Emblem DEI','Nilai-nilai pondok diamalkan di mana dan kapan pun.','bendera.png']
];

/* [kelompok, jabatan, nama]  kelompok: p=Pembimbing, i=Inti Angkatan, d=Divisi */
const PERSONIL = [
 ['p','Pembimbing','Dr. Encep Ichlasul Rachmatullah, M.Pd.'],['p','Pembimbing','Anlika Adzra Nabila'],
 ['i','Ketua','Sakhiy Barraq Nabil'],['i','Ketua','Anggun Kartika'],
 ['i','Sekretaris','Shada Hanin Diva'],['i','Sekretaris','Najla Agistin'],
 ['i','Bendahara','Khofy Aqila Pranaja'],['i','Bendahara','Siti Nur Inayah'],
 ['d','Dekorasi','Fauzan Syahril Ramdhani'],['d','Dekorasi','Miftah Faris'],['d','Dekorasi','Indi Rifahiyatul Kamala'],['d','Dekorasi','Desi Kurnia Sari Harahap'],
 ['d','Humas','Muhammad Raihan'],['d','Humas','Fadhil Rahmatullah Hadi'],['d','Humas','Ashita Shofina Rachman'],['d','Humas','Izy Risalah'],['d','Humas','Chelsea Lintang Alfajni'],
 ['d','Kegiatan & Acara','Abdullah Al Muchin'],['d','Kegiatan & Acara','Rifat Arasy Alfurqon'],['d','Kegiatan & Acara','Alif Daffa Apriyansyah'],['d','Kegiatan & Acara','Muhammad Raka Subarna'],['d','Kegiatan & Acara','Syafina Addina Fithri'],['d','Kegiatan & Acara','Azkiyatunnisa Aisy'],
 ['d','Konsumsi','Agni Safitri'],['d','Konsumsi','Latifatul Insaniyah']
];
const TAB_PERSONIL = [['all','Semua'],['p','Pembimbing'],['i','Inti Angkatan'],['d','Divisi']];
const WARNA_LED = [['Biru','#4C8DFF','#9CC2FF'],['Es','#9CC2FF','#EAF1FF'],['Indigo','#7C8CFF','#B8A8FF'],['Aqua','#4CC9FF','#9CF0FF']];

/* ============ LOGIKA TAMPILAN ============ */
/* Logika tampilan — konten ada di data.js */
const $ = (s, r = document) => r.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const slug = n => n.toLowerCase().replace(/,.*$/, '').replace(/\b(drs|dr|k\.h)\./g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const ini = n => n.replace(/^(drs|dr)\.\s*|k\.h\.\s*/gi, '').split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

/* LED: warna & lampu berjalan */
(function leds() {
  const box = $('#leds'), root = document.documentElement.style;
  const set = (i) => {
    const [, a, b] = WARNA_LED[i]; root.setProperty('--led', a); root.setProperty('--led2', b);
    [...box.children].forEach((x, k) => x.classList.toggle('on', k === i));
    try { localStorage.setItem('led', i); } catch (e) {}
  };
  WARNA_LED.forEach(([nm, c], i) => {
    const b = el('button'); b.style.setProperty('--c', c); b.title = 'LED ' + nm; b.setAttribute('aria-label', 'LED ' + nm);
    b.onclick = () => set(i); box.appendChild(b);
  });
  let s = 0; try { s = +localStorage.getItem('led') || 0; } catch (e) {}
  set(s);
  const bl = $('#bulbs'), n = Math.min(60, Math.floor(innerWidth / 26));
  for (let i = 0; i < n; i++) { const d = el('i'); d.style.animationDelay = (i * .13) + 's'; bl.appendChild(d); }
})();

/* Cahaya mengikuti kursor + kartu */
addEventListener('pointermove', e => {
  const g = $('#glow'); g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px';
  const c = e.target.closest && e.target.closest('.card');
  if (c) { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px'); }
});

/* Falsafah lambang */

/* Linimasa kegiatan */
const today = new Date(), at = (d, h) => new Date(d + 'T' + h);
const status = a => at(a.e, '23:59:59') < today ? 'done' : at(a.s, '00:00:00') <= today ? 'now' : '';
const nextIdx = ACARA.findIndex(a => status(a) !== 'done');
ACARA.forEach((a, i) => {
  const st = status(a), ev = el('div', 'ev rv ' + st);
  ev.innerHTML = `<span class="node"></span><div class="card"><span class="no">${String(i + 1).padStart(2, '0')}</span>
    <h3>${a.n}${st === 'now' ? '<span class="st">Berlangsung</span>' : i === nextIdx ? '<span class="st">Berikutnya</span>' : ''}</h3>
    <span class="dt">${a.d}</span><p class="tg">${a.t}</p></div>`;
  ev.onclick = () => openModal(a, i); $('#timeline').appendChild(ev);
});

/* Hitung mundur */
(function countdown() {
  const box = $('#count'), a = ACARA[nextIdx];
  if (!a) { box.innerHTML = '<p class="nx">Seluruh rangkaian kegiatan telah selesai. <b>Barakallah!</b></p>'; return; }
  const tick = () => {
    const d = at(a.s, '07:00:00') - new Date();
    if (d <= 0) { box.innerHTML = `<p class="nx">Sedang berlangsung: <b>${a.n}</b></p>`; return; }
    const v = [[864e5, 'Hari'], [36e5, 'Jam'], [6e4, 'Menit'], [1e3, 'Detik']];
    box.innerHTML = `<p class="nx">Menuju <b>${a.n}</b></p>` + v.map(([m, l]) => `<div><strong>${String(Math.floor(d / m) % (m === 864e5 ? 1e4 : m === 36e5 ? 24 : 60)).padStart(2, '0')}</strong><span>${l}</span></div>`).join('');
  };
  tick(); setInterval(tick, 1000);
})();

/* Modal + galeri */
const modal = $('#modal'), lb = $('#lb');
function gambar(base, alt, gagal, klik) {
  const ex = ['jpg', 'jpeg', 'png', 'webp'], im = new Image(); let k = 0; im.alt = alt;
  im.onerror = () => k < ex.length ? (im.src = `${base}.${ex[k++]}`) : im.replaceWith(gagal());
  if (klik) im.onclick = () => klik(im.src); im.onerror(); return im;
}
function openModal(a, i) {
  const gal = el('div', 'gal'), u = LINK_KEGIATAN[a.id];
  for (let n = 1; n <= GALERI_JUMLAH; n++) gal.appendChild(gambar(`assets/galeri/${a.id}-${n}`, `${a.n} — foto ${n}`,
    () => el('div', 'ph', `<span>Foto ${n}</span>`), src => { $('img', lb).src = src; $('p', lb).textContent = a.n; show(lb, 1); }));
  $('#m-body').innerHTML = `<span class="dt">KEGIATAN ${String(i + 1).padStart(2, '0')} · ${a.d}</span><h2 id="m-title">${a.n}</h2>
    <p class="tg">${a.t}</p><p style="margin-top:14px">${a.desc}</p>
    <h4>Tujuan &amp; Target</h4><ul>${a.tj.map(x => `<li>${x}</li>`).join('')}</ul>
    <h4>Inti Agenda</h4><div class="chips">${a.ag.map(x => `<span>${x}</span>`).join('')}</div>
    <h4>Hasil yang Diharapkan</h4><p>${a.hasil}</p>
    <h4>Penanggung Jawab</h4><div class="chips">${a.pj.map(x => `<span>${x}</span>`).join('')}</div>
    <h4>Web Kegiatan</h4>${u ? `<a class="btn sm" href="${u}" target="_blank" rel="noopener">Buka web ${a.n} ↗</a>` : '<p class="slot">Ruang link web kegiatan ini masih kosong. Isi di <code>LINK_KEGIATAN</code> pada script.js.</p>'}
    <h4>Galeri</h4>`;
  $('#m-body').appendChild(gal); show(modal, 1); $('.panel').scrollTop = 0;
}
function show(m, on) { m.classList.toggle('open', !!on); m.setAttribute('aria-hidden', !on); if (m === modal) document.body.style.overflow = on ? 'hidden' : ''; }
$('#m-close').onclick = () => show(modal, 0);
modal.onclick = e => { if (e.target === modal) show(modal, 0); };
lb.onclick = () => show(lb, 0);
addEventListener('keydown', e => { if (e.key === 'Escape') { show(lb, 0); show(modal, 0); } });

/* Personalia */
function renderPeople(k) {
  const box = $('#people'); box.innerHTML = '';
  PERSONIL.filter(p => k === 'all' || p[0] === k).forEach(([, role, nm], i) => {
    const c = el('div', 'pp rv'), ph = el('div', 'ph');
    ph.appendChild(gambar(`assets/personalia/${slug(nm)}`, nm, () => el('div', 'ini', ini(nm))));
    c.append(ph, el('h4', '', nm), el('small', '', role));
    c.style.transitionDelay = (i % 6) * 50 + 'ms'; box.appendChild(c); io.observe(c);
  });
}
TAB_PERSONIL.forEach(([k, l], i) => {
  const b = el('button', i ? '' : 'on', l);
  b.onclick = () => { [...$('#tabs').children].forEach(x => x.classList.remove('on')); b.classList.add('on'); renderPeople(k); };
  $('#tabs').appendChild(b);
});

/* Reveal saat scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
renderPeople('all');
document.querySelectorAll('.rv').forEach(x => io.observe(x));


/* ===== Tambahan: emblem geser, jadwal, loading, musik, bintang ===== */
LAMBANG.forEach(([t, d, f], i) => {
  const c = el('article', 'em', `<div class="eb"><img src="assets/emblem/${f}" alt="${t}"></div><h4>${t}</h4><p>${d}</p>`);
  c.firstChild.style.animationDelay = -i * .8 + 's'; $('#lambang').appendChild(c);
});
(function slider() {
  const tr = $('#lambang'), step = () => tr.firstElementChild.offsetWidth + 28; let t;
  const next = () => tr.scrollLeft + tr.clientWidth + 6 >= tr.scrollWidth ? tr.scrollTo({ left: 0, behavior: 'smooth' }) : tr.scrollBy({ left: step(), behavior: 'smooth' });
  const run = () => { clearInterval(t); t = setInterval(next, 3200); }; run();
  tr.onmouseenter = tr.ontouchstart = () => clearInterval(t); tr.onmouseleave = tr.ontouchend = run;
  $('#next').onclick = () => { next(); run(); }; $('#prev').onclick = () => { tr.scrollBy({ left: -step(), behavior: 'smooth' }); run(); };
})();

const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
(function jadwal() {
  const box = $('#jadwal-list'); let cur = '';
  ACARA.forEach((a, i) => {
    const s = new Date(a.s + 'T12:00:00'), e = new Date(a.e + 'T12:00:00'), key = BULAN[s.getMonth()] + ' ' + s.getFullYear();
    if (key !== cur) { cur = key; box.appendChild(el('h3', 'mo rv', key)); }
    const st = status(a), u = LINK_KEGIATAN[a.id], hari = Math.round((e - s) / 864e5) + 1, r = el('div', 'jr rv ' + st);
    r.innerHTML = `<div class="db"><b>${s.getDate()}</b><small>${BULAN[s.getMonth()].slice(0, 3)}</small></div>
      <div class="jt"><h4>${a.n}</h4><p>${a.d} · ${hari} hari · PJ: ${a.pj.slice(0, 2).join(', ')}${a.pj.length > 2 ? ' dkk.' : ''}</p></div>
      <span class="chip">${st === 'done' ? 'Selesai' : st === 'now' ? 'Berlangsung' : 'Akan datang'}</span>
      ${u ? `<a class="go" href="${u}" target="_blank" rel="noopener">Web ↗</a>` : '<span class="go off" title="Link belum diisi">Web segera</span>'}`;
    r.querySelector('.jt').onclick = () => openModal(a, i); box.appendChild(r);
  });
})();

document.querySelectorAll('#kegiatan~.sec, #falsafah~.sec').forEach((sec, i, all) => {
  const w = el('div', 'wave', '<svg viewBox="0 0 1200 40" preserveAspectRatio="none"><path d="M0 20C150 0 300 40 450 20S750 0 900 20 1100 40 1200 20"/></svg>');
  sec.before(w);
});

function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); setTimeout(() => t.classList.remove('on'), 5000); }

(function loader() {
  const L = $('#loader'); let ok = 0; document.body.style.overflow = 'hidden';
  const done = () => { if (ok++) return; L.classList.add('out'); document.body.style.overflow = ''; setTimeout(() => L.remove(), 900); toast('Ketuk di mana saja untuk memutar musik ♪'); };
  const go = () => setTimeout(done, Math.max(0, 3600 - performance.now()));   // minimal 3,6 dtk
  document.readyState === 'complete' ? go() : addEventListener('load', go);
  setTimeout(done, 5000);                                                    // maksimal 5 dtk
})();

/* Musik instrumental: berkas assets/musik.mp3 bila ada, jika tidak sintesis ambient lewat Web Audio */
const Musik = (() => {
  let ctx, master, timer, step = 0, next = 0, on = false, touched = false;
  const au = new Audio('assets/musik.mp3'); au.loop = true; au.volume = .5; let fileOK = true; au.onerror = () => fileOK = false;
  const P = [[50, 57, 62, 65], [46, 53, 58, 62], [53, 60, 65, 69], [48, 55, 60, 64]], hz = m => 440 * 2 ** ((m - 69) / 12), AR = [0, 1, 2, 3, 2, 1, 3, 2];
  const osc = (f, t, d, type, v, att) => {
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.value = f; o.connect(g); g.connect(master);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + att); g.gain.exponentialRampToValueAtTime(.0008, t + d); o.start(t); o.stop(t + d + .1);
  };
  const sched = () => { while (next < ctx.currentTime + 1) {
    const s = step % 64, c = P[Math.floor(s / 16)], i = s % 16;
    if (i === 0) { c.forEach(m => { osc(hz(m), next, 9, 'triangle', .05, 1.8); osc(hz(m) * 1.004, next, 9, 'sine', .04, 1.8); }); osc(hz(c[0] - 12), next, 6, 'sine', .22, .05); }
    if (i % 2 === 0) osc(hz(c[AR[(i / 2) % 8]] + 12), next, 1.8, 'triangle', .1, .01);
    next += .5; step++; } };
  const synth = () => {
    if (!ctx) { ctx = new (window.AudioContext || window.webkitAudioContext)(); master = ctx.createGain(); master.gain.value = 0;
      const lp = ctx.createBiquadFilter(); lp.frequency.value = 2200; const dl = ctx.createDelay(1), fb = ctx.createGain(); dl.delayTime.value = .45; fb.gain.value = .4;
      dl.connect(fb); fb.connect(dl); master.connect(lp); master.connect(dl); dl.connect(lp); lp.connect(ctx.destination); }
    ctx.resume(); next = ctx.currentTime + .1; master.gain.cancelScheduledValues(0); master.gain.setTargetAtTime(.6, ctx.currentTime, 1.2);
    clearInterval(timer); timer = setInterval(sched, 250);
  };
  const ui = () => $('#music').classList.toggle('on', on);
  return {
    start() { if (on) return; on = true; ui(); fileOK ? au.play().catch(synth) : synth(); },
    stop() { on = false; ui(); au.pause(); if (ctx) { master.gain.setTargetAtTime(0, ctx.currentTime, .3); setTimeout(() => { if (!on) { clearInterval(timer); ctx.suspend(); } }, 1500); } },
    toggle() { touched = true; on ? this.stop() : this.start(); }, get touched() { return touched; }
  };
})();
$('#music').onclick = () => Musik.toggle();
const awal = e => { if (e.target.closest && e.target.closest('#music')) return; removeEventListener('pointerdown', awal); removeEventListener('keydown', awal); if (!Musik.touched) Musik.start(); };
addEventListener('pointerdown', awal); addEventListener('keydown', awal);

(function bintang() {
  const c = $('#stars'), x = c.getContext('2d'); let w, h, S;
  const rs = () => { w = c.width = innerWidth; h = c.height = innerHeight; S = Array.from({ length: Math.min(150, w / 8) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.2 + .2, p: Math.random() * 6.3, v: .4 + Math.random() * 1.2 })); };
  rs(); addEventListener('resize', rs);
  const f = t => { x.clearRect(0, 0, w, h); x.fillStyle = '#CFE0FF'; S.forEach(s => { x.globalAlpha = .2 + .8 * Math.abs(Math.sin(t / 1000 * s.v + s.p)); x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.3); x.fill(); }); requestAnimationFrame(f); };
  requestAnimationFrame(f);
})();
document.querySelectorAll('.rv:not(.in)').forEach(x => io.observe(x));

const articlesData = {
    "1": {
        title: "Festival Pisang Kirana Senduro Sedot Ribuan Pengunjung",
        date: "12 Sep 2026",
        author: "Humas Lumajang",
        views: "1.205",
        image: "data:image/webp;base64,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", 
        content: "<p>Pemerintah Kabupaten Lumajang kembali sukses menyelenggarakan acara tahunan kebanggaan daerah bertajuk <em>Festival Pisang Kirana Senduro 2026</em>. Acara ini berhasil menyedot animo lebih dari 15.000 pengunjung.</p><p>Bupati Lumajang dalam pidato pembukaannya menyampaikan bahwa festival ini bukan sekadar perayaan panen raya, melainkan upaya strategis untuk memperkenalkan komoditas Pisang Kirana ke pasar internasional.</p>"
    },
    "2": {
        title: "Jembatan Gladak Perak Makin Ramai, Jalur Logistik Lumajang-Malang Lancar",
        date: "10 Sep 2026",
        author: "Dinas Perhubungan",
        views: "980",
        image: "https://images.genpi.co/resize/640x360-100/uploads/jatim/arsip/normal/2023/02/28/jembatan-gladak-perak-yang-berada-di-desa-sumberwuluh-kecam-7npo.webp", 
        content: "<p>Akses transportasi vital yang menghubungkan Kabupaten Lumajang dengan Kabupaten Malang melalui jalur selatan kini terpantau beroperasi dengan sangat maksimal. Jembatan Gladak Perak yang baru dibangun dengan struktur gantung baja ini telah menjadi urat nadi utama.</p><p>Pantauan dari Dinas Perhubungan menunjukkan adanya peningkatan volume kendaraan logistik niaga hingga 40% dibandingkan kuartal sebelumnya.</p>"
    },
    "3": {
        title: "Eksotisme Air Terjun Tumpak Sewu Siap Sambut Wisatawan Mancanegara",
        date: "08 Sep 2026",
        author: "Dinas Pariwisata",
        views: "1.450",
        image: "https://imgcdn.espos.id/@espos/images/2024/09/tumpak-sewu-lumajang-1.jpg", 
        content: "<p>Keindahan alam Kabupaten Lumajang tidak pernah berhenti memukau dunia. Dikenal dengan julukan <em>Niagara of Indonesia</em>, Air Terjun Tumpak Sewu kini tampil dengan wajah baru yang lebih rapi, aman, dan berstandar internasional.</p><p>Dinas Pariwisata baru saja merampungkan proyek revitalisasi fasilitas pendukung meliputi perbaikan jalur tracking, penambahan area istirahat, hingga posko medis.</p>"
    },
    "4": {
        title: "Bupati Resmikan Sentra UMKM Khas Daerah di Jantung Alun-Alun Lumajang",
        date: "05 Sep 2026",
        author: "Humas Lumajang",
        views: "720",
        image: "https://travelspromo.com/wp-content/uploads/2021/11/Air-Mancur-di-Alun-alun.-Foto-Gmap-Rachelania-Pramesti.jpg", 
        content: "<p>Langkah nyata Pemerintah Kabupaten Lumajang dalam mendongkrak ekonomi kerakyatan kembali dibuktikan melalui peresmian Griya UMKM Lumajang. Pusat oleh-oleh dan kerajinan khas daerah ini berlokasi sangat strategis di Alun-Alun kota.</p><p>Pengunjung akan dimanjakan dengan berbagai produk seperti kopi tubruk lereng Semeru, keripik pisang, madu murni, hingga kerajinan perak dan batik khas Lumajang.</p>"
    },
    "5": {
        title: "Tingkatkan Kesiapsiagaan, BPBD Lumajang Gelar Simulasi Evakuasi Semeru",
        date: "01 Sep 2026",
        author: "BPBD Lumajang",
        views: "610",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV1o21MxJUBzf6y7lW7rHOAqjNBpg26wOUW3WnLKArgg7qnWKfAG_dQVRWXSojm4Qlctr5afEcpoJ5h5Kk9r3kVk-1SuO4FNQhJNjLo2ao7A4Mg5vwI6C19GspCCV8hB-QmL2EueDZLG-a8O-zKce3Nbo_-8rtQIgiXt4zfV1Qx62e2AOH79neRyPOPc6L/s1280/1001257888.jpg", 
        content: "<p>Hidup berdampingan dengan salah satu gunung berapi paling aktif di Indonesia menuntut kewaspadaan tinggi. BPBD Kabupaten Lumajang bekerja sama dengan TNI, Polri, dan Basarnas menggelar simulasi evakuasi mandiri berskala besar di Pronojiwo.</p><p>Fokus utama dari simulasi tahun ini adalah pengujian <em>Early Warning System</em> (EWS) berbasis aplikasi seluler serta kecepatan respons aparat desa dalam membimbing warga menuju Titik Kumpul Aman.</p>"
    },
    "6": {
        title: "Ribuan Warga Terpukau oleh Atraksi Kolosal Jaran Kencak di Harjalu",
        date: "28 Agu 2026",
        author: "Dinas Kebudayaan",
        views: "890",
        image: "https://media.istockphoto.com/id/1428713262/id/foto/tari-jaran-kencak-atau-jaran-joget-merupakan-adat-dari-suku-tengger-desa-ngadas-bromo.jpg?s=612x612&w=is&k=20&c=ZM_CMKg6eXa2X8OYXeutcn-PzR6KqCC06UgtXp590yA=", 
        content: "<p>Peringatan Hari Jadi Lumajang (Harjalu) ke-771 mencapai puncaknya pada akhir pekan lalu. Sepanjang jalan protokol di pusat Kabupaten Lumajang disulap menjadi lautan manusia yang antusias menyaksikan pawai budaya terbesar tahun ini, dengan bintang utama <strong>Jaran Kencak</strong>.</p><p>Kesenian yang telah ditetapkan sebagai Warisan Budaya Takbenda (WBTb) Indonesia ini ditampilkan secara memukau oleh lebih dari 100 ekor kuda yang telah terlatih khusus menari mengikuti irama gamelan.</p>"
    }
};

document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const currentArticleId = urlParams.get('id');

    const gridContainer = document.getElementById("auto-grid-berita");
    if (gridContainer) {
        let gridHTML = "";
        for (let id in articlesData) {
            let article = articlesData[id];
            gridHTML += `
            <div class="col-md-4">
                <div class="card h-100 border shadow-sm rounded-4 overflow-hidden hover-card transition-all">
                    <img src="${article.image}" height="180" class="object-fit-cover w-100" alt="${article.title}">
                    <div class="card-body p-4 d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="fw-bold mb-2" style="font-size: 16px; color: #1a3622;">${article.title}</h5>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-4">
                            <small class="text-muted"><i class="far fa-calendar text-emas"></i> ${article.date}</small>
                            <a href="detail_berita.html?id=${id}" class="btn btn-dark btn-sm rounded-3 px-3 py-2 fw-bold" style="background-color: #121826;">Baca &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        gridContainer.innerHTML = gridHTML;
    }

    const sidebarContainer = document.getElementById("auto-sidebar-berita");
    if (sidebarContainer) {
        let sidebarHTML = "";
        let count = 0;
        for (let id in articlesData) {
            
            // LOGIKA PINTAR: Jika ID berita sama dengan yang sedang dibaca, lewati!
            if (id === currentArticleId) {
                continue; 
            }

            // Batasi hanya menampilkan 3 berita di sidebar
            if (count >= 3) break; 
            
            let article = articlesData[id];
            let shortTitle = article.title.length > 35 ? article.title.substring(0, 35) + "..." : article.title;
            
            sidebarHTML += `
            <a href="detail_berita.html?id=${id}" class="text-decoration-none">
                <div class="d-flex gap-3 mb-3 p-2 bg-light rounded-3 align-items-center hover-berita transition-all">
                    <img src="${article.image}" width="65" height="65" class="rounded object-fit-cover shadow-sm" alt="${article.title}">
                    <div>
                        <h6 class="fw-bold mb-1" style="font-size: 14px; color: #1a3622;">${shortTitle}</h6>
                        <small class="text-muted"><i class="far fa-calendar text-emas"></i> ${article.date}</small>
                    </div>
                </div>
            </a>`;
            count++;
        }
        sidebarContainer.innerHTML = sidebarHTML;
    }

    // ==========================================
    // 4. MENGISI HALAMAN BACA BERITA (detail_berita.html)
    // ==========================================
    const titleEl = document.getElementById('article-title');
    if (titleEl && currentArticleId && articlesData[currentArticleId]) {
        const article = articlesData[currentArticleId];
        
        titleEl.innerText = article.title;
        document.getElementById('article-date').innerHTML = `<i class="far fa-calendar text-emas me-1"></i> ${article.date}`;
        document.getElementById('article-author').innerHTML = `<i class="far fa-user text-emas me-1"></i> Oleh: ${article.author}`;
        document.getElementById('article-views').innerHTML = `<i class="far fa-eye text-emas me-1"></i> ${article.views} Dilihat`;
        
        const imgEl = document.getElementById('article-img');
        imgEl.src = article.image;
        imgEl.alt = article.title;
        imgEl.style.display = "block"; // Paksa gambar muncul
        
        document.getElementById('article-content').innerHTML = article.content;
        document.title = article.title + " - Kabupaten Lumajang";
    }

    // ==========================================
    // 5. TOMBOL SCROLL TO TOP & POP-UP
    // ==========================================
    const scrollTopBtn = document.getElementById("btn-scroll-top");
    if(scrollTopBtn) {
        scrollTopBtn.style.display = "none";
        scrollTopBtn.style.transition = "all 0.3s ease";
        window.addEventListener("scroll", function () {
            scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
        });
        scrollTopBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    function showCustomPopUp(message, iconClass, colorCode) {
        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.bottom = "-100px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = colorCode;
        popup.style.color = "#fff";
        popup.style.padding = "16px 32px";
        popup.style.borderRadius = "50px";
        popup.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
        popup.style.zIndex = "9999";
        popup.style.fontWeight = "bold";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.gap = "12px";
        popup.style.transition = "bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; 
        
        popup.innerHTML = `<i class="${iconClass} fs-5"></i> <span>${message}</span>`;
        document.body.appendChild(popup);

        setTimeout(() => popup.style.bottom = "40px", 100);
        setTimeout(() => {
            popup.style.bottom = "-100px";
            setTimeout(() => popup.remove(), 500); 
        }, 3500);
    }

    const shareButtons = document.querySelectorAll(".btn-outline-success, .btn-outline-primary, .btn-outline-info");
    shareButtons.forEach(button => {
        button.addEventListener("click", e => {
            e.preventDefault();
            showCustomPopUp("Tautan berhasil disalin ke clipboard!", "fas fa-check-circle", "#198754");
        });
    });

    const commentForms = document.querySelectorAll("form");
    commentForms.forEach(form => {
        form.addEventListener("submit", e => {
            e.preventDefault(); 
            const textarea = form.querySelector("textarea");
            if(textarea && textarea.value.trim() === "") {
                showCustomPopUp("Komentar tidak boleh kosong!", "fas fa-exclamation-triangle", "#dc3545");
            } else {
                showCustomPopUp("Komentar berhasil dikirim! Menunggu moderasi.", "fas fa-paper-plane", "#f59e0b");
                form.reset(); 
            }
        });
    });

});
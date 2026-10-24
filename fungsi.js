
document.addEventListener("DOMContentLoaded", function () {
    // Tahun otomatis pada footer
    const tahunSekarang = document.getElementById("tahunSekarang");

    if (tahunSekarang) {
        tahunSekarang.textContent = new Date().getFullYear();
    }

    // Headline berganti otomatis
    const daftarHeadline = [
        "Mencetak generasi Islami, cerdas, dan berakhlak mulia.",
        "Mengembangkan potensi siswa melalui pendidikan terpadu.",
        "Bersama membangun lingkungan belajar yang positif."
    ];

    const beritaBerputar = document.getElementById("beritaBerputar");
    let indeksHeadline = 0;

    if (beritaBerputar) {
        setInterval(function () {
            beritaBerputar.style.opacity = "0";

            setTimeout(function () {
                indeksHeadline = (indeksHeadline + 1) % daftarHeadline.length;
                beritaBerputar.textContent = daftarHeadline[indeksHeadline];
                beritaBerputar.style.opacity = "1";
            }, 300);
        }, 3500);
    }

    // Menu responsif
    const tombolMenu = document.getElementById("tombolMenu");
    const navigasi = document.getElementById("navigasi");

    if (tombolMenu && navigasi) {
        tombolMenu.addEventListener("click", function () {
            const terbuka = navigasi.classList.toggle("terbuka");

            tombolMenu.setAttribute("aria-expanded", terbuka);
            tombolMenu.textContent = terbuka ? "✕" : "☰";
        });

        navigasi.querySelectorAll("a").forEach(function (tautan) {
            tautan.addEventListener("click", function () {
                if (window.innerWidth <= 1050) {
                    navigasi.classList.remove("terbuka");
                    tombolMenu.setAttribute("aria-expanded", "false");
                    tombolMenu.textContent = "☰";
                }
            });
        });
    }

    // Submenu Tentang Kami
    const menuTentang = document.getElementById("menuTentang");
    const tombolTentang = document.getElementById("tombolTentang");

    if (menuTentang && tombolTentang) {
        tombolTentang.addEventListener("click", function () {
            if (window.innerWidth <= 1050) {
                const terbuka = menuTentang.classList.toggle("buka");
                tombolTentang.setAttribute("aria-expanded", terbuka);
            }
        });
    }

    // Slideshow
    const daftarSlide = [
        {
            label: "SELAMAT DATANG",
            judul: "SMPIT Nur Hidayah",
            teks: "Membangun generasi Qurani yang berilmu, berakhlak mulia, mandiri, dan berprestasi."
        },
        {
            label: "PENDIDIKAN TERPADU",
            judul: "Belajar dengan Hati",
            teks: "Menumbuhkan semangat belajar, kedisiplinan, dan kepedulian terhadap sesama."
        },
        {
            label: "MASA DEPAN CERAH",
            judul: "Tumbuh dan Berprestasi",
            teks: "Mendukung siswa mengembangkan potensi, bakat, dan kreativitas."
        }
    ];

    const labelSlide = document.getElementById("labelSlide");
    const judulSlide = document.getElementById("judulSlide");
    const teksSlide = document.getElementById("teksSlide");
    const titikSlide = document.querySelectorAll(".titik");
    const bagianHero = document.querySelector(".bagian-hero");

    let indeksSlide = 0;
    let waktuSlide;

    function tampilkanSlide(indeks) {
        indeksSlide = (indeks + daftarSlide.length) % daftarSlide.length;

        if (labelSlide && judulSlide && teksSlide) {
            labelSlide.style.opacity = "0";
            judulSlide.style.opacity = "0";
            teksSlide.style.opacity = "0";

            setTimeout(function () {
                labelSlide.textContent = daftarSlide[indeksSlide].label;
                judulSlide.textContent = daftarSlide[indeksSlide].judul;
                teksSlide.textContent = daftarSlide[indeksSlide].teks;

                labelSlide.style.opacity = "1";
                judulSlide.style.opacity = "1";
                teksSlide.style.opacity = "1";
            }, 200);
        }

        titikSlide.forEach(function (titik, nomor) {
            titik.classList.toggle("aktif", nomor === indeksSlide);
        });
    }

    function mulaiSlide() {
        clearInterval(waktuSlide);

        waktuSlide = setInterval(function () {
            tampilkanSlide(indeksSlide + 1);
        }, 5000);
    }

    const slideSebelumnya = document.getElementById("slideSebelumnya");
    const slideBerikutnya = document.getElementById("slideBerikutnya");

    if (slideSebelumnya && slideBerikutnya && judulSlide) {
        slideSebelumnya.addEventListener("click", function () {
            tampilkanSlide(indeksSlide - 1);
            mulaiSlide();
        });

        slideBerikutnya.addEventListener("click", function () {
            tampilkanSlide(indeksSlide + 1);
            mulaiSlide();
        });

        titikSlide.forEach(function (titik) {
            titik.addEventListener("click", function () {
                tampilkanSlide(Number(titik.dataset.slide));
                mulaiSlide();
            });
        });

        if (bagianHero) {
            bagianHero.addEventListener("mouseenter", function () {
                clearInterval(waktuSlide);
            });

            bagianHero.addEventListener("mouseleave", mulaiSlide);
        }

        mulaiSlide();
    }

    // Testimoni interaktif
    const daftarTestimoni = [
        {
            teks: "Pendidikan yang baik membantu anak berkembang dalam ilmu, karakter, dan kepedulian.",
            nama: "Semangat Pendidikan"
        },
        {
            teks: "Kerja sama sekolah dan keluarga dapat membantu mendampingi proses belajar anak.",
            nama: "Kolaborasi Pendidikan"
        },
        {
            teks: "Setiap anak memiliki potensi untuk berkembang melalui bimbingan dan kesempatan yang baik.",
            nama: "Inspirasi Belajar"
        }
    ];

    const teksTestimoni = document.getElementById("teksTestimoni");
    const namaTestimoni = document.getElementById("namaTestimoni");
    const nomorTestimoni = document.getElementById("nomorTestimoni");

    let indeksTestimoni = 0;

    function tampilkanTestimoni(indeks) {
        indeksTestimoni = (indeks + daftarTestimoni.length) % daftarTestimoni.length;

        if (teksTestimoni && namaTestimoni && nomorTestimoni) {
            teksTestimoni.textContent = daftarTestimoni[indeksTestimoni].teks;
            namaTestimoni.textContent = daftarTestimoni[indeksTestimoni].nama;
            nomorTestimoni.textContent =
                (indeksTestimoni + 1) + " / " + daftarTestimoni.length;
        }
    }

    const testimoniSebelumnya = document.getElementById("testimoniSebelumnya");
    const testimoniBerikutnya = document.getElementById("testimoniBerikutnya");

    if (testimoniSebelumnya && testimoniBerikutnya) {
        testimoniSebelumnya.addEventListener("click", function () {
            tampilkanTestimoni(indeksTestimoni - 1);
        });

        testimoniBerikutnya.addEventListener("click", function () {
            tampilkanTestimoni(indeksTestimoni + 1);
        });
    }

    // Animasi angka statistik
    const angkaStatistik = document.querySelectorAll("[data-angka]");

    function animasikanAngka(elemen) {
        const tujuan = Number(elemen.dataset.angka);
        const durasi = 1300;
        const waktuMulai = performance.now();

        function perbarui(waktuSekarang) {
            const kemajuan = Math.min((waktuSekarang - waktuMulai) / durasi, 1);
            const gerakanHalus = 1 - Math.pow(1 - kemajuan, 3);

            elemen.textContent = Math.round(tujuan * gerakanHalus);

            if (kemajuan < 1) {
                requestAnimationFrame(perbarui);
            }
        }

        requestAnimationFrame(perbarui);
    }

    // Animasi section ketika terlihat
    if ("IntersectionObserver" in window) {
        const pengamatAngka = new IntersectionObserver(function (entri) {
            entri.forEach(function (item) {
                if (item.isIntersecting) {
                    animasikanAngka(item.target);
                    pengamatAngka.unobserve(item.target);
                }
            });
        }, { threshold: 0.4 });

        angkaStatistik.forEach(function (angka) {
            pengamatAngka.observe(angka);
        });

        const daftarBagian = document.querySelectorAll(
            ".bagian > .wadah, .bagian-cta > .wadah"
        );

        daftarBagian.forEach(function (bagian) {
            bagian.classList.add("animasi-masuk");
        });

        const pengamatBagian = new IntersectionObserver(function (entri) {
            entri.forEach(function (item) {
                if (item.isIntersecting) {
                    item.target.classList.add("muncul");
                    pengamatBagian.unobserve(item.target);
                }
            });
        }, { threshold: 0.12 });

        daftarBagian.forEach(function (bagian) {
            pengamatBagian.observe(bagian);
        });
    } else {
        angkaStatistik.forEach(function (angka) {
            angka.textContent = angka.dataset.angka;
        });
    }

    // Tombol kembali ke atas
    const kembaliAtas = document.getElementById("kembaliAtas");

    if (kembaliAtas) {
        window.addEventListener("scroll", function () {
            kembaliAtas.classList.toggle("tampil", window.scrollY > 350);
        });

        kembaliAtas.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

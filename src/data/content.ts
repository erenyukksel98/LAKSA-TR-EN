export const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      services: "Hizmetler",
      contact: "İletişim",
      labPortal: "Lab Portal",
    },
    hero: {
      title: "Güvenilir Yeterlilik Testleri ve Laboratuvarlar Arası Karşılaştırmalar",
      subtitle: "Laboratuvar sonuçlarınızda doğruluk ve güven sağlar",
      btnServices: "Hizmetleri Gör",
      btnContact: "İletişim",
    },
    about: {
      title: "Hakkımızda",
      description: "LAKSA, kalibrasyon laboratuvarları için Yeterlilik Testleri (Proficiency Testing) ve Laboratuvarlar Arası Karşılaştırma (Interlaboratory Comparison) hizmetleri sunan, güvenilir ve tarafsız bir kuruluştur. Amacımız, laboratuvarların analiz kalitelerini artırmalarına ve akreditasyon gerekliliklerini karşılamalarına destek olmaktır.",
      missionTitle: "Misyonumuz",
      missionText: "Laboratuvarların ölçüm kalitesini güvence altına alarak toplumsal sağlığa ve güvenliğe katkıda bulunmaktır.",
      visionTitle: "Vizyonumuz",
      visionText: "Uluslararası alanda en çok tercih edilen yeterlilik testi sağlayıcısı olmaktır.",
      whyTitle: "Neden LAKSA?",
      whyText: "Faaliyetlerimizi TS EN ISO/IEC 17043:2023 standardına uygun olarak, uzman kadro ve hızlı raporlama süreçlerimizle gerçekleştirmekteyiz.",
    },
    services: {
      title: "Devam eden karşılaştırmalar",
      priceLabel: "Fiyat",
      statusLabel: "Durum",
      active: "Aktif",
      viewComparisonsBtn: "Karşılaştırmaları gör",
      viewAllComparisons: "Tüm karşılaştırmaları gör",
      categories: [
        {
          id: "kuvvet",
          name: "Kuvvet",
          comparisons: [
            { id: "kuvvet-1", name: "Dinamometre kalibrasyonu karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "", scope: "100-500 N arası Çekme/Basma", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] },
            { id: "kuvvet-2", name: "Beton Test Presi kalibrasyonu karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "", scope: "Kapasite: 3000 kN, Çözünürlük: 0,01 kN, Lokasyon: İstanbul", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "hacim",
          name: "Hacim",
          comparisons: [
            { id: "hacim-1", name: "Balon Joje kalibrasyonu karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "", scope: "250 mL", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] },
            { id: "hacim-2", name: "Pistonlu pipet kalibrasyonu karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "", scope: "Kapasite: 100 - 1000 µL, Bölüntü: 1 µL", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] },
            { id: "hacim-3", name: "Mezür kalibrasyonu karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "", scope: "Nominal kapasite: 25 mL, Taksimat: 0,5 mL", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] },
            { id: "hacim-4", name: "Büret kalibrasyonu karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "", scope: "Anma hacmi: 25 mL, Taksimat: 0,05 mL", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "sicaklik-nem",
          name: "Sıcaklık-Nem",
          comparisons: [
            { id: "sicaklik-1", name: "İklimlendirme Kabini Sıcaklık ve Nem Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Sıcaklık ve nem ölçerlerin, etüv ve iklimlendirme kabinlerinin kalibrasyon performanslarının değerlendirilmesi.", scope: "-20°C ile 150°C arası sıcaklık, %10 - %95 RH nem", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "boyut",
          name: "Boyut",
          comparisons: [
            { id: "boyut-1", name: "Kumpas ve Mikrometre Boyut Ölçüm Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Hassas boyut ölçüm cihazlarının (kumpas, mikrometre vb.) kalibrasyon ve ölçüm yeteneklerinin doğrulanması.", scope: "0 - 150 mm arası uzunluk, dış çap, iç çap", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "tork",
          name: "Tork",
          comparisons: [
            { id: "tork-1", name: "Tork Anahtarı Kalibrasyonu Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "El aletleri ve tork ölçüm cihazlarının kalibrasyon performanslarının uluslararası standartlara göre değerlendirilmesi.", scope: "1 Nm - 1000 Nm arası tork ölçümü", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "basinc",
          name: "Basınç",
          comparisons: [
            { id: "basinc-1", name: "Manometre ve Basınç Transmitteri Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Pnömatik ve hidrolik basınç ölçüm cihazlarının kalibrasyon yetkinliklerinin test edilmesi.", scope: "-1 bar ile 700 bar arası basınç", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "debi",
          name: "Debi",
          comparisons: [
            { id: "debi-1", name: "Sıvı ve Gaz Debimetre Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Sıvı ve gaz akışkanlar için debi ölçüm cihazlarının performans ve kalibrasyon değerlendirmesi.", scope: "0.1 L/dk - 1000 L/dk arası hacimsel ve kütlesel debi", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "devir",
          name: "Devir",
          comparisons: [
            { id: "devir-1", name: "Takometre ve Santrifüj Devir Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Optik ve temaslı takometreler ile santrifüj cihazlarının devir hızı ölçüm yetkinliklerinin doğrulanması.", scope: "10 rpm - 100.000 rpm arası devir ölçümü", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "elektrik",
          name: "Elektrik",
          comparisons: [
            { id: "elektrik-1", name: "Multimetre ve Osiloskop Elektriksel Karşılaştırma", price: "4000 TL + KDV", status: "active", detailedDesc: "Gerilim, akım, direnç ve kapasitans gibi temel elektriksel parametrelerin ölçüm performanslarının değerlendirilmesi.", scope: "DC/AC Gerilim, DC/AC Akım, Direnç (1 mΩ - 1 GΩ)", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "frekans-zaman",
          name: "Frekans-Zaman",
          comparisons: [
            { id: "frekans-1", name: "Frekansmetere ve Kronometre Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Zaman ve frekans ölçüm cihazlarının hassasiyet ve kalibrasyon yetkinliklerinin test edilmesi.", scope: "1 Hz - 1 GHz arası frekans, 1 ms - 24 saat arası zaman", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "hiz",
          name: "Hız",
          comparisons: [
            { id: "hiz-1", name: "Hız Ölçüm Cihazları (Radar/Lidar) Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Trafik ve endüstriyel hız ölçüm sistemlerinin doğruluk ve performans değerlendirmesi.", scope: "10 km/h - 300 km/h arası hız ölçümü", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "ivme-titresim",
          name: "İvme-Titreşim",
          comparisons: [
            { id: "ivme-1", name: "Titreşim Sensörü ve İvmeölçer Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Titreşim kalibratörleri ve ivmeölçerlerin genlik ve frekans yanıtlarının değerlendirilmesi.", scope: "0.1 g - 100 g arası ivme, 1 Hz - 10 kHz arası frekans", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "optik",
          name: "Optik",
          comparisons: [
            { id: "optik-1", name: "Spektrofotometre ve Lüksmetre Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Işık şiddeti, dalga boyu doğruluğu ve absorbans ölçüm cihazlarının performans testi.", scope: "Dalga boyu (200-1000 nm), Aydınlık şiddeti (10-10.000 Lux)", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "sertlik",
          name: "Sertlik",
          comparisons: [
            { id: "sertlik-1", name: "Rockwell, Brinell ve Vickers Sertlik Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Metal ve polimer malzemeler için sertlik ölçüm cihazlarının kalibrasyon ve doğrulama testleri.", scope: "HRC, HRB, HBW, HV ölçeklerinde sertlik ölçümü", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "viskozite",
          name: "Viskozite",
          comparisons: [
            { id: "viskozite-1", name: "Rotasyonel ve Kapiler Viskozimetre Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Sıvıların kinematik ve dinamik viskozite ölçümlerinde laboratuvar performanslarının değerlendirilmesi.", scope: "1 cP - 100.000 cP arası dinamik viskozite", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "yogunluk",
          name: "Yoğunluk",
          comparisons: [
            { id: "yogunluk-1", name: "Sıvı ve Katı Yoğunluk Ölçüm Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Hidrometre, piknometre ve dijital yoğunluk ölçerlerin kalibrasyon yetkinliklerinin testi.", scope: "0.6 g/cm³ - 2.0 g/cm³ arası yoğunluk", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "kutle",
          name: "Kütle",
          comparisons: [
            { id: "kutle-1", name: "Kütle (Ağırlık) Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Standart kütlelerin (ağırlıkların) kalibrasyon performanslarının değerlendirilmesi.", scope: "1 mg - 20 kg arası kütle", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        },
        {
          id: "terazi",
          name: "Terazi",
          comparisons: [
            { id: "terazi-1", name: "Otomatik Olmayan Tartı Aletleri (Terazi) Karşılaştırması", price: "4000 TL + KDV", status: "active", detailedDesc: "Hassas ve analitik terazilerin kalibrasyon ve ölçüm yetkinliklerinin doğrulanması.", scope: "1 mg - 100 kg arası tartım", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        }
      ]
    },
    plannedComparisons: {
      title: "Planlanan karşılaştırmalar",
      categories: [
        {
          id: "kuvvet",
          name: "Kuvvet",
          comparisons: [
            { id: "kuvvet-1-planned", name: "Dinamometre kalibrasyonu karşılaştırması", price: "4000 TL + KDV", status: "planned", detailedDesc: "", scope: "100-500 N arası Çekme/Basma", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] },
            { id: "kuvvet-2-planned", name: "Beton Test Presi kalibrasyonu karşılaştırması", price: "4000 TL + KDV", status: "planned", detailedDesc: "", scope: "Kapasite: 3000 kN, Çözünürlük: 0,01 kN, Lokasyon: İstanbul", steps: ["Başvuru", "Cihaz Gönderimi", "Ölçüm", "Raporlama"] }
          ]
        }
      ]
    },
    servicesPage: {
      title: "Hizmetlerimiz",
      items: [
        {
          title: "Karşılaştırma Organizasyonu",
          description: "Laboratuvarlar arası karşılaştırma ve yeterlilik testlerini etkin bir şekilde organize ederek kalibrasyon süreçlerinizi destekliyoruz.\n\nLaboratuvarlar arası karşılaştırmaların organize edilmesi."
        },
        {
          title: "Danışmanlık Hizmetleri",
          description: "Yeni bir kalibrasyon laboratuvarı kurarken ihtiyaç duyduğunuz tüm danışmanlık hizmetlerini sağlıyoruz, standartlara uygun süreçler oluşturuyoruz.\n\nKalibrasyon laboratuvarı kurulumuna yönelik uzman danışmanlık."
        },
        {
          title: "Dış Kaynaklı Doküman Kontrolü",
          description: "Laboratuvarınızda kullandığınız dış kaynaklı dokümanların düzenli aralıklarla kontrol edilmesi ile kalite güvence sürecinizi güçlendiriyoruz.\n\nDış kaynaklı dokümanların periyodik kontrolü."
        },
        {
          title: "Eğitim Programları",
          description: "TS EN ISO / IEC 17025 gibi standartlara uygun eğitim programları ile personelinizi geliştirecek kapsamlı eğitim hizmetleri sunuyoruz.\n\nKalibrasyon ve metroloji alanında çeşitli eğitimler."
        },
        {
          title: "Cihaz Satışı ve Temini",
          description: "Laboratuvar ihtiyaçlarınıza yönelik güvenilir, kaliteli ve uluslararası standartlara uygun cihaz ve ekipman temin hizmeti sunuyoruz.\n\nTedarikini sağladığımız başlıca cihazlar:\n• Kalibrasyon ekipmanları\n• Ölçüm cihazları\n• Laboratuvar yardımcı ekipmanları\n• Yedek parçalar ve aksesuarlar\n\nSatış öncesi teknik danışmanlık, kurulum desteği ve satış sonrası hizmetlerimizle tüm süreç boyunca yanınızdayız."
        }
      ]
    },
    serviceDetail: {
      comparisonsTitle: "Karşılaştırmaları",
      categoryDesc: "{category} alanında sunduğumuz aktif yeterlilik testleri ve laboratuvarlar arası karşılaştırma programları aşağıda listelenmiştir.",
      scopeTitle: "Kapsam",
      stepsTitle: "Katılım Adımları",
      applyBtn: "Başvuru Yap",
      backBtn: "Hizmetlere Dön"
    },
    contact: {
      title: "İletişim",
      applicationTitle: "Başvuru",
      organizerLabel: "Organizatör",
      organizer: "Besim YÜKSEL",
      addressLabel: "Adres",
      address: "LAKSA - Laboratuvarlar Arası Karşılaştırma ve Yeterlilik Testleri Sağlayıcısı\nErtuğrulgazi Mahallesi Erdal Sokak No:8/1 Yıldırım/BURSA",
      emailLabel: "E-posta",
      emailValue: "laksa@laksa.com.tr",
      phoneLabel: "Telefon",
      phoneValue: "+90 545 908 16 08",
      name: "Ad Soyad",
      labName: "Laboratuvar Adı",
      email: "E-posta",
      phone: "Telefon",
      testSelection: "Karşılaştırma Seçimi",
      message: "Mesaj",
      submit: "Gönder",
      selectTest: "Bir karşılaştırma seçin...",
      successMsg: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız."
    },
    footer: {
      rights: "Tüm hakları saklıdır."
    },
    lab: {
      loginTitle: "Laboratuvar Girişi",
      email: "E-posta",
      password: "Şifre",
      loginBtn: "Giriş Yap",
      error: "Giriş başarısız. Lütfen bilgilerinizi kontrol edin.",
      dashboardTitle: "Laboratuvar Paneli",
      resultsTitle: "Ölçüm Sonuçları",
      reportsTitle: "Raporlar",
      testName: "Karşılaştırma Adı",
      resultValue: "Sonuç Değeri",
      date: "Tarih",
      downloadPdf: "PDF İndir",
      logout: "Çıkış Yap",
      noData: "Henüz veri bulunmamaktadır.",
      uploadResult: "Sonuç Yükle",
      uploadFile: "Dosya Yükle",
      upload: "Yükle"
    },
    admin: {
      title: "Yönetici Paneli",
      uploadReport: "Rapor Yükle",
      addResult: "Sonuç Ekle",
      selectUser: "Kullanıcı Seç",
      testName: "Test Adı",
      resultValue: "Değer",
      date: "Tarih",
      save: "Kaydet",
      success: "İşlem başarılı",
      upload: "Yükle"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact",
      labPortal: "Lab Portal",
    },
    hero: {
      title: "Reliable Proficiency Testing & Interlaboratory Comparisons",
      subtitle: "Ensuring accuracy and confidence in laboratory results",
      btnServices: "View Services",
      btnContact: "Contact Us",
    },
    about: {
      title: "About Us",
      description: "LAKSA is a reliable and impartial organization providing Proficiency Testing and Interlaboratory Comparison services for calibration laboratories. Our goal is to support laboratories in improving their analysis quality and meeting accreditation requirements.",
      missionTitle: "Our Mission",
      missionText: "To contribute to public health and safety by ensuring the measurement quality of laboratories.",
      visionTitle: "Our Vision",
      visionText: "To be the most preferred proficiency testing provider internationally.",
      whyTitle: "Why LAKSA?",
      whyText: "We carry out our activities in accordance with the TS EN ISO/IEC 17043:2023 standard, with our expert staff and fast reporting processes.",
    },
    services: {
      title: "Ongoing Comparisons",
      priceLabel: "Price",
      statusLabel: "Status",
      active: "Active",
      viewComparisonsBtn: "View Comparisons",
      viewAllComparisons: "See all comparisons",
      categories: [
        {
          id: "kuvvet",
          name: "Force",
          comparisons: [
            { id: "kuvvet-1", name: "Dynamometer Calibration Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "", scope: "100-500 N Tensile/Compressive", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] },
            { id: "kuvvet-2", name: "Concrete Test Press Calibration Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "", scope: "Capacity: 3000 kN, Resolution: 0.01 kN, Location: Istanbul", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "hacim",
          name: "Volume",
          comparisons: [
            { id: "hacim-1", name: "Volumetric Flask Calibration Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "", scope: "250 mL", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] },
            { id: "hacim-2", name: "Piston Pipette Calibration Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "", scope: "Capacity: 100 - 1000 µL, Division: 1 µL", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] },
            { id: "hacim-3", name: "Measuring Cylinder Calibration Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "", scope: "Nominal capacity: 25 mL, Graduation: 0.5 mL", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] },
            { id: "hacim-4", name: "Burette Calibration Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "", scope: "Nominal volume: 25 mL, Graduation: 0.05 mL", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "sicaklik-nem",
          name: "Temperature-Humidity",
          comparisons: [
            { id: "sicaklik-1", name: "Climatic Chamber Temperature and Humidity Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Evaluation of calibration performances of temperature and humidity meters, ovens, and climatic chambers.", scope: "Temperature from -20°C to 150°C, Humidity from 10% to 95% RH", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "boyut",
          name: "Dimensional",
          comparisons: [
            { id: "boyut-1", name: "Caliper and Micrometer Dimensional Measurement Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Verification of calibration and measurement capabilities of precision dimensional measurement devices (calipers, micrometers, etc.).", scope: "Length, outer diameter, inner diameter from 0 to 150 mm", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "tork",
          name: "Torque",
          comparisons: [
            { id: "tork-1", name: "Torque Wrench Calibration Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Evaluation of calibration performances of hand tools and torque measurement devices according to international standards.", scope: "Torque measurement from 1 Nm to 1000 Nm", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "basinc",
          name: "Pressure",
          comparisons: [
            { id: "basinc-1", name: "Manometer and Pressure Transmitter Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Testing the calibration competencies of pneumatic and hydraulic pressure measurement devices.", scope: "Pressure from -1 bar to 700 bar", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "debi",
          name: "Flow",
          comparisons: [
            { id: "debi-1", name: "Liquid and Gas Flowmeter Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Performance and calibration evaluation of flow measurement devices for liquid and gas fluids.", scope: "Volumetric and mass flow from 0.1 L/min to 1000 L/min", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "devir",
          name: "Revolution",
          comparisons: [
            { id: "devir-1", name: "Tachometer and Centrifuge Revolution Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Verification of rotational speed measurement competencies of optical and contact tachometers and centrifuge devices.", scope: "Revolution measurement from 10 rpm to 100,000 rpm", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "elektrik",
          name: "Electrical",
          comparisons: [
            { id: "elektrik-1", name: "Multimeter and Oscilloscope Electrical Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Evaluation of measurement performances of basic electrical parameters such as voltage, current, resistance, and capacitance.", scope: "DC/AC Voltage, DC/AC Current, Resistance (1 mΩ - 1 GΩ)", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "frekans-zaman",
          name: "Frequency-Time",
          comparisons: [
            { id: "frekans-1", name: "Frequency Meter and Stopwatch Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Testing the precision and calibration competencies of time and frequency measurement devices.", scope: "Frequency from 1 Hz to 1 GHz, Time from 1 ms to 24 hours", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "hiz",
          name: "Speed",
          comparisons: [
            { id: "hiz-1", name: "Speed Measurement Devices (Radar/Lidar) Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Accuracy and performance evaluation of traffic and industrial speed measurement systems.", scope: "Speed measurement from 10 km/h to 300 km/h", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "ivme-titresim",
          name: "Acceleration-Vibration",
          comparisons: [
            { id: "ivme-1", name: "Vibration Sensor and Accelerometer Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Evaluation of amplitude and frequency responses of vibration calibrators and accelerometers.", scope: "Acceleration from 0.1 g to 100 g, Frequency from 1 Hz to 10 kHz", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "optik",
          name: "Optical",
          comparisons: [
            { id: "optik-1", name: "Spectrophotometer and Luxmeter Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Performance testing of luminous intensity, wavelength accuracy, and absorbance measurement devices.", scope: "Wavelength (200-1000 nm), Illuminance (10-10,000 Lux)", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "sertlik",
          name: "Hardness",
          comparisons: [
            { id: "sertlik-1", name: "Rockwell, Brinell, and Vickers Hardness Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Calibration and verification tests of hardness measurement devices for metal and polymer materials.", scope: "Hardness measurement in HRC, HRB, HBW, HV scales", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "viskozite",
          name: "Viscosity",
          comparisons: [
            { id: "viskozite-1", name: "Rotational and Capillary Viscometer Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Evaluation of laboratory performances in kinematic and dynamic viscosity measurements of liquids.", scope: "Dynamic viscosity from 1 cP to 100,000 cP", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "yogunluk",
          name: "Density",
          comparisons: [
            { id: "yogunluk-1", name: "Liquid and Solid Density Measurement Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Testing the calibration competencies of hydrometers, pycnometers, and digital density meters.", scope: "Density from 0.6 g/cm³ to 2.0 g/cm³", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "kutle",
          name: "Mass",
          comparisons: [
            { id: "kutle-1", name: "Mass (Weight) Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Evaluation of calibration performances of standard masses (weights).", scope: "Mass from 1 mg to 20 kg", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        },
        {
          id: "terazi",
          name: "Balance",
          comparisons: [
            { id: "terazi-1", name: "Non-Automatic Weighing Instruments (Balance) Comparison", price: "4000 TL + VAT", status: "active", detailedDesc: "Verification of calibration and measurement competencies of precision and analytical balances.", scope: "Weighing from 1 mg to 100 kg", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        }
      ]
    },
    plannedComparisons: {
      title: "Planned comparisons",
      categories: [
        {
          id: "kuvvet",
          name: "Force",
          comparisons: [
            { id: "kuvvet-1-planned", name: "Dynamometer Calibration Comparison", price: "4000 TL + VAT", status: "planned", detailedDesc: "", scope: "100-500 N Tensile/Compressive", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] },
            { id: "kuvvet-2-planned", name: "Concrete Test Press Calibration Comparison", price: "4000 TL + VAT", status: "planned", detailedDesc: "", scope: "Capacity: 3000 kN, Resolution: 0.01 kN, Location: Istanbul", steps: ["Application", "Device Delivery", "Measurement", "Reporting"] }
          ]
        }
      ]
    },
    servicesPage: {
      title: "Our Services",
      items: [
        {
          title: "Comparison Organization",
          description: "We support your calibration processes by effectively organizing interlaboratory comparisons and proficiency tests.\n\nOrganization of interlaboratory comparisons."
        },
        {
          title: "Consultancy Services",
          description: "We provide all the consultancy services you need when establishing a new calibration laboratory, creating processes that comply with standards.\n\nExpert consultancy for calibration laboratory setup."
        },
        {
          title: "External Document Control",
          description: "We strengthen your quality assurance process by regularly checking the external documents you use in your laboratory.\n\nPeriodic control of external documents."
        },
        {
          title: "Training Programs",
          description: "We offer comprehensive training services to develop your personnel with training programs complying with standards such as TS EN ISO / IEC 17025.\n\nVarious trainings in the field of calibration and metrology."
        },
        {
          title: "Equipment Sales and Supply",
          description: "We offer reliable, high-quality equipment supply services that meet international standards for your laboratory needs.\n\nMain equipment we supply:\n• Calibration equipment\n• Measuring devices\n• Laboratory auxiliary equipment\n• Spare parts and accessories\n\nWe are with you throughout the entire process with pre-sales technical consultancy, installation support, and after-sales services."
        }
      ]
    },
    serviceDetail: {
      comparisonsTitle: "Comparisons",
      categoryDesc: "Below are the active proficiency testing and interlaboratory comparison programs we offer in the field of {category}.",
      scopeTitle: "Scope",
      stepsTitle: "Participation Steps",
      applyBtn: "Apply Now",
      backBtn: "Back to Services"
    },
    contact: {
      title: "Contact",
      applicationTitle: "Application",
      organizerLabel: "Organizer",
      organizer: "Besim YÜKSEL",
      addressLabel: "Address",
      address: "LAKSA - Interlaboratory Comparison and Proficiency Testing Provider\nErtuğrulgazi Mahallesi Erdal Sokak No:8/1 Yıldırım/BURSA",
      emailLabel: "Email",
      emailValue: "laksa@laksa.com.tr",
      phoneLabel: "Phone",
      phoneValue: "+90 545 908 16 08",
      name: "Full Name",
      labName: "Laboratory Name",
      email: "Email",
      phone: "Phone",
      testSelection: "Selected Comparison",
      message: "Message",
      submit: "Submit",
      selectTest: "Select a comparison...",
      successMsg: "Your message has been sent successfully. We will get back to you as soon as possible."
    },
    footer: {
      rights: "All rights reserved."
    },
    lab: {
      loginTitle: "Laboratory Login",
      email: "Email",
      password: "Password",
      loginBtn: "Login",
      error: "Login failed. Please check your credentials.",
      dashboardTitle: "Laboratory Dashboard",
      resultsTitle: "Measurement Results",
      reportsTitle: "Reports",
      testName: "Comparison Name",
      resultValue: "Result Value",
      date: "Date",
      downloadPdf: "Download PDF",
      logout: "Logout",
      noData: "No data available yet.",
      uploadResult: "Upload Result",
      uploadFile: "Upload File",
      upload: "Upload"
    },
    admin: {
      title: "Admin Panel",
      uploadReport: "Upload Report",
      addResult: "Add Result",
      selectUser: "Select User",
      testName: "Test Name",
      resultValue: "Value",
      date: "Date",
      save: "Save",
      success: "Operation successful",
      upload: "Upload"
    }
  }
};

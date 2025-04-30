<script lang="ts">
	// FAQ verileri
	const faqs = [
		{
			question: "Hizmetleriniz ne kadar sürede tamamlanır?",
			answer: "Projelerimizin tamamlanma süresi, projenin kapsamına göre değişiklik gösterir. Küçük projeler genellikle 2-4 hafta içinde tamamlanırken, daha büyük projeler 1-3 ay sürebilir. Her proje için size özel bir zaman çizelgesi oluşturuyoruz."
		},
		{
			question: "Fiyatlandırma politikanız nedir?",
			answer: "Fiyatlarımız, projenin karmaşıklığı, kapsamı ve süresine göre belirlenir. Her proje için detaylı bir fiyat teklifi sunuyoruz. Farklı bütçelere uygun çözümlerimiz mevcuttur. Daha fazla bilgi için lütfen bizimle iletişime geçin."
		},
		{
			question: "Hangi sektörlere hizmet veriyorsunuz?",
			answer: "Geniş bir sektör yelpazesine hizmet vermekteyiz. Finans, eğitim, sağlık, e-ticaret, turizm, gayrimenkul ve daha birçok sektörde deneyimimiz bulunmaktadır. Her sektöre özel çözümler sunabiliyoruz."
		},
		{
			question: "Revizyon politikanız nedir?",
			answer: "Proje sürecinde belirli sayıda revizyon hakkı sunuyoruz. Paketlerimizde genellikle 2-3 revizyon turu dahildir. Ek revizyonlar için ek ücret talep edilebilir. Revizyon detaylarını proje başlangıcında netleştiriyoruz."
		},
		{
			question: "Ödeme koşullarınız nedir?",
			answer: "Projelerimizde genellikle %50 ön ödeme, %50 teslimatta ödeme planı uyguluyoruz. Daha büyük projeler için aşamalı ödeme planları da mevcuttur. Farklı ödeme seçenekleri için lütfen satış ekibimizle görüşün."
		},
		{
			question: "Projelerin bakımını da üstleniyor musunuz?",
			answer: "Evet, projelerinizin bakımı için aylık ve yıllık bakım paketlerimiz mevcuttur. Bu paketler; güvenlik güncellemeleri, teknik destek, performans iyileştirmeleri ve küçük değişiklikleri içerir. Bakım paketi detayları için iletişime geçebilirsiniz."
		},
		{
			question: "Nasıl başvurabiliriz?",
			answer: "Bizimle çalışmak için iletişim sayfamızdaki formu doldurabilir, e-posta gönderebilir veya telefonla ulaşabilirsiniz. Talebinizi aldıktan sonra 24 saat içinde size dönüş yapacağız ve ilk görüşmemizi planlayacağız."
		},
		{
			question: "Referanslarınızı görebilir miyiz?",
			answer: "Elbette! Web sitemizin referanslar bölümünde tamamladığımız projeleri inceleyebilirsiniz. Ayrıca talep üzerine size özel referans listesi ve vaka çalışmaları da paylaşabiliriz."
		}
	];

	// Başlangıçta tüm FAQ'lar kapalı
	let openIndex = -1;

	function toggleFaq(index: number) {
		openIndex = openIndex === index ? -1 : index;
	}
</script>

<div class="prose max-w-none">
  <h1 class="text-5xl font-bold mb-6">Sıkça Sorulan Sorular</h1>

  <p class="mb-8">Müşterilerimizin en çok merak ettiği soruları ve cevaplarını aşağıda bulabilirsiniz. Daha fazla soru
    için lütfen <a href="/iletisim" class="link link-primary">iletişime geçin</a>.</p>

  <div class="join join-vertical w-full">
    {#each faqs as faq, index}
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input
            type="radio"
            name="faq-accordion"
            checked={openIndex === index}
            on:change={() => toggleFaq(index)}
        />
        <div class="collapse-title text-xl font-medium">
          {faq.question}
        </div>
        <div class="collapse-content">
          <p>{faq.answer}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="bg-base-200 p-8 rounded-lg my-12 text-center">
    <h2 class="text-3xl font-bold mb-4">Hala sorunuz mu var?</h2>
    <p class="mb-6">Burada cevabını bulamadığınız sorularınız için bizimle iletişime geçebilirsiniz.</p>
    <a href="/iletisim" class="btn btn-primary">İletişime Geç</a>
  </div>
</div>
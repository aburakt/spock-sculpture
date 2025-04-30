<script lang="ts">
	import {createForm} from 'svelte-forms-lib';

	const {form, errors, handleChange, handleSubmit} = createForm({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: ''
		},
		validate: values => {
			let errors = {} as any;

			if (!values.name) {
				errors.name = 'Ad Soyad alanı zorunludur';
			}

			if (!values.email) {
				errors.email = 'E-posta alanı zorunludur';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
				errors.email = 'Geçerli bir e-posta adresi giriniz';
			}

			if (!values.subject) {
				errors.subject = 'Konu alanı zorunludur';
			}

			if (!values.message) {
				errors.message = 'Mesaj alanı zorunludur';
			}

			return errors;
		},
		onSubmit: values => {
			// Form gönderme işlemi burada gerçekleşecek
			alert('Form gönderildi! Yakında size dönüş yapacağız.');
			console.log(values);
		}
	});
</script>

<div class="prose max-w-none">
  <h1 class="text-5xl font-bold mb-12">İletişim</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <h2 class="text-3xl mb-4">Bize Ulaşın</h2>
      <p class="mb-8">Aşağıdaki formu doldurarak veya iletişim bilgilerimizi kullanarak bizimle iletişime
        geçebilirsiniz.</p>

      <div class="mb-6">
        <h3 class="text-xl mb-2">Adres</h3>
        <p>Levent, 34330 Beşiktaş/İstanbul, Türkiye</p>
      </div>

      <div class="mb-6">
        <h3 class="text-xl mb-2">Telefon</h3>
        <p>+90 212 123 45 67</p>
      </div>

      <div class="mb-6">
        <h3 class="text-xl mb-2">E-posta</h3>
        <p>info@firmaadi.com</p>
      </div>

      <div class="mb-6">
        <h3 class="text-xl mb-2">Çalışma Saatleri</h3>
        <p>Pazartesi - Cuma: 09:00 - 18:00</p>
        <p>Cumartesi: 10:00 - 14:00</p>
        <p>Pazar: Kapalı</p>
      </div>

      <div class="stats shadow mt-8">
        <div class="stat">
          <div class="stat-title">Yanıt Süresi</div>
          <div class="stat-value text-primary">24 Saat</div>
          <div class="stat-desc">İçinde dönüş yapıyoruz</div>
        </div>

        <div class="stat">
          <div class="stat-title">Müşteri Memnuniyeti</div>
          <div class="stat-value text-secondary">98%</div>
          <div class="stat-desc text-secondary">Memnuniyet oranı</div>
        </div>
      </div>
    </div>

    <div>
      <form on:submit={handleSubmit} class="bg-base-200 p-6 rounded-lg">
        <h2 class="text-3xl mb-6">İletişim Formu</h2>

        <div class="form-control w-full mb-4">
          <label class="label">
            <span class="label-text">Adınız Soyadınız</span>
          </label>
          <input
              type="text"
              name="name"
              placeholder="Adınız Soyadınız"
              class="input input-bordered w-full {$errors.name ? 'input-error' : ''}"
              bind:value={$form.name}
              on:change={handleChange}
          />
          {#if $errors.name}
            <label class="label">
              <span class="label-text-alt text-error">{$errors.name}</span>
            </label>
          {/if}
        </div>

        <div class="form-control w-full mb-4">
          <label class="label">
            <span class="label-text">E-posta Adresiniz</span>
          </label>
          <input
              type="email"
              name="email"
              placeholder="E-posta Adresiniz"
              class="input input-bordered w-full {$errors.email ? 'input-error' : ''}"
              bind:value={$form.email}
              on:change={handleChange}
          />
          {#if $errors.email}
            <label class="label">
              <span class="label-text-alt text-error">{$errors.email}</span>
            </label>
          {/if}
        </div>

        <div class="form-control w-full mb-4">
          <label class="label">
            <span class="label-text">Konu</span>
          </label>
          <input
              type="text"
              name="subject"
              placeholder="Konu"
              class="input input-bordered w-full {$errors.subject ? 'input-error' : ''}"
              bind:value={$form.subject}
              on:change={handleChange}
          />
          {#if $errors.subject}
            <label class="label">
              <span class="label-text-alt text-error">{$errors.subject}</span>
            </label>
          {/if}
        </div>

        <div class="form-control w-full mb-4">
          <label class="label">
            <span class="label-text">Mesajınız</span>
          </label>
          <textarea
              name="message"
              placeholder="Mesajınız"
              class="textarea textarea-bordered w-full h-32 {$errors.message ? 'textarea-error' : ''}"
              bind:value={$form.message}
              on:change={handleChange}
          ></textarea>
          {#if $errors.message}
            <label class="label">
              <span class="label-text-alt text-error">{$errors.message}</span>
            </label>
          {/if}
        </div>

        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">Gönder</button>
        </div>
      </form>
    </div>
  </div>

  <div class="mt-12">
    <h2 class="text-3xl mb-6">Bizi Bulun</h2>
    <div class="w-full h-96 rounded-lg overflow-hidden">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.552145089368!2d28.99243971789363!3d41.07220237910018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f4a896d%3A0x84e6890d082c8c8a!2sLevent%2C%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1683910456303!5m2!1sen!2str"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>
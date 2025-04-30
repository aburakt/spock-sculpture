
# Kurumsal FullStack Proje Şablonu  
**PocketBase (Backend) + SvelteKit (Frontend) + PostgreSQL (Opsiyonel) + Docker (Opsiyonel)**  

---

## 🌟 **Genel Bakış**  
Bu şablon, hızlı ve SEO dostu kurumsal web siteleri için optimize edilmiştir.  
- **Temel Teknolojiler:**  
  - **Backend:** PocketBase (Go) - Tek dosya, dahili admin panel, SQLite/PostgreSQL desteği.  
  - **Frontend:** SvelteKit - SSR/SSG hibrit, hafif ve hızlı.  
- **Esnek Yapı:**  
  - **Veritabanı:** İsteğe bağlı SQLite (basit) veya PostgreSQL (ölçeklenebilir).  
  - **Deployment:** Docker ile taşınabilir veya direkt Plesk/cPanel.  

---

## 🛠️ **Kurulum**  

### 1. Gereksinimler  
- Node.js v18+  
- PocketBase v0.10+  
- PNPM v8+ (Opsiyonel)  
- Plesk/cPanel erişimi (Deploy için)  

### 2. Projeyi Klonla  
```bash  
git clone https://github.com/kullanici/proje-adi.git  
cd proje-adi  
```

### 3. Backend (PocketBase)  
```bash  
# PocketBase indir ve başlat (SQLite varsayılan)  
wget https://github.com/pocketbase/pocketbase/releases/download/v0.10.3/pocketbase_0.10.3_linux_amd64.zip  
unzip pocketbase_0.10.3_linux_amd64.zip  
./pocketbase serve --dir ./pb_data  
```

### 4. Frontend (SvelteKit)  
```bash  
cd frontend  
pnpm install # veya npm install  
pnpm dev # Geliştirme modu  
```

---

## 📦 **Veritabanı Seçenekleri**  

### A) SQLite (Varsayılan)  
- **Avantaj:** Kurulum gerektirmez, `pb_data/data.db` dosyasına kaydeder.  
- **Başlatma:**  
  ```bash  
  ./pocketbase serve --dir ./pb_data  
  ```

### B) PostgreSQL (Ölçeklenebilir Çözüm)  
1. **Plesk/cPanel'de PostgreSQL Veritabanı Oluşturun**  
2. **PocketBase'i PostgreSQL ile Başlatın:**  
   ```bash  
   ./pocketbase serve --postgres="postgres://kullanici:sifre@localhost:5432/veritabani_adi"  
   ```
3. **Mevcut Verileri Taşıyın (Opsiyonel):**  
   ```bash  
   pgloader pb_data/data.db postgresql://kullanici:sifre@localhost/veritabani_adi  
   ```

---

## 🐳 **Docker ile Çalıştırma (Opsiyonel)**  
```dockerfile  
# Dockerfile  
FROM alpine:latest  
RUN apk add --no-cache wget unzip  
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.10.3/pocketbase_0.10.3_linux_amd64.zip  
RUN unzip pocketbase_0.10.3_linux_amd64.zip  
EXPOSE 8090  
CMD ["./pocketbase", "serve", "--postgres=postgres://user:pass@db:5432/db"]  
```

```yaml  
# docker-compose.yml  
version: '3'  
services:  
  pocketbase:  
    build: .  
    ports:  
      - "8090:8090"  
    depends_on:  
      - postgres  
  postgres:  
    image: postgres:15  
    environment:  
      POSTGRES_USER: user  
      POSTGRES_PASSWORD: pass  
      POSTGRES_DB: db  
    volumes:  
      - postgres_data:/var/lib/postgresql/data  
volumes:  
  postgres_data:  
```

---

## 🚀 **Deployment (Plesk & cPanel)**  

### A) Plesk  
1. **Node.js Uygulaması Oluştur:**  
   - **Dizin:** `/httpdocs/frontend`  
   - **Başlatma Komutu:** `npm run build && npm run start`  
   - **Ortam Değişkenleri:** `NODE_ENV=production`  

2. **PocketBase'i Systemd ile Çalıştır:**  
   ```bash  
   sudo nano /etc/systemd/system/pocketbase.service  
   ```  
   ```ini  
   [Unit]  
   Description=PocketBase Service  
   [Service]  
   User=plesk  
   WorkingDirectory=/var/www/vhosts/siteniz.com/httpdocs  
   ExecStart=/var/www/vhosts/siteniz.com/httpdocs/pocketbase serve  
   [Install]  
   WantedBy=multi-user.target  
   ```

### B) cPanel  
1. **Static Export (Next.js):**  
   ```bash  
   npm run build  
   npm run export  
   ```  
   - `out` klasörünü `public_html`'e yükleyin.  

2. **PocketBase için Reverse Proxy:**  
   `.htaccess` dosyasına ekleyin:  
   ```apache  
   RewriteEngine On  
   RewriteRule ^/api/(.*) http://localhost:8090/api/$1 [P]  
   ```

---

## 🔒 **Güvenlik & Performans**  

### Temel Önlemler  
- **SPF/DKIM:** Plesk/cPanel DNS ayarlarından ekleyin.  
- **Cloudflare:** DNS ve DDoS koruması için yönlendirin.  
- **Yedekler:** Plesk Backup Manager veya `pg_dump` (PostgreSQL).  

### Performans İpuçları  
- **CDN:** Cloudflare veya Netlify ile statik dosyaları cache'leyin.  
- **Ölçeklendirme:**  
  - **PostgreSQL Replikasyonu:** Master-slave yapısı kurun.  
  - **Load Balancer:** Nginx ile trafiği dağıtın.  

---

## ❓ **Sık Sorulan Sorular**  

**1. SQLite → PostgreSQL geçişinde veri kaybı olur mu?**  
Hayır, `pgloader` veya manuel dump ile sorunsuz taşıyabilirsiniz.  

**2. Docker kullanmazsam Plesk'te sorun yaşar mıyım?**  
Hayır, Plesk Node.js eklentisi ve systemd ile sorunsuz çalışır.  

**3. E-ticaret entegrasyonu için ne önerirsiniz?**  
PocketBase hooks ile Stripe API veya MedusaJS kullanın.  

---

## 📚 **Kaynaklar**  
- [PocketBase Dokümantasyonu](https://pocketbase.io/docs)  
- [SvelteKit Rehberi](https://kit.svelte.dev)  
- [Plesk Node.js](https://www.plesk.com/blog/3-ways-to-deploy-node-js-applications-with-plesk)  

---

**🎯 Sonuç:** Bu stack ile MVP'yi 1 günde çıkarabilir, gerektiğinde PostgreSQL ve Docker ile ölçeklendirebilirsiniz.  

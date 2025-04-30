# Corporate FullStack Project Template  
**PocketBase (Backend) + SvelteKit (Frontend) + PostgreSQL (Optional) + Docker (Optional)**  

---

## 🌟 **Overview**  
This template is optimized for fast and SEO-friendly corporate websites.  
- **Core Technologies:**  
  - **Backend:** PocketBase (Go) - Single binary, built-in admin panel, SQLite/PostgreSQL support.  
  - **Frontend:** SvelteKit - SSR/SSG hybrid, lightweight and fast.  
- **Flexible Architecture:**  
  - **Database:** Optional SQLite (simple) or PostgreSQL (scalable).  
  - **Deployment:** Portable with Docker or direct Plesk/cPanel deployment.  

---

## 🛠️ **Installation**  

### 1. Requirements  
- Node.js v18+  
- PocketBase v0.10+  
- PNPM v8+ (Optional)  
- Plesk/cPanel access (For deployment)  

### 2. Clone the Project  
```bash  
git clone https://github.com/user/project-name.git  
cd project-name  
```

### 3. Backend (PocketBase)  
```bash  
# Download and start PocketBase (SQLite default)  
wget https://github.com/pocketbase/pocketbase/releases/download/v0.10.3/pocketbase_0.10.3_linux_amd64.zip  
unzip pocketbase_0.10.3_linux_amd64.zip  
./pocketbase serve --dir ./pb_data  
```

### 4. Frontend (SvelteKit)  
```bash  
cd frontend  
pnpm install # or npm install  
pnpm dev # Development mode  
```

---

## 📦 **Database Options**  

### A) SQLite (Default)  
- **Advantage:** No setup required, saves to `pb_data/data.db`.  
- **Start:**  
  ```bash  
  ./pocketbase serve --dir ./pb_data  
  ```

### B) PostgreSQL (Scalable Solution)  
1. **Create PostgreSQL Database in Plesk/cPanel**  
2. **Start PocketBase with PostgreSQL:**  
   ```bash  
   ./pocketbase serve --postgres="postgres://user:password@localhost:5432/database_name"  
   ```
3. **Migrate Existing Data (Optional):**  
   ```bash  
   pgloader pb_data/data.db postgresql://user:password@localhost/database_name  
   ```

---

## 🐳 **Running with Docker (Optional)**  
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
1. **Create Node.js Application:**  
   - **Directory:** `/httpdocs/frontend`  
   - **Start Command:** `npm run build && npm run start`  
   - **Environment Variables:** `NODE_ENV=production`  

2. **Run PocketBase with Systemd:**  
   ```bash  
   sudo nano /etc/systemd/system/pocketbase.service  
   ```  
   ```ini  
   [Unit]  
   Description=PocketBase Service  
   [Service]  
   User=plesk  
   WorkingDirectory=/var/www/vhosts/yoursite.com/httpdocs  
   ExecStart=/var/www/vhosts/yoursite.com/httpdocs/pocketbase serve  
   [Install]  
   WantedBy=multi-user.target  
   ```

### B) cPanel  
1. **Static Export (SvelteKit):**  
   ```bash  
   npm run build  
   npm run export  
   ```  
   - Upload the `out` folder to `public_html`.  

2. **Reverse Proxy for PocketBase:**  
   Add to `.htaccess`:  
   ```apache  
   RewriteEngine On  
   RewriteRule ^/api/(.*) http://localhost:8090/api/$1 [P]  
   ```

---

## 🔒 **Security & Performance**  

### Basic Measures  
- **SPF/DKIM:** Configure in Plesk/cPanel DNS settings.  
- **Cloudflare:** Route DNS and enable DDoS protection.  
- **Backups:** Use Plesk Backup Manager or `pg_dump` (PostgreSQL).  

### Performance Tips  
- **CDN:** Cache static files with Cloudflare or Netlify.  
- **Scaling:**  
  - **PostgreSQL Replication:** Set up master-slave.  
  - **Load Balancer:** Distribute traffic with Nginx.  

---

## ❓ **Frequently Asked Questions**  

**1. Will data be lost during SQLite → PostgreSQL migration?**  
No, you can safely migrate using `pgloader` or manual dump.  

**2. Will there be issues on Plesk without Docker?**  
No, Plesk Node.js extension and systemd work seamlessly.  

**3. What do you recommend for e-commerce integration?**  
Use PocketBase hooks with Stripe API or MedusaJS.  

---

## 📚 **Resources**  
- [PocketBase Documentation](https://pocketbase.io/docs)  
- [SvelteKit Guide](https://kit.svelte.dev)  
- [Plesk Node.js](https://www.plesk.com/blog/3-ways-to-deploy-node-js-applications-with-plesk)  

---

**🎯 Result:** With this stack, you can launch an MVP in 1 day and scale with PostgreSQL/Docker when needed.

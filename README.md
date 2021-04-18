# NGINX.conf

`COPY nginx.conf /etc/nginx/conf.d/default.conf`

```
server {
    listen 80;
    listen 443 ssl;

    ssl_certificate      cert.pem;
    ssl_certificate_key  cert.key;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        rewrite ^\/api\/(.*)$ /$1 break;
        proxy_pass http://backend:3000;
    }
}
```

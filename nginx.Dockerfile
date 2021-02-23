FROM nginx:stable-alpine

WORKDIR /etc/nginx

COPY cert.pem .

COPY cert.key .
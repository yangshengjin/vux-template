FROM node:8.9.1
#RUN apt-get update \ 
#    && apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 8080
RUN npm install \
    && npm run build \
    && cp -r dist/* /usr/local/nginx/html \
    && rm -rf /app

CMD ["nginx","-g","daemon off;"]

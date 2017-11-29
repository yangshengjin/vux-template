FROM node:8.9.1
# RUN sudo apt-get update \    && sudo apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  source /home/ysj/nvm/nvm/nvm.sh \ && nvm use node v8.9.1  \  && npm install \     && npm run build \     && cp -r dist/* /var/www/html \     && rm -rf /app
CMD ["nginx","-g","daemon off;"]

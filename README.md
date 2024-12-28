## 📌  Deploying ReactJS App on Ubuntu Server 20.04 using Nginx

![image](https://github.com/user-attachments/assets/88e8d2c2-338c-490d-aac8-00f899234630)


## Medium Link:

 - [ReactJs Deployment](https://medium.com/@thekinv21/deploying-reactjs-app-on-ubuntu-server-20-04-using-nginx-9a4970b8a955)
 - [Spring Boot on Tomcat 10 Deployment](https://medium.com/@thekinv21/deploy-spring-boot-on-tomcat-10-with-nginx-autodeploy-ci-cd-via-github-actions-on-ubuntu-24-04-43849a43211d)
 - [NextJS Deployment](https://medium.com/@thekinv21/deploying-next-js-app-on-ubuntu-server-20-04-with-nginx-and-pm2-c573e4da37b8)
 - [PostgreSql Deployment](https://medium.com/@thekinv21/deploying-postgresql-database-on-ubuntu-server-20-04-fc7e6827b129)
 - [NestJS Deployment](https://medium.com/@thekinv21/deploying-a-nestjs-app-with-pm2-on-a-ubuntu-server-20-04-using-nginx-996a6533f2b7)



## Example:

```
server {
  server_name vadimkiniabaev.site;
  location / {
    root /var/www/specific_repo_name;
    try_files $uri /index.html;
    proxy_set_header Host $host;
  }
}
```

Nginx conf root yoluna ne verdiysen , proje build aldıktan sonra oluşan dist dosyasını o vermiş olduğun root dosyasının altına taşımalısın;


## 8) All command shortcut:

```
cd /home/your_repo_name && rm -rf node_modules package-lock.json && git pull && git fetch && npm install && npm run build && sudo cp -r dist/* /var/www/specific_repo_name
```


# Deploy a React App To a VPS | Ubuntu 20.04 Server With NGINX

Deploy etmek için hazırlanan dokümantasyondur ve bu süreçte nasıl bir yol izleneceğini hakkında bilgi edinerek yapılmıştır...



### 1.ADIM

VPS satın alınmalıdır çünkü biz deployment kısmını vps üzerinden yapacağız..

Vps satın almak için de bu siteyi tercih edebilirsiniz...

- [Vps Satın al](https://my.alwyzon.com/)

![Ekran Resmi 2024-07-13 11 36 29](https://github.com/user-attachments/assets/06a60ed2-cb60-4d0e-8376-6485f688a170)

Bu liste içindeki VPS tercihi nasıl yapılır?

```
Eğer 1'den fazla uygulamamızı deploy 
etmek istiyorsak 2.seçenekteki VPS almalıyız 
ama sadece 1.tane ise 1.seçenekteki yeterli olacaktir...
```


Seçeneklerden birisini seçtiğiniz zaman karşınıza resimdeki gibi bir ekran çıkacaktır ve bu ekranda bulunan form alanlarını aşağıdakı resimdeki gibi doldurmanız gerekecektir..

![Ekran Resmi 2024-07-13 11 47 20](https://github.com/user-attachments/assets/7801277e-ce11-4ce6-adf4-c510ffd473e5)

Note: HOSTNAME olarak istediğinizi verebilirsiniz..

###

Satın alım işleminden sonra size aşağıdaki gibi bir e-mail gelecektir..



![Ekran Resmi 2024-10-13 23 46 09](https://github.com/user-attachments/assets/9976edf7-9803-4939-bc79-c837331e4c43)



### 2.ADIM

Sunucuya giriş yapmak için size mail içindeki kullanıcı adı ve şifre ile terminalinizi açarak giriş yapabilirsiniz

![Ekran Resmi 2024-07-13 12 18 36](https://github.com/user-attachments/assets/e854af2c-a7b1-4ff5-96ae-f145a01251e5)

Örnek: Eğer giriş başarılı ise terminalinizde şu şekilde bir görüntü çıkacaktır

![Ekran Resmi 2024-07-13 12 24 23](https://github.com/user-attachments/assets/51e37687-6c7f-453d-85a4-735b22d1cdac)



### 3.ADIM: VPS servera NGINX kurma 

NGINX - web sunucuda ( YAYICI ) olarak görev yapmaktadır, örneğin bir sunucuda 3 tane uygulamayı deploy ettiğimiz düşünün HTTP metoduyla request geldiğinde onun hangi uygulamaya gideceğini NGINX belirler

#### ÖNEMLİ


- Web sunucuda default olarak apache2 kurulu geliyor olabilir , biz NGINX kurmak istediğimizde ikisi arasında CONFLICT olabilir,
eğer Sunucuya NGINX kurmak istiyorsanız APACHE2'yi silmeniz gerekiyor

NOTE: sunucuda apache2 kurulu olup olmadığını öğrenmek için şu komutu terminalinizde yazmanız gerekmektedir 


```
systemctl status apache2
```

##


- Eğer sunucuda APACHE2 var ise ve siz NGINX kullanmak istiyorsanız
aşağıdaki komutları yazarak web sunucunuzdan apache2'yi kaldırabilirsiniz..



#### APACHE2 silme adımları

  - systemctl stop apache2
  - systemctl disable apache2
  - apt remove apache2

Bu adımları izledikten sonra apache2 web sunucunuzdan kaldırılmış oldu..

#### DIKKAT EDİLMELİDİR ( bu komut bütün repoları silecektir )

NGINX kurmadan önce tüm repository temizlemek gerekiyor bunu yapabilmek için aşağıdaki komutu yazmanız gerekmektedir

  - apt clean all

NOTE: bu komutu çalıştırdığınızda aşağıdaki hata ile karşılaşabilirsiniz, bu hatayı önlemek için root user olmanız gerekmektedir

![Ekran Resmi 2024-07-13 13 08 20](https://github.com/user-attachments/assets/3f616c42-3953-48f3-aa09-34a56c56ac3a)

Root user olma komutu : 

  ## macOs için: 
    sudo su
  
  ## Windows için:

    windows kullanmadığım için bilmiyorum



Paketlerin son sürümünü yüklemek için aşağıdaki komutu kullanabilirsiniz

  - apt update

İndirilen Paketlerin en son güncel versiyonunu almak için aşağıdaki komutu kullanabilirsiniz

  - apt dist-upgrade


## Buradan itibaren NGINX kurmaya başlıyoruz 
    
  Web servera NGINX kurma komutu:
    
  - apt install nginx


  Web servera NGINX kurulup kurulmadığını anlamak için terminale aşağıdaki komutu yazabilirsiniz:
    
  - nginx -v

![Ekran Resmi 2024-07-13 13 20 40](https://github.com/user-attachments/assets/f488c65b-3163-4862-a753-0337f992a907)


Bu adımları izlediyseniz web sunucunuza nginx başarıyla kurulmuş demektir ve versiyonunu da görmüş olacaksınız...



###

#### Sunucuya Web Browser üzerinden size verilen IP address ile gittiğinizde NGINX kurduğunuz halde APACHE2 web site html görünütüsü geliyor ise onu düzeltmeniz gerekebilir


![Ekran Resmi 2024-07-13 13 42 50](https://github.com/user-attachments/assets/fa7e9d64-05d0-4b9f-b234-21c625f46a8a)


NOT:

apache2 web sunucunuza default olarak kurulu geldiyse ve NGINX kurmak için apache2'yi kaldırdıysanız, size verilen IP ile web sunucunuza gittiğinizde apache2 HTML görüntüsü ile karşılaşmış olabilirsiniz. NGINX HTML sayfasına gitmek için izlemeniz gereken adımlar aşağıdaki resimde verilmiştir

![Ekran Resmi 2024-07-13 13 51 03](https://github.com/user-attachments/assets/efcb67cb-d0a8-45b5-9bdc-3b53ffd3506f)

Web üzerinden hostunuza şu şekilde gidebilirsiniz

- IP_ADDRESS/index.nginx-debian.html


Böylece kurmuş olduğunuz NGINX html'i görüntülemiş olursunuz

![Ekran Resmi 2024-07-13 14 03 40](https://github.com/user-attachments/assets/1d9f4400-4329-4a26-94f5-8c86b0672156)



###



### 4.ADIM: REACTJS , NEXTJS projeleri için gereksinimlerin kurulması:

- NodeJS
- Npm
- Git

#### NOT:


```
Kurulumu yapmadan önce nginx html sayfasını 
görmüş olmanız ve onun olduğu dizine geçmeniz gerekmektedir
```



## VPS'e Kurulacak Uygulamalar ve Konfigürasyonlar

   - sudo apt update
   - sudo apt upgrade


## NVM kullanarak NodeJS,Npm kurulması:


NVM, Node.js geliştirme sürecinde ortaya çıkabilecek sürüm uyumsuzluklarından kaynaklanan sorunları da ortadan kaldırır. Farklı projeler arasında geçiş yaparken veya projelerinizi başka geliştiricilerle paylaşırken, Node.js sürümünün tutarlılığını sağlamak için NVM’i kullanabilirsiniz



#### NVM'in Kurulması

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

- Nvm kurulduktan sonra aşağıdaki kodu da çalıştırmalısınız

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

```

 - Ardından terminal kapatılıp tekrardan açılır.

```
nvm ls
nvm install 18 ( NodeJS istediğiniz versiyonunu yazabilirsiniz )

```

- Git kurmak için

   `apt install git`

- Bu adımı yazdıktan sonra NodeJS sunucunuza kurulmuş olacaktır , burada `NPM` otomatik olarak gelmektedir



## NVM kullanmadan NodeJS, Npm kurulması:

- Nodejs kurmak için
  
  `apt install nodejs`

- Npm kurmak için 

   `apt install npm`

- Git kurmak için

   `apt install git`


##



## SSH Key'i Üretme ve SSH ile Github Clone

 - Öncelikle VPS üzerinde SSH Key'leri üretilir.

 `root@vadimkiniabaev:~#`  ssh-keygen -t ed25519 -a 200 -C "thekinv21@gmail.com"


```
Generating public/private ed25519 key pair.
Enter file in which to save the key (/root/.ssh/id_ed25519): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /root/.ssh/id_ed25519
Your public key has been saved in /root/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:1lTeneByA8DheueQEKe1pKAuIq1iMvigp0M02XJ5tMA thekinv21@gmail.com
The key's randomart image is:
+--[ED25519 256]--+
|  .  . ..*o...   |
|   E... O..oo....|
|  o.+ .+ o...+...|
| *.+ o  oo. o .  |
|+.=..  .S+..     |
|+o.    .. +      |
|O.         .     |
|*+.              |
|o+.              |
+----[SHA256]-----+

```

 - Daha sonra Public Key kopyalanır.



```
cd
cd .ssh
more id_ed25519.pub

```

- Github'a browser'dan girilir, Settings > Authorized Keys olarak kopyalanmış olan Public Key kaydedilir.

![Ekran Resmi 2024-07-13 15 36 36](https://github.com/user-attachments/assets/0f18d8dc-c343-4a73-9dd3-3da2c79da078)

- Repository'nin clone'lanacağı klasörü oluşturup git clone komutunu çalıştırırız.


```
cd /home/alwyzon
mkdir react-deployment
chmod 777 react-deployment/
cd react-deployment/

```


git clone git@github.com:thekinv21/deployment.git

## 



### DNS adres almak için

- [ Dns server al ](https://account.godaddy.com)


Buradan kendiniz istediğiniz dns alabilirsiniz ve ayarlarını yapabilirsiniz


![Ekran Resmi 2024-07-13 17 09 40](https://github.com/user-attachments/assets/367d4f30-571f-4500-ae19-00b23bb8992e)



### DNS adresi aldıktan sonra aşağıdaki ayarları yapmanız gerekmektedir..

![Ekran Resmi 2024-10-13 23 41 48](https://github.com/user-attachments/assets/0c8ad301-410f-441f-85a3-028cf9300ab9)


##





## NGINX Konfigürasyonu

```
sudo nano /etc/nginx/sites-available/default
```

Nginx Konfigürasyonu ayarları aşağıdaki resimde gösterilmiştir

![image](https://github.com/user-attachments/assets/f9e11804-8eeb-4a1b-98ae-7efe5e68c2b5)


## Certbot ve SSL Ayarlarının Yapılması

1.adım:

        sudo apt install certbot python3-certbot-nginx

![Ekran Resmi 2024-07-13 20 32 30](https://github.com/user-attachments/assets/069cd4c1-d15b-4d0a-a795-bf7fbcfe4b22)

2.adım:

        sudo certbot --nginx -d vadimkiniabaev.site


![Ekran Resmi 2024-07-13 20 36 31](https://github.com/user-attachments/assets/ab296bc7-2bd8-4929-a13e-da72875702d4)


3.adım: Certbot Test edilmesi

         certbot renew --dry-run


![Ekran Resmi 2024-07-13 20 43 24](https://github.com/user-attachments/assets/72336f65-6469-4123-8e8e-eb3c797c3ec0)


## NGINX Restart

        sudo systemctl restart nginx

## 



### ÖNEMLİ ADIMLAR BUNU TAKİP ETMELİYİZ


1) `/home/alwyzon` altına Git respositorinizi klonlayınız:

       git clone repository_url_ssh


2) Repository klasörünün içine girip onu pull etmeliyiz

       git pull


3) Npm install ile bütün paketleri indirmeliyiz

       npm install

4) Projeyi build etmeliyiz

       npm run build

###

5) Nginx conf içinde vermiş olduğumuz root adı ile aynı isimde olan klasör oluşturup onu `/var/www/` klasörü altına eklemeliyiz

       sudo mkdir /var/www/reactjs-deployment ( reactjs-deployment bizim nginx conf içinde root adına verdiğimiz klasör adı )


6) Projenin build ettikten sonra dist dosyası vardır o dosyayı oluşturduğumuz dosyanın altına koymalıyız
   
 - Bu işlemi yaparken Git projenizin dosyasının içinde yapmalısınız
   
       sudo cp -r dist/* /var/www/reactjs-deployment/



7) Bu işlemleri yaptıktan sonra projeniz başarıyla deploy edilmiş olacaktir


![image](https://github.com/user-attachments/assets/c3aae139-fdc9-4535-824f-a44d77eaa218)


 





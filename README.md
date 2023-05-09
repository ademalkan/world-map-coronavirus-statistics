# World Map Coronavirus Statistics Setup

## Live Project URL

World Map
```bash
https://main--brilliant-longma-b7e432.netlify.app/
```

Country Detail

```bash
https://main--brilliant-longma-b7e432.netlify.app/niger
https://main--brilliant-longma-b7e432.netlify.app/turkey
https://main--brilliant-longma-b7e432.netlify.app/spain
```

Country Detail Error

```bash
https://main--brilliant-longma-b7e432.netlify.app/randomCountry
https://main--brilliant-longma-b7e432.netlify.app/aaaaaaaa
https://main--brilliant-longma-b7e432.netlify.app/bbbbbbb
```


## Kurulum

1. Aşağıdaki kod ile projeyi istediğiniz bir dizine klonlayın.
```bash
git clone https://github.com/ademalkan/world-map-coronavirus-statistics.git
```

2. Klonan projenin dizinine geçin
```bash
cd world-map-coronavirus-statistics
```

3. Proje için gerekli paketlerin kurulumunu yapın
```bash
npm i
```



## Dockerize etme

1. Docker imajınızı oluşturmak için aşağıdaki komutu çalıştırın: 
```bash
docker build -t world-map-coronavirus-statistics .
```

2. Docker konteynerinizi çalıştırmak için aşağıdaki komutu kullanın:

```bash
docker run -p 3000:3000 world-map-coronavirus-statistics
```

3. Projeyi http://localhost:3000 adresinde görüntüleyebilirsiniz.


## Uygulama Hakkında

Uygulama bir dünya haritası üzerinde açılıyor ve üzerine tıklanan ülkenin verileri popup içerisinde görüntüleniyor. Buna ek olarak gene case'de istenildiği üzere url üzerinden istenilen ülkenin detayları görünebiliyor. Örneğin  http://localhost:3000/spain veya  http://localhost:3000/turkey ile o ülkeye ait veriler görüntülenebilir.


## Uygulamadan Ekran Görüntüleri

Dünya haritası üzerinden herhangi bir ülkenin üzerine tıklandığında bu şekilde bilgileri gelmektedir.

![Ekran görüntüsü 2023-05-09 213506](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/b1bff811-e1ce-4607-9987-6c6ad316d35f)

![Ekran görüntüsü 2023-05-09 213550](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/a1998b84-d74e-47d5-b84c-699897ad8d60)


Ülke detay url'inde eğer o ülkeye ait veri yoksa görüntülenen ekran 

![Ekran görüntüsü 2023-05-09 203920](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/879fa3a8-343c-4a8c-8317-f7395a61c1d6)

Ülke detay url'inde ülkelere ait gelen verilerin görünümü

![Ekran görüntüsü 2023-05-09 203955](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/7799d07c-8206-4140-a085-0264b5dbf196)

![Ekran görüntüsü 2023-05-09 213428](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/b57e76b4-7ed0-48d8-8f7a-5c40861dbf5b)


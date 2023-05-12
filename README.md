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

![Ekran görüntüsü 2023-05-12 111827](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/f292bff5-d065-4d39-8859-12ebce9e75a9)

![Ekran görüntüsü 2023-05-12 111706](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/ac53a3a7-e197-4080-b061-55acf0518654)

![Ekran görüntüsü 2023-05-12 111733](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/8ace6648-a33d-443a-a141-78bf637f6b60)

![Ekran görüntüsü 2023-05-12 111757](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/f010b760-b687-44a9-b501-5a92e6ed519e)



Ülke detay url'inde eğer o ülkeye ait veri yoksa görüntülenen ekran 

![Ekran görüntüsü 2023-05-12 111901](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/56ff1dbf-224c-4a75-9487-67aba90076ee)

Ülke detay url'inde ülkelere ait gelen verilerin görünümü

![Ekran görüntüsü 2023-05-12 111926](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/5bfe6b96-561a-4984-acf1-b777eb76ec60)

![Ekran görüntüsü 2023-05-12 111951](https://github.com/ademalkan/world-map-coronavirus-statistics/assets/43451577/5456a4cf-b557-47b5-b0d7-91424f86f964)


# kodluyoruzilkrepo
Kodluyoruz Eğitimi kapsamında açtığım ilk repo

Bu repo [Kodluyoruz](https://app.patika.dev/referral/zeynep-dmrl) Front-End Eğitiminde oluşturduğumuz ilk repo. 


## Installation

Henüz versiyon kontrolü altında olmayan bir projenin dizininde, boş bir git deposu oluşturun.

```bash
git init
```

Öncelikle projeyi clonelayın. 

```bash
git clone https://github.com/(kullanıcı adı)/(repo adı).git
```

## Usage

Projeyi cloneladıktan sonra Visual Studio Code programında açınız.

Windows için:
```windows
cd kodluyoruzilkrepo
code .
```

Linux için:
```linux
cd kodluyoruzilkrepo
code .
```

Yeni eklenen veya üzerinde değişiklik yapılacak dosyaları staged ortamına göndermek için:


```bash
git add README.md
```

Commit, staged ortamına alınan dosyaların Local Repository’e gönderilmesidir. En iyi uygulama yöntemi her kayıt sırasında yapılan değişiklikleri açıklayıcı bir mesaj eklemektir. Ayrıca her commit benzersiz bir kimliğe (unique ID) sahip olur. Bu sayede eski bir commit'e geri dönebilirsiniz ve herhangi bir kayıp yaşama ihtimaliniz kalmaz.

```bash
git commit -m "readme oluşturuldu"
```

Main branch oluşturalım.

```bash
git branch main
```

Son aşamaya gelmeden önce ise remote bağlantımızı ekleyelim.


```bash
 git remote add origin 'repo-link'
```


Repomuza dosyalarımızı gönderelim.

```bash
git push -u origin main
```



## License
[MIT](https://choosealicense.com/licenses/mit/)

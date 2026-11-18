# MEYSA Reviews V8

Ticimax ürün detay sayfasında Instagram'dan aktarılan yorumları gösteren statik sistem.

- `meysa-reviews.js`: Tek yükleme motoru ve tasarım.
- `data/limited-kase-kaban-aci-kahve.json`: İlgili ürünün 137 yorumu.

GitHub Pages: Settings > Pages > Deploy from a branch > main / (root).

Ticimax Tüm Sayfalar kodunun sonuna yalnızca şu satırı ekleyin:

```html
<script defer src="https://dpu-ai.github.io/meysa-reviews/meysa-reviews.js"></script>
```

Yalnızca yayımlanması uygun yorumları ve kısaltılmış isimleri ekleyin. Yeni ürünler için veri dosyası eklenmeli ve `meysa-reviews.js` içindeki `FILES` haritasına yeni ürün yolu tanımlanmalıdır.

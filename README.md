# CI/CD o‘quv loyihasi

Ushbu loyiha GitHub Actions yordamida uch bosqichli pipeline yaratadi:
1. **Test** — `npm test` orqali avtomatik testlar.
2. **Build** — `npm run build` orqali `dist/` papkasini yaratish.
3. **Deploy** — GitHub Pages xizmatiga joylashtirish.

## Mahalliy ishga tushirish
Node.js 20 yoki undan yangi versiyasini o‘rnating.

```bash
npm test
npm run build
```

## GitHub orqali deploy qilish
1. Loyihani GitHub repositoryga yuklang va asosiy branch nomini `main` qiling.
2. Repository → Settings → Pages bo‘limiga kiring.
3. Build and deployment → Source qismida **GitHub Actions** ni tanlang.
4. Actions bo‘limida `CI-CD Pipeline` jarayonini kuzating.
5. Test va build muvaffaqiyatli bo‘lsa, deploy tugaydi va Pages manzili workflow natijasida ko‘rinadi.

Pull request yaratilganda test va build ishlaydi, deploy esa faqat main branch ga push qilinganda bajariladi.

git pull
npm ci
npm run build
rm -rf /var/www/dot-preview.ru/html
mv dist /var/www/dot-preview.ru/html


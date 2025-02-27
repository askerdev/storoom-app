git pull
npm ci
npm run build
rm -rf /var/www/platform.storoom.com/html
mv dist /var/www/platform.storoom.com/html


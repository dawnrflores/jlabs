edit ".env.example" filename to ".env"
right click "docker-compose.yml" -> select "Compose Up"
in terminal type: 
docker exec -it jlabs-app-1 bash
composer install
npm install
php artisan:migrate
php artisan db:seed

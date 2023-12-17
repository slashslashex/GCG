docker compose build
docker compose up -d
php artisan migrate:fresh --seed

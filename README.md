1. docker compose build
2. docker compose up -d
3. docker exec -t GCG_core bash
4. php artisan migrate:fresh --seed
5. php artisan queue:work
6. 127.0.0.1:666
7. Учетки admin adminadmin и user useruser
8. Если на что-то будет ругаться, то npm install && npm run dev
9. Среды для работы с базой нет, можешь подключиться со своей на localhost:5432 или jdbc:postgresql://localhost:5432/postgres креды root/root
10. Для проверки писем http://127.0.0.1:8025/

--------------------------------------------------------------------------
## ЗАДАНИЕ


Разработать функционал на Laravel c базой данных PostgreSQL.
Реализовать вывод списка продуктов, просмотр карточки продукта, добавление,  редактирование и удаление продукта.

Создать таблицу «products»:
-------------------------------------------------------
ID uint, autoincrement
-------------------------------------------------------------
ARTICLE varchar(255), unique index
-------------------------------------------------------
NAME varchar(255)
-----------------------------------------------------
STATUS varchar(255)
"available" | "unavailable"
---------------------------------------------------
DATA jsonb
несколько разных полей 
(например, Color и Size) 
на своё усмотрение
----------------------------------------------------
timestamps
-------------------------------------------
soft deletes
------------------------------------------

Создать Eloquent-модель «Product», связанную с таблицей «products».
В модели реализовать Local Scope для получения только доступных продуктов (STATUS = “available”).

Сделать валидацию создания и редактирования:
NAME — обязательное поле, длиной не менее 10 символов;
ARTICLE — обязательное поле, только латинские символы и цифры, уникальное в таблице.

Создать роль администратора, который может редактировать артикул, остальным пользователям можно редактировать всё, кроме артикула.
Роль пользователя можно узнать из настроек (config(‘products.role’)).
Реализовать валидацию и проверку прав (контроллер, модель, отдельный сервис — на своё усмотрение).

Дополнительно:
При создании продукта реализовать отправку на заданный в конфигурации Email (config(‘products.email’)) уведомления (Notification) о том, что продукт создан.
Уведомление должно отправляться через задачу (Job) в очереди (Queue).
Готовое приложение упаковать в docker.

Интерфейс приложения реализовать соответственно макету (см. ссылку): 
https://www.figma.com/file/pVspJcvzwZUYynT2dogGG2/PIN-ERP-ТЗ-03.02.2022-(Copy)?type=design&node-id=0-1&mode=design&t=pzPc1ZJlca6HnPL3-0

Готовое приложение выложить на GitHub / Bitbucket
-------------------------------------------------------------------

## TASK


Develop functionality in Laravel with a PostgreSQL database. Implement product listing, product details view, product addition, editing, and deletion.

Create the 'products' table:

ID uint, autoincrement
ARTICLE varchar(255), unique index
NAME varchar(255)
STATUS varchar(255) "available" | "unavailable"
DATA jsonb multiple fields (e.g., Color and Size) at your discretion
timestamps
soft deletes
Create an Eloquent model 'Product' linked to the 'products' table. Implement a Local Scope in the model to retrieve only available products (STATUS = 'available').

Implement validation for creation and editing: NAME - a mandatory field, at least 10 characters long; ARTICLE - a mandatory field, only Latin characters and numbers, unique in the table.

Create an administrator role that can edit the article; other users can edit everything except the article. Obtain the user role from the settings (config('products.role')). Implement validation and permission checks (controller, model, a separate service - as you see fit).

Additionally: When creating a product, implement sending a notification (Notification) to the email specified in the configuration (config('products.email')) that the product has been created. The notification should be sent through a task (Job) in a queue. Package the finished application in Docker.

Implement the application interface according to the layout (see link):
https://www.figma.com/file/pVspJcvzwZUYynT2dogGG2/PIN-ERP-ТЗ-03.02.2022-(Copy)?type=design&node-id=0-1&mode=design&t=pzPc1ZJlca6HnPL3-0

Publish the finished application on GitHub/Bitbucket

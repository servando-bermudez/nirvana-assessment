# General Commands
build:
	docker-compose build
up-all:
	docker-compose up
down-all:
	docker compose down

# Backend Commands
run-backend:
	docker-compose up --no-log-prefix api

# Database Commands
run-db:
	docker-compose up mysql-database
migration-generate:
	docker-compose run api npm run migration:generate --name=${name}
migration-create:
	docker-compose run api npm run migration:create --name=${name}
apply-migrations:
	docker-compose run api npm run migration:run
revert-migration:
	docker-compose run api npm run migration:revert

# Bash Commands
npm:
	docker-compose run api npm ${command}
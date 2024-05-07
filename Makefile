## Variables ##

KNEXFILE :=  config/knex.js
BIN := node_modules/.bin

compile:
	tsc

install:
	npm install

run: compile
	npm start

infra:
	docker-compose up -d

infra-stop:
	docker-compose down

migrate:
	DATABASE_URL=postgres://postgres:postgres@localhost:5432/wmc-database $(BIN)/knex migrate:latest --knexfile=$(KNEXFILE)

rollback:
	DATABASE_URL=postgres://postgres:postgres@localhost:5432/wmc-database $(BIN)/knex migrate:rollback --knexfile=$(KNEXFILE)

seed:
	$(BIN)/knex seed:run --knexfile=$(KNEXFILE)

.PHONY: install
	run
	infra
	infra-stop
	migrate
	seed
	rollback
	compile
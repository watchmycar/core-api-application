## Variables ##

KNEXFILE :=  config/knex.js
BIN := node_modules/.bin

install:
	npm install

run:
	npm start

infra:
	docker-compose up -d

infra-stop:
	docker-compose down


migrate:
	DATABASE_URL=postgres://postgres:postgres@localhost:5432/wmc-database $(BIN)/knex migrate:latest --knexfile=$(KNEXFILE)

seed:
	$(BIN)/knex seed:run --knexfile=$(KNEXFILE)

rollback:
	$(BIN)/knex migrate:rollback --knexfile=$(KNEXFILE)


.PHONY: install
	run
	infra
	infra-stop
	migrate
	seed
	rollback
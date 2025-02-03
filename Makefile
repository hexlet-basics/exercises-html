-include /opt/basics/common/common.mk

compose-setup: compose-build compose-install

compose:
	docker compose up

compose-bash:
	docker compose run exercises bash

compose-test:
	docker compose run exercises make test

compose-install:
	docker compose run exercises npm ci

compose-build:
	docker compose build

code-lint:
	htmlhint modules/**/*.{htm,html}

compose-description-lint:
	docker compose run exercises make description-lint

compose-schema-validate:
	docker compose run exercises make schema-validate

ci-check:
	docker compose --file docker-compose.yml build
	docker compose --file docker-compose.yml up --abort-on-container-exit

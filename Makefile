-include common.mk

compose-setup: compose-build compose-install

compose:
	docker-compose up

compose-install:
	docker-compose run exercises npm ci

compose-build:
	docker-compose build

code-lint:
	htmlhint modules/**/*.{htm,html}

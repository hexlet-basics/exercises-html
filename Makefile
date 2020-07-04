-include /opt/basics/common/common.mk

compose-setup: compose-build compose-install

compose:
	docker-compose up

compose-bash:
	docker-compose run exercises bash

compose-install:
	docker-compose run exercises npm ci

compose-build:
	docker-compose build

code-lint:
	htmlhint modules/**/*.{htm,html}

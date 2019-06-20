compose-setup: compose-build compose-install
compose:
	docker-compose up

compose-test:
	docker-compose -f docker-compose.test.yml up

compose-lint:
	docker-compose run exercises make lint

compose-install:
	docker-compose run exercises npm install

compose-bash:
	docker-compose run exercises bash

compose-build:
	docker-compose build

docker-build:
	docker build -t hexletbasics/exercises-html .

docker-push:
	docker push hexletbasics/exercises-html

docker-release: docker-build docker-push

SUBDIRS := $(wildcard modules/**/*/.)

lint:
	yamllint modules

test: $(SUBDIRS)
$(SUBDIRS):
	@echo
	# npm run test -s -- $@
	make test -C $@
	@echo

.PHONY: all $(SUBDIRS)

# common script

all: prune workspace lib eslint docs format

workspace:
	echo $@
	npm run update

lib:
	echo $@
	cd packages/cjs-rb && npm run update

eslint:
	echo $@
	cd packages/config-eslint && npm run update

docs:
	echo $@
	cd apps/docs && npm run update

prune:
	echo $@
	rm -rf pnpm-lock.yaml package-lock.json yarn.lock
	find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
	find . -name 'dist' -type d -prune -exec rm -rf '{}' +
	find . -name 'build' -type d -prune -exec rm -rf '{}' +
	find . -name '.turbo' -type d -prune -exec rm -rf '{}' +
	
i:
	echo install
	make prune
	pnpm i

format:
	echo $@
	npm run format
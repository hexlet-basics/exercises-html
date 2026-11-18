#!/bin/bash

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$REPO_DIR" && FORCE_COLOR=1 vitest run "$OLDPWD/test.js"

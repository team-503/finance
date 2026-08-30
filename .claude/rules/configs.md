# Конфіги — у yaml, де інструмент це дозволяє

Заводячи новий конфіг, спершу перевір, чи читає інструмент yaml. Якщо читає — пиши yaml, не json і не js.

Уже в yaml: `.prettierrc.yaml`, `.lintstagedrc.yaml`, `pnpm-workspace.yaml`.

Лишаються в іншому форматі, бо інакше не вміють: `turbo.json`, `tsconfig.json`, `nest-cli.json`, `.swcrc`, `package.json`, `eslint.config.mjs`, `next.config.js`.

Коли yaml змушує писати милицю замість того, що в js робиться однією функцією, зваж обидва боки і напиши в конфізі рядок про те, чому там милиця. Приклад — `sh -c 'pnpm typecheck'` у `.lintstagedrc.yaml`: обгортка потрібна, щоб проковтнути імена файлів, які lint-staged дописує в кінець команди.

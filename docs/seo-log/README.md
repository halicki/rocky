# Daily SEO Loop — surfingwithrocky.com

Codzienny automatyczny proces SEO napędzany przez Claude Code.

## Jak to działa

Każdego dnia o **07:07 WITA** (czas Bali) scheduled agent uruchamia slash command `/daily-seo`, który:

1. Czyta poprzedni dzień z `INDEX.md` + ostatni snapshot
2. Zrzuca aktualne dane z Google Search Console przez Chrome MCP
3. Porównuje z dniem poprzednim — ocenia wpływ wczorajszej zmiany
4. Wybiera **jedną** akcję z najwyższym ROI wg `PLAYBOOK.md`
5. Implementuje ją (edycja pliku / nowa strona / nowy schema)
6. Buduje lokalnie (`npm run build`), commituje, pushuje na `master`
7. Vercel auto-deployuje, agent weryfikuje status
8. Zapisuje pełny log dnia do `YYYY-MM-DD.md` i dodaje linię do `INDEX.md`

## Struktura katalogu

- `INDEX.md` — rosnąca historia, jedna linia per dzień + obserwacje trendów
- `PLAYBOOK.md` — heurystyka wyboru akcji (priorytet ROI)
- `YYYY-MM-DD.md` — pełny snapshot + rationale + commit hash per dzień
- `README.md` — ten plik

## Ręczne uruchomienie

W Claude Code w katalogu `/Users/arek/code/rocky` odpal:

```
/daily-seo
```

Wymagane: zalogowana sesja Google Search Console w Chrome (extension MCP podłączony).

## Zarządzanie schedule

- **Lista zadań**: `mcp__scheduled-tasks__list_scheduled_tasks`
- **Pauza**: `mcp__scheduled-tasks__update_scheduled_task` z `enabled: false`
- **Usuń**: `mcp__scheduled-tasks__delete_scheduled_task`
- **Task ID**: `daily-seo-loop`

## Zasady bezpieczeństwa

Agent NIE ma prawa:
- modyfikować `package.json`, `next.config.ts`, globalnych stylów, core layoutu/nawigacji
- usuwać treści (tylko dodawanie/optymalizacja)
- zmieniać więcej niż ~3 plików dziennie (wyjątek: 1 nowy post MDX)
- pushować force ani pomijać hooków
- ruszać `docs/seo-strategy.md` i `docs/LOCAL_PACK_STRATEGY.md`

Jeśli build failuje → abort, brak commita, zapis błędu w logu.

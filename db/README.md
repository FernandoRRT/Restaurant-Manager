## Getting Started

First, build the DB container:

```bash
docker compose up --detach
```

## Knex commands

### Migrations

- Create the migration file with a custom name concat in the end after time stamp
  `yarn knex migrate:make <custom_name>`
import knex from './knex';

type MigrationResult = [batch: number, migrations: string[]];

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Error: missing knex command in argument');
    return;
  }

  const showMigrationResult = (
    label: string,
    [batch, migrations]: MigrationResult
  ) => {
    if (migrations.length === 0) {
      console.log('No migrations affected.');
      return;
    }
    console.log(label, 'batch:', batch);
    console.log('migrations:');
    console.log(migrations.map((s) => '- ' + s).join('\n'));
  };

  const showMakeAndVersionResult = (label: string, result: string) => {
    console.log('migrations:');
    console.log(label, 'result:', result);
  };

  switch (args[0]) {
    case 'migrate:up':
      showMigrationResult('migrate:up', await knex.migrate.up());
      break;

    case 'migrate:down':
      showMigrationResult('migrate:down', await knex.migrate.down());
      break;

    case 'migrate:latest':
      showMigrationResult('migrate:latest', await knex.migrate.latest());
      break;

    case 'migrate:make': {
      const name = args[1];
      if (!name) {
        console.error('Error: migration name is required');
        return;
      }
      showMakeAndVersionResult(
        'migrate:make',
        await knex.migrate.make(name, { directory: './db/migrations', name })
      );
      break;
    }

    case 'migrate:rollback': {
      // use includes instead of direct index comparison
      const all = args.includes('--all');
      showMigrationResult('rollback', await knex.migrate.rollback(undefined, all));
      break;
    }

    case 'migrate:status': {
      const [done, pending] = await knex.migrate.list();

      console.log(done.length, 'applied migrations');
      done.forEach((each: { name: string }) => console.log('- ' + each.name));

      console.log(pending.length, 'pending migrations');
      pending.forEach((each: { file: string }) => console.log('- ' + each.file));
      break;
    }

    case 'seed:run': {
      const rawResults = await knex.seed.run({ directory: './db/seeds' });
      const results = rawResults.flat(); // now string[]

      if (results.length === 0) {
        console.log('No seed files were run.');
      } else {
        console.log('Seeds run:');
        results.forEach((file: string) => console.log('- ' + file));
      }
      break;
    }

    default:
      console.error('Error: unknown arguments:', args);
  }
}

main()
  .catch((e) => console.error(e))
  .then(() => knex.destroy());

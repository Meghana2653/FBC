# FBC IT Database

The database contract is PostgreSQL-compatible.

- `schema.sql` creates the `enquiries` table and indexes.
- `seed.sql` adds one clearly marked demo row.

Create a database, run `schema.sql`, and set `DATABASE_URL` in the backend environment before connecting persistence.

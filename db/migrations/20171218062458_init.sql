-- migrate:up
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- migrate:down
DROP EXTENSION pgcrypto;
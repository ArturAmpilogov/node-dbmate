import { execSync } from 'child_process';

import { calculateBinaryPath } from './resolve';

class DbMate {
  private binaryPath: string;
  private dbUrl: string;

  constructor(dbUrl: string) {
    this.binaryPath = calculateBinaryPath();
    this.dbUrl = dbUrl;
  }

  async up() {
    execSync(`${this.binaryPath} --env DB_URL up`, {
      env: {
        DB_URL: this.dbUrl,
      },
    });
  }

  async down() {
    execSync(`${this.binaryPath} --env DB_URL down`, {
      env: {
        DB_URL: this.dbUrl,
      },
    });
  }

  async drop() {
    execSync(`${this.binaryPath} --env DB_URL drop`, {
      env: {
        DB_URL: this.dbUrl,
      },
    });
  }
}

export default DbMate;

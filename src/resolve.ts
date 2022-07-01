import { join } from 'path';
import { existsSync } from 'fs';

function archName(): string {
  switch (process.arch) {
    case 'x64':
      return 'amd64';
    case 'arm64':
      return 'arm64';
    default:
      throw new Error(`Unsupported architecture ${process.arch}`);
  }
}

function platformName(): string {
  switch (process.platform) {
    case 'darwin':
      return 'macos';
    case 'linux':
      return 'linux';
    case 'win32':
      return 'windows';
    default:
      throw new Error(`Unsupported platform: ${process.platform}`);
  }
}

/** Return a path to the dbmate binary */
function calculateBinaryPath(): string {
  const binaryName = `dbmate-${platformName()}-${archName()}`;
  const binaryPath = join(__dirname, '..', 'binaries', binaryName);

  if (!existsSync(binaryPath)) {
    throw new Error(`Could not locate binary: ${binaryPath}`);
  }

  return binaryPath;
}

export { calculateBinaryPath };

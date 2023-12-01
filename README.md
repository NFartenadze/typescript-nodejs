Guide for script usage:

    clean:
        Purpose: Removes the ./build directory to clean up previous build artifacts.
        Command: rimraf ./build

    build:
        Purpose: Cleans the build directory and then transpiles TypeScript files to JavaScript using the TypeScript compiler (tsc).
        Command: npm run clean && tsc
            npm run clean: Invokes the clean script to remove the ./build directory.
            tsc: Transpiles TypeScript files to JavaScript.

    start:
        Purpose: Runs the application using the Node.js runtime, executing the main JavaScript file in the src directory.
        Command: node src

    local:
        Purpose: Runs TypeScript files directly using ts-node. Useful for local development without the need to transpile files first.
        Command: ts-node src

    local:watch:
        Purpose: Uses nodemon to watch for changes in TypeScript files (*.ts) in the src directory. Automatically restarts the application using the local script when changes are detected.
        Command: nodemon src -e ts --exec 'npm run local'
            nodemon src -e ts: Monitors TypeScript files in the src directory.
            --exec 'npm run local': Executes the local script when changes are detected.

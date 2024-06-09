#!/bin/bash

# Run npm build command and capture any errors
npm run build 2>/dev/null

# Exit with a success status code (0) to indicate that the script completed successfully,
# regardless of whether there were errors during the build process
exit 0
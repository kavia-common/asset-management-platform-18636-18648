#!/bin/bash
cd /home/kavia/workspace/code-generation/asset-management-platform-18636-18648/frontend_asset_form
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


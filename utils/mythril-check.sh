#!/bin/bash

SOL_FILES="./contracts/*.sol"

if [[ "$SOL_FILES" = "" ]]; then
  exit 0
fi

PASS=true

printf "\nMythril validation:\n"

# Check for mythril
which myth &> /dev/null
if [[ "$?" == 1 ]]; then
  echo "\t\033[41mPlease install mythril\033[0m"
  exit 1
fi

for FILE in $SOL_FILES
do
  myth analyze "$FILE"

  if [[ "$?" == 0 ]]; then
    printf "\t\033[32mpassed: $FILE\033[0m"
  else
    printf "\t\033[41mfailed: $FILE\033[0m"
    PASS=false
  fi
done

if ! $PASS; then
  printf "\n\033[Mythril validation FAILED:\033[0m Please fix the errors and try again.\n"
  exit 1
else
  printf "\n\033[42mMythril validation SUCCEEDED\033[0m\n"
fi

exit $?
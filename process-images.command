#!/bin/zsh

cd "$(dirname "$0")"

echo "Processing images from assets/images/originals/ ..."
echo

python3 scripts/process_images.py
status=$?

echo
if [ $status -eq 0 ]; then
  echo "Done."
  echo "Your portfolio images and gallery data have been refreshed."
else
  echo "There was a problem while processing the images."
fi

echo
echo "Press Return to close this window."
read

exit $status

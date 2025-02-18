#!/bin/bash
set -euo
#
# Copyright 2018 Dan Field. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Note: This script runs on Mac and Linux. It requires `Node.js` to be installed
# and `flat` to be built (using `cmake` in the root directory).

sampledir=$(cd $(dirname $BASH_SOURCE) && pwd)
rootdir=$(cd $sampledir/.. && pwd)
currentdir=$(pwd)

if [[ "$sampledir" != "$currentdir" ]]; then
  # shellcheck disable=SC2086
  echo Error: This script must be run from inside the $sampledir directory.
  echo You executed it from the $currentdir directory.
  exit 1
fi

# Run `flatc`. Note: This requires you to compile using `cmake` from the
# root `/flatbuffers` directory.
# shellcheck disable=SC1073
if [ -e ../flatc ]; then
  ../flatc --dart -o ../dart/example/ monster.fbs
# shellcheck disable=SC1123
# shellcheck disable=SC1073
elif [ -e ../Debug/flatc ]; then
  ../Debug/flatc --dart -o ../dart/example/ monster.fbs
# shellcheck disable=SC1009
# shellcheck disable=SC1072
else
  # shellcheck disable=SC1073
  echo 'flatc' could not be found. Make sure to build FlatBuffers from the \
       # shellcheck disable=SC2086
       $rootdir directory.
  exit 1
fi

echo Running the Dart sample.

# Execute the sample.
dart ../dart/example/example.dart

# Copy the source schema so it is distributed when published to pub.dev
cp monster.fbs ../dart/example/

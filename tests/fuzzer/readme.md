# Test Flatbuffers library with help of libFuzzer

Test suite of Flatbuffers library has fuzzer section with tests are based on libFuzzer library.

> LibFuzzer is in-process, coverage-guided, evolutionary fuzzing engine.
> LibFuzzer is linked with the library under test, and feeds fuzzed inputs to the library via a specific fuzzing
> entrypoint (aka “target function”);
> the fuzzer then tracks which areas of the code are reached, and generates mutations on the corpus of input data in
> order
> to maximize the code coverage.
> The code coverage information for libFuzzer is provided by LLVM’s SanitizerCoverage instrumentation.

For details about **libFuzzer** see: https://llvm.org/docs/LibFuzzer.html

To build and run these tests LLVM compiler (with clang frontend) and CMake should be installed before.

The fuzzer section include four tests:

- `annotator_fuzzer` checks that inputs given to the flatc --annotate are always parsable;
- `verifier_fuzzer` checks stability of deserialization engine for `Monster` schema;
- `parser_fuzzer` checks stability of schema and json parser under various inputs;
- `scalar_parser` focused on validation of the parser while parse numeric scalars in schema and/or json files;
- `flexverifier_fuzzer` checks stability of deserialization engine for FlexBuffers only;

## Build

```sh
cd tests/fuzzer
CC=clang CXX=clang++ cmake . -DCMAKE_BUILD_TYPE=Debug -DUSE_ASAN=ON
```

## Run tests with a specific locale

The grammar of the Flatbuffers library is based on printable-ASCII characters.
By design, the Flatbuffers library should be independent of the global or thread locales used by an end-user
application.
Set environment variable `FLATBUFFERS_TEST_LOCALE` to run a fuzzer with a specific C-locale:

```sh
>FLATBUFFERS_TEST_LOCALE="" ./scalar_parser
>FLATBUFFERS_TEST_LOCALE="ru_RU.CP1251" ./parser_fuzzer
```

## Run fuzzer

These are examples of running a fuzzer.
Flags may vary and depend on a version of the libFuzzer library.
For details, run a fuzzer with `-help` flag: `./parser_fuzzer -help=1`

`./verifier_fuzzer ../.corpus_verifier/ ../.seed_verifier/`

`./parser_fuzzer -only_ascii=1 -max_len=500 -dict=../parser_fbs.dict ../.corpus_parser/ ../.seed_parser/`

`./monster_fuzzer -only_ascii=1 -max_len=500 -dict=../monster_json.dict ../.corpus_monster/ ../.seed_monster/`

`./scalar_fuzzer -use_value_profile=1 -max_len=500 -dict=../scalar_json.dict ../.corpus_scalar/ ../.seed_scalar/`

Flag `-only_ascii=1` is useful for fast number-compatibility checking while run `scalar_fuzzer`.

Run with a specific C-locale:
`FLATBUFFERS_TEST_LOCALE="ru_RU.CP1251" ./scalar_fuzzer -reduce_depth=1 -use_value_profile=1 -shrink=1 -max_len=3000 -timeout=10 -rss_limit_mb=2048 ../.corpus_parser/ ../.seed_parser/`

## Merge (minimize) corpus

The **libFuzzer** allow to filter (minimize) corpus with help of `-merge` flag:
> -merge
> If set to 1, any corpus inputs from the 2nd, 3rd etc. corpus directories that trigger new code coverage will be merged
> into the first corpus directory.
> Defaults to 0. This flag can be used to minimize a corpus.

Merge several corpuses to a seed directory (a new collected corpus to the seed collection, for example):
`./verifier_fuzzer -merge=1 ../.seed_verifier/ ../.corpus_verifier/`
`./parser_fuzzer -merge=1 ../.seed_parser/ ../.corpus_parser/`
`./monster_fuzzer -merge=1 ../.seed_monster/ ../.corpus_monster/`
`./scalar_fuzzer -merge=1 ../.seed_scalar/ ../.corpus_scalar/`

## Know limitations

- LLVM 7.0 std::regex library has problem with stack overflow, maximum length of input for `scalar_fuzzer` run should be
  limited to 3000.
  Example: `./scalar_fuzzer -max_len=3000`

# Fuzzing control

## Set timeout or memory limit

`-timeout=10 -rss_limit_mb=2048 -jobs=4 -workers=4`.

## Force stop on first UBSAN error

- `export UBSAN_OPTIONS=halt_on_error=1`
- `export ASAN_OPTIONS=halt_on_error=1`

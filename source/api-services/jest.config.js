// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

process.env.TZ = "UTC";
module.exports = {
  roots: ["<rootDir>/lib"],
  testMatch: ["**/*.spec.js"],
  collectCoverageFrom: ["**/*.js"],
  coverageReporters: ["text", "clover", "json", ["lcov", { projectRoot: "../../" }]],
};

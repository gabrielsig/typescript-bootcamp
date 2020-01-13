"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// // Create an instance of MatchReader
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport(),
// );
// summary.buildAndPrintReport(matchReader.matches);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
var consoleSummary = Summary_1.Summary.winsAnalysisWithConsoleReport('Man United');
htmlSummary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);

import {CsvFileReader} from './CsvFileReader';
import {MatchReader} from './MatchReader';

import {WinsAnalysis} from './analyzers/WinsAnalysis';
import {ConsoleReport} from './reportTargets/ConsoleReport';
import {HtmlReport} from './reportTargets/HtmlReport';
import {Summary} from './Summary';

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

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United');
const consoleSummary = Summary.winsAnalysisWithConsoleReport('Man United');

htmlSummary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);

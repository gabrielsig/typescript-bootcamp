import {WinsAnalysis} from './analyzers/WinsAnalysis';
import {ConsoleReport} from './reportTargets/ConsoleReport';
import {HtmlReport} from './reportTargets/HtmlReport';

import {MatchData} from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  analyzer: Analyzer;
  outputTarget: OutputTarget;

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    );
  }

  static winsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new ConsoleReport()
    );
  }

  constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const analysisOutput = this.analyzer.run(matches);
    this.outputTarget.print(analysisOutput);
  }
}
import { Report } from "../entities/Report";

export interface ReportRepo {
  save(report: Report): Promise<Report>;
}

import Airtable from "airtable";

export type QueryResult = {
  success: boolean;
  data: Airtable.Record<any>[];
  error: string;
}
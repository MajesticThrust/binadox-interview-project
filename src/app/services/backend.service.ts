import { Injectable } from "@angular/core";
import { AccountUsageData } from "../shared/models/account-usage-data";
import { UsageDetail } from "../shared/models/usage-detail";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

export enum ListSortOrder {
  /** Ascending order */
  asc = "asc",
  /** Descending order */
  desc = "desc"
}

export interface ListParams {
  /** search query */
  query?: string;
  /** page number */
  page?: number;
  /** limit items per page */
  limit?: number;
  /** sorted fields */
  sort?: string | string[];
  /** sorting order; default - ascending */
  order?: ListSortOrder | ListSortOrder[];
}

export interface AssignedLicencesResponseItem {
  accountUsageDataDto: AccountUsageData;
  usageDetailDto: UsageDetail;
}

@Injectable({
  providedIn: "root"
})
export class BackendService {
  constructor(private http: HttpClient) {}

  public assignedLicences(
    params: ListParams
  ): Observable<AssignedLicencesResponseItem[]> {
    const url = `${environment.backendUrl}/users`;

    return this.http
      .get<AssignedLicencesResponseItem[]>(url, {
        params: this.listParamsToHttp(params)
      })
      .pipe(
        map(response => {
          return response.map(({ accountUsageDataDto, usageDetailDto }) => {
            accountUsageDataDto = new AccountUsageData().deserialize(
              accountUsageDataDto
            );
            usageDetailDto = new UsageDetail().deserialize(usageDetailDto);

            const result: AssignedLicencesResponseItem = {
              accountUsageDataDto,
              usageDetailDto
            };

            return result;
          });
        })
      );
  }

  private listParamsToHttp(params: ListParams): HttpParams {
    const page = params.page ? params.page.toString() : undefined;
    const limit = params.limit ? params.limit.toString() : undefined;
    const sort =
      typeof params.sort === "string" ? params.sort : params.sort.join(",");
    const order =
      typeof params.order === "string" ? params.order : params.order.join(",");

    return new HttpParams({
      fromObject: {
        q: params.query,
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order
      }
    });
  }
}

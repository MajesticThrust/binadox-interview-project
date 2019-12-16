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
  /** element slice offset */
  offset?: number;
  /** slice element count */
  limit?: number;
  /** sorted fields */
  sort?: string | string[];
  /** sorting order; default - ascending */
  order?: ListSortOrder | ListSortOrder[];
}

export interface AssignedLicencesResponse {
  total: number;
  items: AssignedLicencesResponseItem[];
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
  ): Observable<AssignedLicencesResponse> {
    const url = `${environment.backendUrl}/users`;

    return this.http
      .get<AssignedLicencesResponseItem[]>(url, {
        params: this.listParamsToHttp(params),
        observe: "response"
      })
      .pipe(
        map(response => {
          // console.log(response);
          const result: AssignedLicencesResponse = {
            // appearantly json-server doesn't send this header despite the docs
            // (https://github.com/typicode/json-server#slice)
            total: response.headers["X-Total-Count"],
            items: []
          };

          if (response.body !== null) {
            result.items = response.body.map(
              ({ accountUsageDataDto, usageDetailDto }) => {
                accountUsageDataDto = new AccountUsageData().deserialize(
                  accountUsageDataDto
                );
                usageDetailDto = new UsageDetail().deserialize(usageDetailDto);

                const item: AssignedLicencesResponseItem = {
                  accountUsageDataDto,
                  usageDetailDto
                };

                return item;
              }
            );
          }

          return result;
        })
      );
  }

  private listParamsToHttp(params: ListParams): HttpParams {
    const start =
      typeof params.offset === "number" ? params.offset.toString() : undefined;
    const limit =
      typeof params.limit === "number" ? params.limit.toString() : undefined;
    const sort =
      typeof params.sort === "string" ? params.sort : params.sort.join(",");
    const order =
      typeof params.order === "string" ? params.order : params.order.join(",");

    return new HttpParams({
      fromObject: {
        q: params.query,
        _start: start,
        _limit: limit,
        _sort: sort,
        _order: order
      }
    });
  }
}

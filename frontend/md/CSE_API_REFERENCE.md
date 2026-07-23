# CSE API Reference

This document describes the CSE API surface used by the frontend in this repository.

Scope:
- Proxy route: `frontend/src/app/api/cse/[...endpoint]/route.ts`
- API client: `frontend/src/lib/cse-api.ts`
- Typed payloads: `frontend/src/lib/cse-types.ts`
- Python example: `frontend/src/apis/cseapi.py`

All requests are `POST` requests with `Content-Type: application/json`.
The frontend calls `/api/cse/<endpoint>`, and the Next.js route forwards the same JSON body to `https://www.cse.lk/api/<endpoint>`.

## Endpoint list

The proxy currently allows these CSE endpoints:

- `companyInfoSummery`
- `tradeSummary`
- `todaySharePrice`
- `topGainers`
- `topLooses`
- `mostActiveTrades`
- `getNewListingsRelatedNoticesAnnouncements`
- `getBuyInBoardAnnouncements`
- `approvedAnnouncement`
- `getCOVIDAnnouncements`
- `getFinancialAnnouncement`
- `circularAnnouncement`
- `directiveAnnouncement`
- `getNonComplianceAnnouncements`
- `marketStatus`
- `marketSummery`
- `aspiData`
- `snpData`
- `chartData`
- `allSectors`
- `detailedTrades`
- `dailyMarketSummery`
- `companyChartDataByStock`

## Request body fields

Most endpoints are called with an empty JSON body in the frontend.

### `companyInfoSummery`
- `symbol: string`

### `tradeSummary`
- The frontend client sends an empty body.
- The Python example in `frontend/src/apis/cseapi.py` posts `{ symbol: "HNB" }`.
- Because the app does not define a dedicated request type for this endpoint, treat the request body as implementation-dependent.

### `chartData`
- `symbol: string`
- `chartId: string`
- `period: string`

### `companyChartDataByStock`
- `stockId: string`
- `period: number`

### All other endpoints
- No request body fields are currently modeled in the frontend.

## Response schemas

### `tradeSummary`

Response envelope:

```json
{
  "reqTradeSummery": [
    { "...": "TradeSummaryItem" }
  ]
}
```

`TradeSummaryItem` fields:
- `id: number`
- `name: string`
- `symbol: string`
- `logoUrl: string`
- `quantity: number`
- `percentageChange: number`
- `change: number`
- `price: number`
- `previousClose: number`
- `high: number`
- `low: number`
- `lastTradedTime: number`
- `issueDate: string`
- `turnover: number`
- `sharevolume: number`
- `tradevolume: number`
- `marketCap: number`
- `marketCapPercentage: number`
- `open: number`
- `closingPrice: number`
- `crossingVolume: number`
- `crossingTradeVol: number`
- `status: number`

Notes:
- The field name is spelled `reqTradeSummery` in the API and in the codebase.
- The frontend reads `symbol`, `name`, `price`, `change`, `percentageChange`, `sharevolume`, `turnover`, `high`, `low`, `open`, `closingPrice`, `marketCap`, `quantity`, `status`, and `logoUrl` across different screens.

### `todaySharePrice`

Response is a plain array of `SharePriceItem`.

`SharePriceItem` fields:
- `id: number`
- `symbol: string`
- `open: number`
- `high: number`
- `low: number`
- `lastTradedPrice: number`
- `change: number`
- `changePercentage: number`
- `crossingVolume: number`
- `tradesTime: number`
- `quantity: number`

### `detailedTrades`

Response envelope:

```json
{
  "reqDetailTrades": [
    { "...": "DetailedTradeItem" }
  ]
}
```

`DetailedTradeItem` fields:
- `id: number`
- `securityId: number | null`
- `name: string`
- `symbol: string`
- `price: number`
- `qty: number`
- `trades: number`
- `change: number`
- `changePercentage: number`
- `logoUrl: string`

### `companyInfoSummery`

Response type in the frontend:

```ts
export interface CompanyInfoSummary {
  [key: string]: unknown;
}
```

Meaning:
- The codebase does not currently define a stable schema for this response.
- Treat the payload as an open object until a sample response is captured and typed.

### `topGainers` and `topLooses`

Response is a plain array of `GainerLoserItem`.

`GainerLoserItem` fields:
- `id: number`
- `securityId: number`
- `symbol: string`
- `price: number`
- `change: number`
- `changePercentage: number`
- `tradeDate: number`

### `mostActiveTrades`

Response is a plain array of `MostActiveItem`.

`MostActiveItem` fields:
- `id: number`
- `securityId: number`
- `symbol: string`
- `tradeVolume: number`
- `shareVolume: number`
- `turnover: number`
- `percentageShareVolume: number`

### `marketStatus`

Response type:

```ts
{
  status: string
}
```

Field:
- `status: string`

### `marketSummery`

Response type:

```ts
{
  id: number;
  tradeVolume: number;
  shareVolume: number;
  tradeDate: number;
  trades: number;
}
```

Fields:
- `id: number`
- `tradeVolume: number`
- `shareVolume: number`
- `tradeDate: number`
- `trades: number`

### `aspiData` and `snpData`

Response type:

```ts
{
  id: number;
  value: number;
  lowValue: number;
  highValue: number;
  change: number;
  percentage: number;
  sectorId: number;
  timestamp: number;
}
```

Fields:
- `id: number`
- `value: number`
- `lowValue: number`
- `highValue: number`
- `change: number`
- `percentage: number`
- `sectorId: number`
- `timestamp: number`

### `chartData`

Response type in the frontend is currently `any`.

Meaning:
- The app does not currently define a stable schema for the chart payload.
- The chart components in the frontend expect a transformed array of points with `year` and `value`, but that is a UI-level shape, not the raw API contract.

### `companyChartDataByStock`

Response type in the frontend is currently `any`.

Meaning:
- The app does not currently define a stable schema for the chart payload.
- The response should be captured from the live API before adding a strict type.

### `allSectors`

Response is a plain array of `SectorItem`.

`SectorItem` fields:
- `id: number`
- `sectorId: number`
- `symbol: string`
- `indexCode: string`
- `indexCodeSp: string`
- `indexName: string`
- `name: string`
- `indexValue: number`
- `change: number`
- `percentage: number`
- `sectorTradeToday: number`
- `sectorVolumeToday: number`
- `sectorTurnoverToday: number`
- `sectorPreviousClose: number`
- `transactionTime: number`

### `dailyMarketSummery`

Response type is a two-dimensional array: `DailyMarketItem[][]`.

`DailyMarketItem` fields:
- `id: number`
- `tradeDate: number`
- `marketTurnover: number`
- `marketTrades: number`
- `marketDomestic: number`
- `marketForeign: number`
- `equityTurnover: number`
- `equityDomesticPurchase: number`
- `equityDomesticSales: number`
- `equityForeignPurchase: number`
- `equityForeignSales: number`
- `volumeOfTurnOverNumber: number`
- `volumeOfTurnoverDomestic: number`
- `volumeOfTurnoverForeign: number`
- `tradesNo: number`
- `tradesNoDomestic: number`

### Announcement endpoints

The following endpoints all return announcement data, but the frontend keeps the schema loose because the payload shape can vary by category:

- `getNewListingsRelatedNoticesAnnouncements`
- `getBuyInBoardAnnouncements`
- `approvedAnnouncement`
- `getCOVIDAnnouncements`
- `getFinancialAnnouncement`
- `circularAnnouncement`
- `directiveAnnouncement`
- `getNonComplianceAnnouncements`

Frontend type:

```ts
export interface Announcement {
  [key: string]: unknown;
  id?: number;
  title?: string;
  description?: string;
  date?: string;
  symbol?: string;
  company?: string;
}
```

Known/common fields:
- `id?: number`
- `title?: string`
- `description?: string`
- `date?: string`
- `symbol?: string`
- `company?: string`

Open fields:
- Any other keys are allowed by the current type definition.

## Frontend usage notes

- `useCseApi.ts` exposes hooks for each endpoint and mirrors the same schema choices.
- `MarketDataPage.tsx` treats announcements as varying shapes and normalizes them with a helper that looks for the first array value in the response object.
- `EChartsLineChart.tsx` uses a UI-only series point shape of `{ year: string; value: number }` after the raw CSE data has been transformed.

## Important naming notes

The API and codebase use several misspelled endpoint and field names exactly as returned by CSE. These are intentional in the current implementation and should be preserved unless the API itself changes:

- `reqTradeSummery`
- `marketSummery`
- `dailyMarketSummery`
- `companyInfoSummery`
- `topLooses`

## Summary

The frontend currently has a fully typed schema for:
- trade summary
- today share price
- detailed trades
- gainers / losers
- most active trades
- market status
- market summary
- ASPI and S&P SL20 index data
- sector data
- daily market summary
- announcement envelope fields

The only intentionally loose payloads are:
- `companyInfoSummery`
- `chartData`
- `companyChartDataByStock`
- announcement category responses beyond the shared common fields
// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type pastEvent = {
  title: string;
  sponsored: string;
  date: string;
  field: string;
  content: string;
  image: string;
} & MicroCMSListContent;

// APIの呼び出し
export const getPastEvents = async (queries?: MicroCMSQueries) => {
  return await client.getList<pastEvent>({
    endpoint: "past-event",
    queries,
  });
};

export const getPastEventDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<pastEvent>({
    endpoint: "past-event",
    contentId,
    queries,
  });
};

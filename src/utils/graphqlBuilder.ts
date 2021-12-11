import axios from "axios";
// TODO: graphql request를 axios 하나만 사용하는게 맞나 ?d

const endPoint = "https://study-diary.hasura.app/v1/graphql";
const secretKey = process?.env?.REACT_APP_SECRETKEY || "";

type RequestBuilder = {
  method: "POST" | "GET";
  query: string,
  variables: object
}

const requestBuilder = async ({ method, query, variables }: RequestBuilder) => {
  const { data } = await axios({
    url: endPoint,
    method,
    headers: {
      "x-hasura-admin-secret": secretKey,
    },
    data: {
      query,
      variables,
    }
  });
  return data;
}

export const getSiteInfo = async (siteId: string) => {
  const { data } = await requestBuilder({
    method: "POST",
    query: `query isRegisterdSiteId($siteId: String) {
      siteInfo(where: {siteId: {_eq: $siteId}}) {
        idx,
        siteName,
        siteId
      }
    }`,
    variables: {
      siteId
    }
  });
  return Boolean(data.siteInfo.length);
}

export const insertDiaryOne = async (writeData: {
  siteIdx: number
  userId: number,
  link: string,
  content: string,
  keywords: string
}) => {
  await requestBuilder({
    method: "POST",
    query: `mutation MyMutation($object: diary_insert_input!) {
        insert_diary_one(object: $object){
          siteIdx,
          userId,
          link,
          content,
          keywords,
        }
      }`,
    variables: {
      "object": writeData
    }
  });

}

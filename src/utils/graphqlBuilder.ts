import axios from "axios";
// TODO: graphql request를 axios 하나만 사용하는게 맞나 ?d

const endPoint = "https://study-diary.hasura.app/v1/graphql";
const secretKey = process.env?.REACT_APP_SECRETKEY || "";

interface RequestBuilder {
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
  return data.siteInfo;
}

export const insertDiaryOne = async (writeData: {
  title: string,
  siteIdx: number
  userId: number,
  link: string,
  content: string,
  keywords: string
}) => {
  const { data } = await requestBuilder({
    method: "POST",
    query: `mutation MyMutation($object: diary_insert_input!) {
        insert_diary_one(object: $object){
          idx
        }
      }`,
    variables: {
      object: writeData
    }
  });
  return data?.insert_diary_one?.idx
}

export const getDiaryList = async (siteIdx: number) => {
  const { data } = await requestBuilder({
    method: "POST",
    query: `query getDiaryList($siteIdx: Int) {
      diary(where: {siteIdx: {_eq: $siteIdx}}) {
        idx,
        title,
        content,
        registerDate,
      }
    }`,
    variables: {
      siteIdx,
    }
  });
  return data.diary;
}

export const getDiaryDetail = async (siteIdx: number, idx: number) => {
  const { data } = await requestBuilder({
    method: "POST",
    query: `query getDiaryList($siteIdx: Int, $idx: Int) {
      diary(where: {siteIdx: {_eq: $siteIdx}, idx: {_eq: $idx}}) {
        idx,
        siteIdx,
        userId,
        keywords,
        link,
        registerDate,
        modifyDate,
        title,
        content
      }
    }`,
    variables: {
      siteIdx,
      idx,
    }
  });
  return data.diary;
}

export const deletePostOne = async (siteIdx: number, idx: number) => {
  const { data } = await requestBuilder({
    method: "POST",
    query: `mutation deleteDiaryOne($siteIdx: Int, $idx: Int) {
      delete_diary(where: {siteIdx: {_eq: $siteIdx}, _and: {idx: {_eq: $idx}}}) {
        affected_rows
      }
    }`,
    variables: {
      siteIdx,
      idx,
    }
  });
  return Boolean(data.delete_diary.affected_rows);
}

export const createDiary = async (siteId: string, siteName: string, sitePassword: string) => {
  const { data } = await requestBuilder({
    method: "POST",
    query: `mutation createDiary($siteId: String, $siteName: String, $sitePassword: String) {
      insert_siteInfo_one(object: {siteName: $siteName, sitePassword: $sitePassword, siteId: $siteId}) {
        siteId
      }
    }`,
    variables: {
      siteId,
      siteName,
      sitePassword,
    }
  });

}
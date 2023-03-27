import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const notionSecret = process.env.NEXT_PUBLIC_NOTION_KEY
const notionDatabaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE

// 노션 클라이언트를 인스턴스화
const notion = new Client({ auth : notionSecret })

type Row = {
   post_id : {id: String, title : {text : {content : string}}[]}
   title : {id : string, rich_text : {text : {content : string}}[]}
   content : {id : string, rich_text : {text : {content : string}}[]}
   reg_dt : {id : string, rich_text : {text : {content : string}}[]}
}

 // 게시물을 가져오는 함수를 정의
// 함수를 사용하여 개체를 내보냄 -> 프로젝트 내의 다른 파일에서 함수에 액세스할 수 있도록 함
// index.ts로 보냄
export default async function posts () {
   if (!notionSecret || !notionDatabaseId) throw new Error ('Missing notion secret or DB-ID')

   const query = await notion.databases.query({
      database_id : notionDatabaseId
   })

   return query;
}

export { posts }
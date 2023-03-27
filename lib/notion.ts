import { Client } from '@notionhq/client';

// 노션 클라이언트를 인스턴스화
const client = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
 });

 // 게시물을 가져오는 함수를 정의
 async function posts() {
    const posts = await client.databases.query({
        database_id : `${process.env.NEXT_PUBLIC_NOTION_DATABASE}`,
    })
    return posts;
 }

 // 함수를 사용하여 개체를 내보냄 -> 프로젝트 내의 다른 파일에서 함수에 액세스할 수 있도록 함
 // index.ts로 보내겠음
 export {
    posts
 }
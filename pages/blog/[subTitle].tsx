/* eslint-disable react-hooks/rules-of-hooks */
import Body from "../../components/common/Body";
import DetailHeader from "../../components/detail/DetailHeader";
import { supabase } from "../../lib/supabase";

const Detail = ({ data }) => {
  let content = data[0].content;

  return (
    <div className="container mx-auto">
      <div>
        <Body>
          <div className="px-6">
            <main className="pb-10">
              <article className="relative">
                <DetailHeader title={data[0].title} regDt={data[0].reg_dt} />
                <div className="prose prose-base prose-cyan w-full max-w-full prose-a:!text-cyan-500 prose-a:underline-offset-[3px] md:prose-lg nuxt-content">
                  <p
                    className="text-lg my-4"
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></p>
                </div>
                <div className="bg-gray-700 bg-opacity-40 w-full h-px my-4 mt-20 mb-10"></div>
                {/* recent post */}
                <div className="giscus mt-10"></div>
              </article>
            </main>
          </div>
        </Body>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const subTitle = context.params.subTitle;

  let { data } = await supabase.from("post").select().eq("sub_title", subTitle);

  return {
    props: { data },
  };
}

export default Detail;

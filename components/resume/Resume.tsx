/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { supabase } from "../../lib/supabase";

import ResumeBody from "./ResumeBody";
import ResumeSection from "./ResumeSection";

export default function getResume() {
  const [resumeList, setResume] = useState([]);

  useEffect(() => {
    supabase
      .from('resume')
      .select()
      .then((result) => {
        console.log(result);

        if (result.error) console.log(result.error);

        setResume(result.data);
      });
  }, []);

  return (
    <div>
      <ResumeBody>
        <div className="flex">
          <div className="space-y-6 mt-6 md:mt-0 md:ml-10">
            <dl className="flex">
              <dt className="flex flex-col uppercase font-semibold w-28 py-5">
                <span className="text-3xl text-textColor">Resume</span>
              </dt>
            </dl>
            <main className="mt-16 space-y-20">
              <section className="py-3">
                <div className="mb-10">
                  <h3 className="text-sm font-medium text-gray-500 uppercase">profile</h3>
                  <h2 className="text-2xl text-textColor font-semibold">프로필</h2>
                </div>
                {resumeList.map((resume) => (
                  <div key={resume.resume_id}>
                    <ResumeSection
                      title_kor={resume.title_kor}
                      title_eng={resume.title_eng}
                      content={resume.content}
                    />
                  </div>
                ))}
              </section>
            </main>
          </div>
        </div>
      </ResumeBody>
    </div>
  );
}

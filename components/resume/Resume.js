import ResumeBody from "./ResumeBody";
import ResumeSection from "./ResumeSection";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Resume() {
  const router = useRouter();

  return (
    <div>
      <ResumeBody>
        <div className="flex">
          <div class="space-y-6 mt-6 md:mt-0 md:ml-10">
            <dl class="flex">
              <dt class="flex flex-col uppercase font-semibold w-28 py-5">
                <span class="text-3xl text-textColor">Resume</span>
              </dt>
            </dl>
            <main className="mt-16 space-y-20">
              <ResumeSection />
              <ResumeSection />
            </main>
          </div>
        </div>
      </ResumeBody>
    </div>
  );
}

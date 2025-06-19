"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Body() {
  return (
    <>
      <div className="m-auto flex-col bg-black w-full max-w-[1300px] p-5">
        <div className="mb-5 text-white flex-column text-center m-auto w-[800px]">
          <h1 className="text-2xl">Prompt Maker</h1>
          <p>
            Describe what you want your bot to do and we’ll turn it into a
            clear, structured prompt ready to drop into your Botpress Autonomous
            Node. No guesswork, just great prompts!
          </p>
        </div>
        <div className="flex justify-around mt-12">
          <Textarea
            className="w-[40%] text-white border-2 border-solid border-red-300 border-opacity-20"
            placeholder="What do you want the bot to do?"
          />
          <Button className="self-center">Generate</Button>
          <Textarea
            className="w-[40%] h-80"
            placeholder=""
            /* Disabled because this is where the Prompt will be */
            // disabled
            disabled
          />
        </div>
      </div>
    </>
  );
}

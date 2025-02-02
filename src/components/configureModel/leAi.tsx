import React from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { Input } from "@ltopx/lx-ui";
import { useOpenAIStore } from "@/hooks/useOpenAI";

export default function LeAi() {
  const tSetting = useTranslations("setting");
  const tCommon = useTranslations("common");

  const leAIKey = useOpenAIStore((state) => state.leAIKey);

  const updateLeAIKey = useOpenAIStore((state) => state.updateLeAIKey);

  const onBlur = () => {
    if (leAIKey && !leAIKey.startsWith("leai-")) {
      toast.error(tSetting("leai-api-key-error"));
      updateLeAIKey("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-sm text-[hsl(240,3.8%,46.1%)]">
        {tSetting("leai-api-tip")}{" "}
        <a
          href="https://docs.le-ai.app/api-key-configure/le-ai"
          className="text-sky-400 hover:text-sky-500 transition-colors hover:underline"
          target="_blank"
        >
          {tCommon("learn-more")}
        </a>
      </div>
      <div>
        <div className="mb-1 text-sm">Le-AI API Key</div>
        <Input
          allowClear
          placeholder={tSetting("set-leai-api-key")}
          type="password"
          value={leAIKey}
          onChange={updateLeAIKey}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}

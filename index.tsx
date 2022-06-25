import "@logseq/libs";
import { LSPluginBaseInfo } from "@logseq/libs/dist/LSPlugin.user";
import { settingSchema } from "./setting-schema";
import { h, render } from "preact";
import PtnModal from "./components/PtnModal";

/**
 * main entry
 * @param baseInfo
 */
function main(baseInfo: LSPluginBaseInfo) {
  render(<PtnModal />, document.getElementById("app")!);

  logseq.provideModel({
    openModal() {
      console.log("ptn log --- open modal");
      console.log("ptn log --- user settings", baseInfo?.settings);
      logseq.showMainUI();
      console.log("ptn log --- showed main ui");
    },
  });

  logseq.App.registerUIItem("toolbar", {
    key: "ptn-logseq-starter",
    template: `
      <a data-on-click="openModal"
         class="button">
        <i class="ti ti-wand"></i>
      </a>
    `,
  });

  logseq.useSettingsSchema(settingSchema);
}

logseq.ready(main).catch(console.error);

import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin";

const settingSchema: SettingSchemaDesc[] = [
  {
    key: "example_setting",
    title: "Example Setting",
    description: "Description of the example setting",
    type: "string",
    default: "",
  },
  {
    key: "example_boolean_setting",
    title: "Example Boolean Setting",
    description: "Description of the example boolean setting. This setting is a boolean.",
    default: true,
    type: "boolean",
  },
];

export { settingSchema };

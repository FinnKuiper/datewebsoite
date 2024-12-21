import { createDirectus, rest } from "@directus/sdk";
const directus = createDirectus("https://admindate.finnkuiper.boo").with(rest());
export default directus;
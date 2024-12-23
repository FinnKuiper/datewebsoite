import { createDirectus, rest } from "@directus/sdk";
const directus = createDirectus("https://admindate.finnkuiper.boo").with(rest({
    onRequest: (options) => 
        ({
            ...options, cache: "no-store",
        })
}));
export default directus;
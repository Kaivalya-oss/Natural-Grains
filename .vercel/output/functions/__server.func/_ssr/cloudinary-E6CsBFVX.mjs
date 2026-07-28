import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-DHLHTaCP.mjs";
import { c as cloudinaryExports } from "../_libs/cloudinary.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "url";
import "querystring";
import "fs";
import "path";
import "https";
import "http";
import "../_libs/lodash.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getCloudinaryImages_createServerFn_handler = createServerRpc({
  id: "ab7f1a38c9fb738b5b1327697a4eb20010632758df7fcc666e681db9303df8b8",
  name: "getCloudinaryImages",
  filename: "src/api/cloudinary.ts"
}, (opts) => getCloudinaryImages.__executeServer(opts));
const getCloudinaryImages = createServerFn({
  method: "GET"
}).handler(getCloudinaryImages_createServerFn_handler, async () => {
  cloudinaryExports.v2.config({
    cloud_name: "dvyemnzkd",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  try {
    const result = await cloudinaryExports.v2.search.expression("folder:Natural-grains").sort_by("created_at", "desc").max_results(50).execute();
    return result.resources.map((res) => ({
      id: res.public_id,
      url: res.secure_url,
      width: res.width,
      height: res.height
    }));
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return [];
  }
});
export {
  getCloudinaryImages_createServerFn_handler
};

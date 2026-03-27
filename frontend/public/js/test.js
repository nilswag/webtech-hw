import { log } from "./util/logging.js";
import { getData } from "./util/api.js";

log(await getData("/players"));
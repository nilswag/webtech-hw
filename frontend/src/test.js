import { log } from "../../common/util/logging";
import { getData } from "./util/api";

log(await getData("/players"));
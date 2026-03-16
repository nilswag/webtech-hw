import * as setup from "../database/setup.js"
setup.test();

import { test } from "../database/queries/testQueries.js";
const result = await test();
console.log(result);

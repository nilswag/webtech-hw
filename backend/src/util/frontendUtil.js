import path from "path";
import { fileURLToPath } from "url";

export const __fileName = fileURLToPath(import.meta.url);
export const __rootDirName = path.join(path.dirname(__fileName), "../../../");

/**
 * Helper to construct paths for static html files.
 * @param  {...any} args The path strings.
 * @returns Concatenated string of pathS.
 */
export function staticHtml(...args) {
    return path.join(__rootDirName, "frontend/public/html", ...args);
}
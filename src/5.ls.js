import { walk } from "https://deno.land/std/fs/mod.ts";

for await (const entry of walk(".", { maxDepth: 1 })) {
  console.log(`${entry.path}${entry.isDirectory ? "/" : ""}`);
}

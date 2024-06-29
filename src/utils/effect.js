import { GlowFilter } from "pixi-filters";

export function applyGlowFliter(target, options) {
  const glowFilter = new GlowFilter(options);
  if (!target.filters || target.filters.length == 0) {
    target.filters = [glowFilter];
    target.glowFilter = glowFilter;
  } else if (!target.glowFilter) {
    target.filters = [...target.filters, glowFilter];
  }
}

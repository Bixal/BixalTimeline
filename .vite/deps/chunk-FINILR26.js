import {
  capitalize_default
} from "./chunk-3RVMXWN5.js";
import {
  require_react
} from "./chunk-6DDWND5A.js";
import {
  __toESM
} from "./chunk-4EOJPDL2.js";

// node_modules/@mui/lab/Timeline/TimelineContext.js
var React = __toESM(require_react());
var TimelineContext = React.createContext({});
if (true) {
  TimelineContext.displayName = "TimelineContext";
}
var TimelineContext_default = TimelineContext;

// node_modules/@mui/lab/internal/convertTimelinePositionToClass.js
function convertTimelinePositionToClass(position) {
  return position === "alternate-reverse" ? "positionAlternateReverse" : `position${capitalize_default(position)}`;
}

export {
  TimelineContext_default,
  convertTimelinePositionToClass
};
//# sourceMappingURL=chunk-FINILR26.js.map

import {
  TimelineContext_default,
  convertTimelinePositionToClass
} from "./chunk-FINILR26.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_m_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-OI7AOZV2.js";
import {
  require_react
} from "./chunk-6DDWND5A.js";
import {
  __toESM
} from "./chunk-4EOJPDL2.js";

// node_modules/@mui/lab/Timeline/Timeline.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/lab/Timeline/timelineClasses.js
function getTimelineUtilityClass(slot) {
  return generateUtilityClass("MuiTimeline", slot);
}
var timelineClasses = generateUtilityClasses("MuiTimeline", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
var timelineClasses_default = timelineClasses;

// node_modules/@mui/lab/Timeline/Timeline.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["position", "className"];
var useUtilityClasses = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", position && convertTimelinePositionToClass(position)]
  };
  return composeClasses(slots, getTimelineUtilityClass, classes);
};
var TimelineRoot = styled_default("ul", {
  name: "MuiTimeline",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.position && styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})({
  display: "flex",
  flexDirection: "column",
  padding: "6px 16px",
  flexGrow: 1
});
var Timeline = React.forwardRef(function Timeline2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeline"
  });
  const {
    position = "right",
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    position
  });
  const classes = useUtilityClasses(ownerState);
  const contextValue = React.useMemo(() => ({
    position
  }), [position]);
  return (0, import_jsx_runtime.jsx)(TimelineContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime.jsx)(TimelineRoot, _extends({
      className: clsx_m_default(classes.root, className),
      ownerState,
      ref
    }, other))
  });
});
true ? Timeline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * className applied to the root element.
   */
  className: import_prop_types.default.string,
  /**
   * The position where the TimelineContent should appear relative to the time axis.
   * @default 'right'
   */
  position: import_prop_types.default.oneOf(["alternate-reverse", "alternate", "left", "right"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Timeline_default = Timeline;

export {
  getTimelineUtilityClass,
  timelineClasses_default,
  Timeline_default
};
//# sourceMappingURL=chunk-JBTRATLG.js.map

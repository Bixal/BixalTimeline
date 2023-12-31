import {
  timelineContentClasses_default
} from "./chunk-YLPRDC35.js";
import {
  Typography_default
} from "./chunk-CN2IJDUX.js";
import {
  TimelineContext_default,
  convertTimelinePositionToClass
} from "./chunk-FINILR26.js";
import {
  isMuiElement_default
} from "./chunk-3RVMXWN5.js";
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

// node_modules/@mui/lab/TimelineItem/TimelineItem.js
var React2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineOppositeContent/timelineOppositeContentClasses.js
function getTimelineOppositeContentUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineOppositeContent", slot);
}
var timelineOppositeContentClasses = generateUtilityClasses("MuiTimelineOppositeContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
var timelineOppositeContentClasses_default = timelineOppositeContentClasses;

// node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className"];
var useUtilityClasses = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", convertTimelinePositionToClass(position)]
  };
  return composeClasses(slots, getTimelineOppositeContentUtilityClass, classes);
};
var TimelineOppositeContentRoot = styled_default(Typography_default, {
  name: "MuiTimelineOppositeContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})(({
  ownerState
}) => _extends({
  padding: "6px 16px",
  marginRight: "auto",
  textAlign: "right",
  flex: 1
}, ownerState.position === "left" && {
  textAlign: "left"
}));
var TimelineOppositeContent = React.forwardRef(function TimelineOppositeContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineOppositeContent"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    position: positionContext
  } = React.useContext(TimelineContext_default);
  const ownerState = _extends({}, props, {
    position: positionContext || "left"
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(TimelineOppositeContentRoot, _extends({
    component: "div",
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineOppositeContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
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
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
TimelineOppositeContent.muiName = "TimelineOppositeContent";
var TimelineOppositeContent_default = TimelineOppositeContent;

// node_modules/@mui/lab/TimelineItem/timelineItemClasses.js
function getTimelineItemUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineItem", slot);
}
var timelineItemClasses = generateUtilityClasses("MuiTimelineItem", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse", "missingOppositeContent"]);
var timelineItemClasses_default = timelineItemClasses;

// node_modules/@mui/lab/TimelineItem/TimelineItem.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["position", "className"];
var useUtilityClasses2 = (ownerState) => {
  const {
    position,
    classes,
    hasOppositeContent
  } = ownerState;
  const slots = {
    root: ["root", convertTimelinePositionToClass(position), !hasOppositeContent && "missingOppositeContent"]
  };
  return composeClasses(slots, getTimelineItemUtilityClass, classes);
};
var TimelineItemRoot = styled_default("li", {
  name: "MuiTimelineItem",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  display: "flex",
  position: "relative",
  minHeight: 70
}, ownerState.position === "left" && {
  flexDirection: "row-reverse"
}, (ownerState.position === "alternate" || ownerState.position === "alternate-reverse") && {
  [`&:nth-of-type(${ownerState.position === "alternate" ? "even" : "odd"})`]: {
    flexDirection: "row-reverse",
    [`& .${timelineContentClasses_default.root}`]: {
      textAlign: "right"
    },
    [`& .${timelineOppositeContentClasses_default.root}`]: {
      textAlign: "left"
    }
  }
}, !ownerState.hasOppositeContent && {
  "&:before": {
    content: '""',
    flex: 1,
    padding: "6px 16px"
  }
}));
var TimelineItem = React2.forwardRef(function TimelineItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineItem"
  });
  const {
    position: positionProp,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const {
    position: positionContext
  } = React2.useContext(TimelineContext_default);
  let hasOppositeContent = false;
  React2.Children.forEach(props.children, (child) => {
    if (isMuiElement_default(child, ["TimelineOppositeContent"])) {
      hasOppositeContent = true;
    }
  });
  const ownerState = _extends({}, props, {
    position: positionProp || positionContext || "right",
    hasOppositeContent
  });
  const classes = useUtilityClasses2(ownerState);
  const contextValue = React2.useMemo(() => ({
    position: ownerState.position
  }), [ownerState.position]);
  return (0, import_jsx_runtime2.jsx)(TimelineContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime2.jsx)(TimelineItemRoot, _extends({
      className: clsx_m_default(classes.root, className),
      ownerState,
      ref
    }, other))
  });
});
true ? TimelineItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types2.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The position where the timeline's item should appear.
   */
  position: import_prop_types2.default.oneOf(["alternate-reverse", "alternate", "left", "right"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
var TimelineItem_default = TimelineItem;

export {
  getTimelineOppositeContentUtilityClass,
  timelineOppositeContentClasses_default,
  TimelineOppositeContent_default,
  getTimelineItemUtilityClass,
  timelineItemClasses_default,
  TimelineItem_default
};
//# sourceMappingURL=chunk-VAUJZ4PH.js.map

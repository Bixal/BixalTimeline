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

// node_modules/@mui/lab/TimelineSeparator/TimelineSeparator.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineSeparator/timelineSeparatorClasses.js
function getTimelineSeparatorUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineSeparator", slot);
}
var timelineSeparatorClasses = generateUtilityClasses("MuiTimelineSeparator", ["root"]);
var timelineSeparatorClasses_default = timelineSeparatorClasses;

// node_modules/@mui/lab/TimelineSeparator/TimelineSeparator.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTimelineSeparatorUtilityClass, classes);
};
var TimelineSeparatorRoot = styled_default("div", {
  name: "MuiTimelineSeparator",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column",
  flex: 0,
  alignItems: "center"
});
var TimelineSeparator = React.forwardRef(function TimelineSeparator2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineSeparator"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(TimelineSeparatorRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineSeparator.propTypes = {
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
var TimelineSeparator_default = TimelineSeparator;

export {
  getTimelineSeparatorUtilityClass,
  timelineSeparatorClasses_default,
  TimelineSeparator_default
};
//# sourceMappingURL=chunk-XR57WH4K.js.map

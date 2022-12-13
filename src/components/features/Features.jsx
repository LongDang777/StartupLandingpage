import React from "react";
import { forwardRef } from "react";
import CoreFeatures from "./coreFeatures/CoreFeatures";
import CoreSmart from "./coreSmart/CoreSmart";
import FeaturesApp from "./featureApp/FeaturesApp";
import FeatureWorks from "./featureWork/FeatureWorks";
import Quality from "./qualityFeature/Quality";

function Features(props, ref) {
  return (
    <div ref={ref}>
      <FeaturesApp/>
      <CoreFeatures />
      <Quality />
      <CoreSmart />
      <FeatureWorks />
    </div>
  );
}
export default forwardRef(Features);
